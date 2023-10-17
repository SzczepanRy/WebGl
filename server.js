const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

let i = 0;
app.get('/', (req, res) => {
	i = 0;
	fs.readdir(path.join(__dirname, '/static/cwiczena'), function (err, files) {
		if (err) {
			return console.log(err);
		} else {
			console.log(files);
			files.map(() => {
				i++;
			});
			console.log(i);
			// res.json({ i });
		}
	});
	res.sendFile(path.join(__dirname, '/static/index.html'));
});
app.get('/num', (req, res) => {
	console.log(i);
	res.json({ i });
});
app.use(express.static('static'));
app.use(express.static('static/cwiczenia'));
app.get('/cw/:id', (req, res) => {
	const { id } = req.params;

	res.sendFile(path.join(__dirname, `/static/cwiczena/${id}.html`));
});
app.listen(3000, () => {
	console.log('runnin');
});
