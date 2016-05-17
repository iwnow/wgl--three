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
			this.renderer = new THREE.WebGLRenderer({antialias:true});
			this.renderer.setSize( document.body.clientWidth, document.body.clientHeight);		
			this.renderer.setClearColor(0xEEEEEE, 1.0);
			this.renderer.shadowMapEnabled = true;
			document.getElementById('host').appendChild( this.renderer.domElement );	
		} catch (e) {
			console.error(e);
		}		
	}
	
	distance = 100;
	
	addObject() {
		var geometry = new THREE.BoxGeometry( 5, 5, 5 );
		var material = new THREE.MeshLambertMaterial( { color: 0x06a4a0 } );
		this.cube = new THREE.Mesh( geometry, material );
		this.cube.position.y = 10;
		this.cube.castShadow = true;
		this.scene.add( this.cube );
		
		let axes = new THREE.AxisHelper( 20 );
		//this.scene.add(axes);
		
		var sphereGeometry = new THREE.SphereGeometry(4,20,20);
		var sphereMaterial = new THREE.MeshLambertMaterial(
			{color: 0x7777ff, wireframe: true});
		var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
		sphere.castShadow = true;
		sphere.position.x = 20;
		sphere.position.y = 4;
		sphere.position.z = 2;
		this.scene.add(sphere);
		
		var planeGeometry = new THREE.PlaneGeometry(60,40,1,1);
		var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
		var plane = new THREE.Mesh(planeGeometry,planeMaterial);
		plane.receiveShadow = true;
		plane.rotation.x=-0.5*Math.PI;
		plane.position.x = 15;
		plane.position.y = 0;
		plane.position.z = 0;
		this.scene.add(plane);
		
		this.camera.position.x = -30;
		this.camera.position.y = 40;
		this.camera.position.z = 20;
		this.camera.lookAt(this.scene.position);
		
		var spotLight = new THREE.SpotLight( 0xffffff );
		spotLight.position.set( -40, 60, -10 );
		spotLight.castShadow = true;
		this.scene.add(spotLight );
	}
	
	
	
	render() {
		this.cube.rotation.x += 0.03;
		this.cube.rotation.y += 0.03;
		this.cube.rotation.z += 0.03;
		
		let pin = this.distance > 30 ? -1 : 1;
		this.distance += pin*0.3;
		//this.cube.geometry.scale(this.distance,this.distance,this.distance);
		
		
		requestAnimationFrame( () => {
			this.render();
		} );
		this.renderer.render( this.scene, this.camera );
		
	}
}