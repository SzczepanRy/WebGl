const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

let i = 0;
let y = 0
app.get('/', (req, res) => {
	i = 0; y = 0;
	fs.readdir(path.join(__dirname, '/static/cwiczena/1'), function (err, files) {
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
	fs.readdir(path.join(__dirname, '/static/cwiczena/2'), function (err, files) {
		if (err) {
			return console.log(err);
		} else {
			console.log(files);
			files.map(() => {
				y++;
			});

			// res.json({ i });
		}
	});
	res.sendFile(path.join(__dirname, '/static/index.html'));
});
app.get('/num', (req, res) => {
	console.log(i, y);
	res.json({ i, y });
});
app.use(express.static('static'));
app.use(express.static('static/cwiczenia'));
app.get('/cw/:id', (req, res) => {
	const { id } = req.params;

	res.sendFile(path.join(__dirname, `/static/cwiczena/1/${id}.html`));
});
app.get('/cw2/:id', (req, res) => {
	const { id } = req.params;

	res.sendFile(path.join(__dirname, `/static/cwiczena/2/${id}.html`));
});
app.get('/cw2/mats/:img', (req, res) => {
	const { img } = req.params;

	res.sendFile(path.join(__dirname, `/static/mats/${img}`));
});
app.listen(3000, () => {
	console.log('runnin');
});
