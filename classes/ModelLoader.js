class ModelLoader {
    constructor() {

    }
    async loadModel(name) {
        let model = new Promise(function(myResolve, myReject) {
            const fbxLoader = new THREE.FBXLoader();
            fbxLoader.setPath('game_assets\\models\\');
            fbxLoader.load(name + '.fbx', (fbx) => {
                fbx.scale.setScalar(0.1);
                fbx.traverse(c => {
                    c.castShadow = true;
                });
                myResolve(fbx);
            });
        });

        return model;
    }
}