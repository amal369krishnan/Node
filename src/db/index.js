import mongoose from "mongoose";

export default async function mongodbconnector() {
	const url =
		"mongodb+srv://amal369krishnan:sJ08OkH8KzL5LnUL@cluster0.vvp7w.mongodb.net/Testdb?retryWrites=true&w=majority";
	try {
		await mongoose
			.connect(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log("connected to mongo db"));
	} catch (error) {
		console.log(error);
	}
}

//connection using mongoclient

/*const { MongoClient } = require("mongodb");
const uri =
	"mongodb+srv://amal369krishnan:<password>@cluster0.vvp7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
client.connect((err) => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});*/
