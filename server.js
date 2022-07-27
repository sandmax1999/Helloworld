// Import Express package to make the application server
const express = require('express')

// Instantiating the express module
const app = express()
const port = process.env.VCAP_APP_PORT || 5000

// Creating the API with route (hello)
// req -> Request (Input) -> http://.../hello?user=Shubh
// res-> Response
app.get('/hello', (req, res) => {
	console.log("how are you!")
	console.log(req.query.user)
	res.send("Helllooo" + ' ' + req.query.user)
})

app.listen(port, () => {
	console.log('Server is running on port 5000')
})

console.log("Welcome to SAP BTP");