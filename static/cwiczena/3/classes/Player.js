class Player {
	constructor() {
		this.geometry = new THREE.BoxGeometry(100, 100, 100);
		this.material = new THREE.MeshBasicMaterial({
			color: 0x8888ff,
			wireframe: true,
			transparent: true,
			opacity: 0.5,
		});

		this.container = new THREE.Object3D();

		this.player = new THREE.Mesh(this.geometry, this.material); // player sześcian

		this.container.add(this.player); // kontener w którym jest player

		this.axes = new THREE.AxesHelper(200); // osie konieczne do kontroli kierunku ruchu

		this.container.add(this.axes);
	}

	//funkcja zwracająca cały kontener

	getPlayerCont() {
		return this.container;
	}

	//funkcja zwracająca playera czyli sam sześcian

	getPlayerMesh() {
		return this.player;
	}
}
