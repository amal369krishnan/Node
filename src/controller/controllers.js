import models from "../models/index.js";

export default async function createUser(req, res) {
	const { body } = req;
	const existUser = await models.find({
		username: body.username,
	});
	console.log(existUser);
	if (body && existUser.length === 0) {
		const user = new models({
			username: body.username,
			password: body.password,
			fullName: body.fullName,
		});
		try {
			const data = await user.save();
			return res.status(201).json(data);
		} catch (error) {
			return res.json(error);
		}
	}
	return res.status(400).json("Something went wrong");
}
