import Machine from "../../machine/models/machineModels.js";
import Regulate03 from "../models/regulate03Models.js";

//---- 現在時刻を月日で表示する　 例："12/23"
const finishedTime = new Date().toLocaleString("ja-JP", {
	timeZone: "Asia/Tokyo",
	month: "numeric",
	day: "numeric",
});

export const putRegulate03 = async (req, res) => {
	try {
		//---- Global "user"
		res.locals.user = req.user;
		//---- 作業完了のARRAYを作成　 例：[true, '11/23', '和田']
		const finishedArray = [true, finishedTime, req.user.firstName];
		//---- 更新された機械の情報を引き出す
		let machineData;
		//---- if updateData 01 === true
		if (req.query.RePro01 === "true") {
			machineData = await Regulate03.findByIdAndUpdate(req.params.id, {
				process01: finishedArray,
			});
		}
		//---- if updateData 02 === true
		if (req.query.RePro02 === "true") {
			machineData = await Regulate03.findByIdAndUpdate(req.params.id, {
				process02: finishedArray,
			});
		}
		//---- if updateData 03 === true
		if (req.query.RePro03 === "true") {
			machineData = await Regulate03.findByIdAndUpdate(req.params.id, {
				process03: finishedArray,
			});
		}
		//---- if updateData 04 === true
		if (req.query.RePro04 === "true") {
			machineData = await Regulate03.findByIdAndUpdate(req.params.id, {
				process04: finishedArray,
			});
		}
		//---- if updateData 05 === true
		if (req.query.RePro05 === "true") {
			machineData = await Regulate03.findByIdAndUpdate(req.params.id, {
				process05: finishedArray,
			});
		}
		//---- if updateData 06 === true
		if (req.query.RePro06 === "true") {
			machineData = await Regulate03.findByIdAndUpdate(req.params.id, {
				process06: finishedArray,
			});
		}
		return res.redirect(`/process/machine/${machineData.machine_id}?updateMessage=true`);
		return console.log(req.query);
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
			"------------ProcessをDB更新のエラーが発生しています------------"
		);
		res.status(500).json({ message: error.message });
	}
};
