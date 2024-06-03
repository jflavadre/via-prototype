import Machine from "../../models/machineModels.js";

export const postRegister = async (req, res) => {
	try {
		const { machineID, lotID, machineType, customer } = req.body;
		//New User　を作成
		const newMachine = new Machine({
			machineID,
			lotID,
			machineType,
			customer,
		});
		//Machine　をデータベースに保存
		const machineSaved = await newMachine.save();

		res.locals.user = req.user;

		res.render("machine/registered", { machineSaved });
	} catch (error) {
		console.log(
			"------------MachineをDB登録のエラーが発生しています------------"
		);
		res.status(500).json({ message: error.message });
	}
};
