class Water {
    constructor() {

    }

    async init() {
        const color = new THREE.TextureLoader().load('game_assets\\SurfaceImperfections001_2K-JPG\\SurfaceImperfections001_2K_var1.jpg');
        const normal = new THREE.TextureLoader().load('game_assets\\SurfaceImperfections001_2K-JPG\\SurfaceImperfections001_2K_Normal.jpg');
        // const ao = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_AmbientOcclusion.jpg');
        // const displacement = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Displacement.jpg');
        // const roughness = new THREE.TextureLoader().load('game_assets\\Grass004_2K-JPG\\Grass004_2K_Roughness.jpg');
        color.wrapS = THREE.RepeatWrapping;
        color.wrapT = THREE.RepeatWrapping;
        color.repeat.set( 4, 4 );
        normal.wrapS = THREE.RepeatWrapping;
        normal.wrapT = THREE.RepeatWrapping;
        normal.repeat.set( 4, 4 );
        // ao.wrapS = THREE.RepeatWrapping;
        // ao.wrapT = THREE.RepeatWrapping;
        // ao.repeat.set( 4, 4 );
        // displacement.wrapS = THREE.RepeatWrapping;
        // displacement.wrapT = THREE.RepeatWrapping;
        // displacement.repeat.set( 4, 4 );
        // roughness.wrapS = THREE.RepeatWrapping;
        // roughness.wrapT = THREE.RepeatWrapping;
        // roughness.repeat.set( 4, 4 );

        const material = new THREE.MeshStandardMaterial({
            color: 0x888888, 
            opacity: 0.7,
            transparent: true,
            side: THREE.DoubleSide, 
            map: color, 
            normalMap: normal, 
            // aoMap: ao, 
            // displacementMap: displacement,// displacementScale: 0.001, displacementBias: 0.001,
            // roughnessMap: roughness, roughness: 1.0
        });
        // material = new THREE.MeshBasicMaterial( {color: 0x888888, side: THREE.DoubleSide} );
        const geometry = new THREE.PlaneGeometry(2000, 2000, 2000);
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = Math.PI / 2;
    }
}