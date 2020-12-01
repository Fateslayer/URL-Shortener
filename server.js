const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist/'));

app.get(/.*/, (req, res) => {
	res.sendfile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
	console.log(`Server Started At Port: ${PORT}`);
});
