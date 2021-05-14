class Skybox {
    constructor(camera, target) {
        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load('game_assets\\skybox\\Daylight Box_Pieces\\Daylight Box_Front.bmp');
        let texture_bk = new THREE.TextureLoader().load('game_assets\\skybox\\Daylight Box_Pieces\\Daylight Box_Back.bmp');
        let texture_up = new THREE.TextureLoader().load('game_assets\\skybox\\Daylight Box_Pieces\\Daylight Box_TopR270.bmp');
        let texture_dn = new THREE.TextureLoader().load('game_assets\\skybox\\Daylight Box_Pieces\\Daylight Box_Bottom.bmp');
        let texture_rt = new THREE.TextureLoader().load('game_assets\\skybox\\Daylight Box_Pieces\\Daylight Box_Left.bmp');
        let texture_lf = new THREE.TextureLoader().load('game_assets\\skybox\\Daylight Box_Pieces\\Daylight Box_Right.bmp');

        materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

        for (let i = 0; i < materialArray.length; i++) {
            materialArray[i].side = THREE.BackSide;
        }

        let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
        this.mesh = new THREE.Mesh(skyboxGeo, materialArray);
    }
}