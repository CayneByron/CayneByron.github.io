class Ground {
    constructor() {

    }

    async init() {
        const color = new THREE.TextureLoader().load('game_assets\\Ground026_1K-JPG\\Ground026_1K_Color.jpg');
        const normal = new THREE.TextureLoader().load('game_assets\\Ground026_1K-JPG\\Ground026_1K_Normal.jpg');
        const ao = new THREE.TextureLoader().load('game_assets\\Ground026_1K-JPG\\Ground026_1K_AmbientOcclusion.jpg');
        const displacement = new THREE.TextureLoader().load('game_assets\\Ground026_1K-JPG\\Ground026_1K_Displacement.jpg');
        const roughness = new THREE.TextureLoader().load('game_assets\\Ground026_1K-JPG\\Ground026_1K_Roughness.jpg');
        // const color = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Color.jpg');
        // const normal = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Normal.jpg');
        // const ao = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_AmbientOcclusion.jpg');
        // const displacement = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Displacement.jpg');
        // const roughness = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Roughness.jpg');
        color.wrapS = THREE.RepeatWrapping;
        color.wrapT = THREE.RepeatWrapping;
        color.repeat.set( 4, 4 );
        normal.wrapS = THREE.RepeatWrapping;
        normal.wrapT = THREE.RepeatWrapping;
        normal.repeat.set( 4, 4 );
        ao.wrapS = THREE.RepeatWrapping;
        ao.wrapT = THREE.RepeatWrapping;
        ao.repeat.set( 4, 4 );
        displacement.wrapS = THREE.RepeatWrapping;
        displacement.wrapT = THREE.RepeatWrapping;
        displacement.repeat.set( 4, 4 );
        roughness.wrapS = THREE.RepeatWrapping;
        roughness.wrapT = THREE.RepeatWrapping;
        roughness.repeat.set( 4, 4 );

        const material = new THREE.MeshStandardMaterial({
            color: 0x888888, 
            side: THREE.DoubleSide, 
            map: color, 
            normalMap: normal, 
            aoMap: ao, 
            // displacementMap: displacement,// displacementScale: 0.001, displacementBias: 0.001,
            roughnessMap: roughness, roughness: 1.0
        });


        this.mesh = await this.loadModel('river3', material);
        this.mesh.scale.x = 1000;
        this.mesh.scale.y = 1000;
        this.mesh.scale.z = 1000;
        // this.mesh.rotation.y = 90;

        // const material = new THREE.MeshBasicMaterial( {color: 0x888888, side: THREE.DoubleSide} );
        // const geometry = new THREE.PlaneGeometry(1000, 1000, 1000);
        // this.mesh = new THREE.Mesh(geometry, material);
        // this.mesh.rotation.x = Math.PI / 2;
        // this.mesh.scale.x = 1;
        // this.mesh.scale.y = 1;
        // this.mesh.scale.z = 1;
    }

    async loadModel(name, material) {
        let model = new Promise(function(myResolve, myReject) {
            const loader = new THREE.GLTFLoader();
            loader.load('game_assets\\landscape\\' + name + '.glb', (gltf => {
                let obj = gltf.scene;
                obj.traverse(c => {
                    c.castShadow = true;
                    c.material = material;
                });
                myResolve(obj);
            }));
        });

        return model;
    }
}