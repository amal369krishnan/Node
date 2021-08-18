import models from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
	const { body } = req;
	const existUser = await models.find({
		username: body.username,
	});
	if (body && existUser.length === 0) {
		body.password = await bcrypt.hash(body.password, 10);
		const user = new models(body);
		try {
			const data = await user.save();
			return res.status(201).json(data);
		} catch (error) {
			return res.json(error);
		}
	}
	return res.status(400).json("Something went wrong");
}

export async function loginUser(req, res) {
	const { body } = req;
	try {
		if (body.username && body.password) {
			const existUser = await models.find({
				username: body.username,
			});
			if (existUser.length !== 0) {
				const exist = await bcrypt.compare(
					body.password,
					existUser[0].password
				);

				if (exist) {
					existUser.token = await jwt.sign(
						{ username: existUser.username, id: existUser._id },
						"salt@123",
						{ expiresIn: 18000 }
					);
					const data = {
						token: existUser.token,
						username: existUser[0].username,
						fullname: existUser[0].fullName,
					};
					return res.status(200).json(data);
				}
				return res.status(400).send("username/password is invalid");
			}
			return res.status(400).send("username/password is invalid");
		}
		return res.status(401).send("username/password is invalid");
	} catch (error) {
		return res.json(error);
	}
}

export async function listingAlluser(req, res) {
	try {
		const response = await models.find({});
		return res.status(201).json(response);
	} catch (error) {
		return res.status(401).json(error);
	}
}

export async function findOne(req, res) {
	try {
		const response = await models.findById(req.params.id);
		if (!response) {
			return res.status(401).send("Invalid user");
		}
		return res.status(201).json(response);
	} catch (error) {
		return res.status(401).json(error);
	}
}

export async function updateUser(req, res) {
	try {
		const user = await models.findById(req.body._id);
		if (!user) {
			return res.status(400).send("Invalid user");
		}
		user.username = req.body.username;
		user.password = req.body.password;
		user.fullName = req.body.fullName;
		const data = await user.save();
		return res.status(200).json(data);
	} catch (error) {
		return res.status(401).json(error);
	}
}


