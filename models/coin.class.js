class Coin extends movableObject {
    offset = {
        top: 40,
        bottom: 40,
        right: 30,
        left: 30
    }
    y = 50;
    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    constructor() {
        super();  
        this.loadImage(this.IMAGES_COIN[0]);  
        this.loadImages(this.IMAGES_COIN);    
        this.animate();
        this.x = 450 + Math.random() * 1500;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 200);
    }
}
