class BasicCharacterController {
    constructor() {
        
    }

    async init() {
        this.model = await this.loadModel('workman');
        this.animations = [];
        this.animations['running'] = await this.loadAnimation('Jogging');
        this.animations['idle'] = await this.loadAnimation('Breathing Idle');
        this.mixer = new THREE.AnimationMixer(this.model);
        this.running = this.mixer.clipAction(this.animations['running'].animations[0]);
        this.idle = this.mixer.clipAction(this.animations['idle'].animations[0]);

        this.north = false;
        this.west = false;
        this.south = false;
        this.east = false;
        this.northWest = false;
        this.northEast = false;
        this.southWest = false;
        this.southEast = false;
        this.setKeyControls();
        this.collidableObjects = [];

        const cgeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
        const cmaterial = new THREE.MeshNormalMaterial();
        this.cylinder = new THREE.Mesh( cgeometry, cmaterial );
        // this.cylinder.position.y = this.cylinder.geometry.parameters.height / 2;
        this.cylinder.position.y = 1;
    };

    async loadModel(name) {
        let model = new Promise(function(myResolve, myReject) {
            const fbxLoader = new THREE.FBXLoader();
            fbxLoader.setPath('game_assets\\models\\');
            fbxLoader.load(name + '.fbx', (fbx) => {
                fbx.scale.setScalar(0.1);
                fbx.traverse(c => {
                    c.castShadow = true;
                })
                myResolve(fbx);
            });
        });

        return model;
    }

    async loadAnimation(name) {
        let animation = new Promise(function(myResolve, myReject) {
            const anim = new THREE.FBXLoader();
            anim.setPath('game_assets\\animations\\');
            anim.load(name + '.fbx', (anim) => {
                myResolve(anim);
            });
        });

        return animation;
    }

    setCollidableObjects(collidableObjects) {
        this.collidableObjects = collidableObjects;
    }

    move(x, y, z) {
        this.model.position.x += x;
        this.model.position.y += y;
        this.model.position.z += z;
        this.cylinder.position.x += x;
        this.cylinder.position.y += y;
        this.cylinder.position.z += z;
        if (this.isCollision(this.cylinder)) {
            this.model.position.x -= x;
            this.model.position.y -= y;
            this.model.position.z -= z;
            this.cylinder.position.x -= x;
            this.cylinder.position.y -= y;
            this.cylinder.position.z -= z;

            this.model.position.x += x;
            this.model.position.y += y;
            this.cylinder.position.x += x;
            this.cylinder.position.y += y;
            if (this.isCollision(this.cylinder)) {
                this.model.position.x -= x;
                this.model.position.y -= y;
                this.cylinder.position.x -= x;
                this.cylinder.position.y -= y;

                this.model.position.y += y;
                this.model.position.z += z;
                this.cylinder.position.y += y;
                this.cylinder.position.z += z;
                if (this.isCollision(this.cylinder)) {
                    this.model.position.y -= y;
                    this.model.position.z -= z;
                    this.cylinder.position.y -= y;
                    this.cylinder.position.z -= z;
                }
            }
        }
    }

    run() {
        this.running.play();
        this.idle.stop();
    }

    halt() {
        this.idle.play();
        this.running.stop();
    }

    isCollision(player) {
        for (let j = 0; j < this.collidableObjects.length; j++) {
            let directions = [];
            directions.push(new THREE.Vector3(0.0, 0.0, 1.0));
            directions.push(new THREE.Vector3(1.0, 0.0, 0.0));
            directions.push(new THREE.Vector3(0.0, 0.0, -1.0));
            directions.push(new THREE.Vector3(-1.0, 0.0, 0.0));
            directions.push(new THREE.Vector3(-1.0, 0.0, -1.0));
            directions.push(new THREE.Vector3(1.0, 0.0, 1.0));
            directions.push(new THREE.Vector3(-1.0, 0.0, 1.0));
            directions.push(new THREE.Vector3(1.0, 0.0, -1.0));

            for (let i = 0; i < directions.length; i++) {
                let direction = directions[i];
                let ray = new THREE.Raycaster(player.position, direction.normalize(), 0, 5);
                const intersects = ray.intersectObjects(this.collidableObjects, true);
                if (intersects.length > 0) {
                    return true;
                }
            }
        }

        return false;
    }

    setKeyControls() {
        document.addEventListener('keypress', (e) => {
            if (e.code === "KeyW"){
                this.north = true;
            } 
            if (e.code === "KeyA") { 
                this.west = true;
            } 
            if (e.code === "KeyS") { 
                this.south = true;
            } 
            if (e.code === "KeyD") { 
                this.east = true;
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.code === "KeyW"){
                this.north = false;
            } 
            if (e.code === "KeyA") { 
                this.west = false;
            } 
            if (e.code === "KeyS") { 
                this.south = false;
            } 
            if (e.code === "KeyD") { 
                this.east = false;
            }
        });
    }
}