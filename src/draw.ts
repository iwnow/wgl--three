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
			this.renderer.setSize( window.innerWidth, window.innerHeight);		
			this.renderer.setClearColor(0xEEEEEE);
			document.getElementById('host').appendChild( this.renderer.domElement );	
		} catch (e) {
			console.error(e);
		}		
	}
	
	addObject() {
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x06ffa0 } );
		this.cube = new THREE.Mesh( geometry, material );
		this.scene.add( this.cube );

		this.camera.position.z = 3;
	}
	
	
	
	render() {
		this.cube.rotation.x += 0.03;
		this.cube.rotation.y += 0.03;
		requestAnimationFrame( () => {
			this.render();
		} );
		this.renderer.render( this.scene, this.camera );
		
	}
}