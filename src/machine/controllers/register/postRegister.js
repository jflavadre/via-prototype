import Machine from "../../models/machineModels.js";
import Regulate03 from "../../../process/models/regulate03Models.js";

export const postRegister = async (req, res) => {
	try {
		//---- Global "user"
		res.locals.user = req.user;
		//---- Body data
		const { machineID, lotID, machineType, customer } = req.body;
		//---- 新しい機械を作成
		const newMachine = new Machine({
			machineID,
			lotID,
			machineType,
			customer,
		});
		//---- 最終まとめ３を追加
		const newRegulate03 = new Regulate03({
			machine_id: newMachine._id,
			machineInfo: {
				machineID,
				lotID,
				machineType,
				customer,
			},
		});
		//---- 機械に工程の「object_id」をそれぞれ追加する
		newMachine.process.regulate03_id = newRegulate03._id;
		//---- 機械をデータベースに保存
		const machineSaved = await newMachine.save();
		//---- 作業工程をデータベースに保存
		const regulate03Saved = await newRegulate03.save();

		res.render("machine/registered", { machineSaved });
	} catch (error) {
		console.log(
			"------------MachineをDB登録のエラーが発生しています------------"
		);
		res.status(500).json({ message: error.message });
	}
};
