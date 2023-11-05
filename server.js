const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

let i = 0;
let y = 0;
let x = -1;
app.get('/', (req, res) => {
	i = 0;
	y = 0;
	x = -1;
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
	fs.readdir(path.join(__dirname, '/static/cwiczena/3'), function (err, files) {
		if (err) {
			return console.log(err);
		} else {
			console.log(files);
			files.map(() => {
				x++;
			});

			// res.json({ i });
		}
	});
	res.sendFile(path.join(__dirname, '/static/index.html'));
});
app.get('/num', (req, res) => {
	console.log(i, y, x);
	res.json({ i, y, x });
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

app.get('/cw3/:id', (req, res) => {
	const { id } = req.params;

	res.sendFile(path.join(__dirname, `/static/cwiczena/3/${id}.html`));
});
app.get('/cw3/classes/*', (req, res) => {
	const arr = JSON.stringify(req.path).slice(1, -1).split('/');
	const val = arr[3];

	res.sendFile(path.join(__dirname, `/static/cwiczena/3/classes/${val}`));
});
app.listen(3000, () => {
	console.log('runnin');
});
