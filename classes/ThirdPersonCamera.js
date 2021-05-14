class ThirdPersonCamera {
    constructor(camera, target) {
        this.camera = camera;
        this.target = target;
        this.currentPosition = new THREE.Vector3();
        this.currentLookAt = new THREE.Vector3();
    }

    update(timeElapsed) {
        this.camera.position.set(this.target.position.x, 35, this.target.position.z - 80);
    }
}