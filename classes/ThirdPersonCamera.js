class ThirdPersonCamera {
    constructor(camera, target) {
        this.camera = camera;
        this.target = target;
        this.currentPosition = new THREE.Vector3();
        this.currentLookAt = new THREE.Vector3();
    }

    update(cameraHeight, cameraDepth) {
        this.camera.position.set(this.target.position.x, this.target.position.y + cameraHeight, this.target.position.z + cameraDepth);
    }
}