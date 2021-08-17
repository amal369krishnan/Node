import mongoose from "mongoose";

const user = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
});

export default mongoose.model("user", user);
