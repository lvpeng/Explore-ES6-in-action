

class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}

class Point (){
  constructor (x, y) {
    this.x = x ;
    this.y = y;

  }
  static distance(p1,p2){
    const distanceA  = p1.x - p2.x;
    const distanceB = p1.y - p2.y;
    return Math.squart(distanceA * distanceA + distanceB * distanceB)
  }
}

const p1 =  Point(3,4)
const p2 =  Point(6,8)

Point.distance(p1,p2)
