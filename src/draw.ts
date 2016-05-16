export class Game {
	constructor() {}
	
	renderer: THREE.WebGLRenderer;
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	
	cube: THREE.Mesh;
	
	init() {
		try {
			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( document.body.clientWidth, document.body.clientHeight);		
			this.renderer.setClearColor(0xEEEEEE);
			document.getElementById('host').appendChild( this.renderer.domElement );	
		} catch (e) {
			console.error(e);
		}		
	}
	
	addObject() {
		var geometry = new THREE.BoxGeometry( 10, 10, 10 );
		var material = new THREE.MeshBasicMaterial( { color: 0x06a4a0 } );
		this.cube = new THREE.Mesh( geometry, material );
		this.scene.add( this.cube );
		let axes = new THREE.AxisHelper( 20 );
		this.scene.add(axes);
		
		this.camera.position.x = -30;
		this.camera.position.y = 40;
		this.camera.position.z = 30;
		this.camera.lookAt(this.scene.position);
	}
	
	
	
	render() {
		this.cube.rotation.x += 0.03;
		this.cube.rotation.y += 0.03;
		this.camera.position.y -= 0.05;
		this.camera.position.z -= 0.05;
		this.camera.position.x += 0.05;
		requestAnimationFrame( () => {
			this.render();
		} );
		this.renderer.render( this.scene, this.camera );
		
	}
}