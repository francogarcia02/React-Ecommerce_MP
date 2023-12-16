const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-3652175411940051-121517-c18066012dc48d8dd7e5db9535732cba-268690875",
});

app.use(express.json());
app.use(cors());
app.get("/", function (req, res) {
	res.send("Servidor en funcionamiento");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			success: "http://localhost:3000/confirmed",
			failure: "http://localhost:3000/",
			pending: ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});