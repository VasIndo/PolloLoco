class Cloud extends movableObject {
    y = 20;
    width = 500;
    height = 150;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')

        this.x = Math.random() * 500;
        this.flow();
    }


    flow() {
        this.moveLeft();
    }

}