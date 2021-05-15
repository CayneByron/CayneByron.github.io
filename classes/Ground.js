class Ground {
    constructor() {
        // const ground = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Color.jpg');
        // ground.wrapS = THREE.RepeatWrapping;
        // ground.wrapT = THREE.RepeatWrapping;
        // ground.repeat.set( 4, 4 );
        // const normal = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Normal.jpg');
        // normal.wrapS = THREE.RepeatWrapping;
        // normal.wrapT = THREE.RepeatWrapping;
        // normal.repeat.set( 4, 4 );
        // const ao = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_AmbientOcclusion.jpg');
        // ao.wrapS = THREE.RepeatWrapping;
        // ao.wrapT = THREE.RepeatWrapping;
        // ao.repeat.set( 4, 4 );
        // const displacement = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Displacement.jpg');
        // displacement.wrapS = THREE.RepeatWrapping;
        // displacement.wrapT = THREE.RepeatWrapping;
        // displacement.repeat.set( 4, 4 );
        // const roughness = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Roughness.jpg');
        // roughness.wrapS = THREE.RepeatWrapping;
        // roughness.wrapT = THREE.RepeatWrapping;
        // roughness.repeat.set( 4, 4 );

        // const material = new THREE.MeshStandardMaterial({color: 0x888888, side: THREE.DoubleSide, 
        //     map: ground, normalMap: normal, aoMap: ao, displacementMap: displacement, roughnessMap: roughness,
        //     roughness: 0.6
        // });
        // const geometry = new THREE.PlaneGeometry(1000, 1000);
        // this.mesh = new THREE.Mesh(geometry, material);
        // this.mesh.rotation.x = Math.PI / 2;
    }

    async init() {
        const ground = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Color.jpg');
        ground.wrapS = THREE.RepeatWrapping;
        ground.wrapT = THREE.RepeatWrapping;
        ground.repeat.set( 4, 4 );
        const normal = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Normal.jpg');
        normal.wrapS = THREE.RepeatWrapping;
        normal.wrapT = THREE.RepeatWrapping;
        normal.repeat.set( 4, 4 );
        const ao = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_AmbientOcclusion.jpg');
        ao.wrapS = THREE.RepeatWrapping;
        ao.wrapT = THREE.RepeatWrapping;
        ao.repeat.set( 4, 4 );
        const displacement = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Displacement.jpg');
        displacement.wrapS = THREE.RepeatWrapping;
        displacement.wrapT = THREE.RepeatWrapping;
        displacement.repeat.set( 4, 4 );
        const roughness = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Roughness.jpg');
        roughness.wrapS = THREE.RepeatWrapping;
        roughness.wrapT = THREE.RepeatWrapping;
        roughness.repeat.set( 4, 4 );

        const material = new THREE.MeshStandardMaterial({color: 0x888888, side: THREE.DoubleSide, 
            map: ground, normalMap: normal, aoMap: ao, displacementMap: null, roughnessMap: roughness,
            roughness: 0.6
        });

        this.mesh = await this.loadModel('landscape2', material);
        this.mesh.scale.x = 3;
        this.mesh.scale.z = 3;
    }

    async loadModel(name, material) {
        let model = new Promise(function(myResolve, myReject) {
            const loader = new THREE.GLTFLoader();
            loader.load('game_assets\\landscape\\landscape2.glb', (gltf => {
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