class Bottle extends movableObject {
    offset = {
        top: 20,
        bottom: 10,
        right: 20,
        left: 40
    }
    height=100;
    y = 340;
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super();
        const randomIndex = Math.floor(Math.random() * this.IMAGES_BOTTLE.length); // 0 oder 1
        const randomImage = this.IMAGES_BOTTLE[randomIndex];

        this.loadImages(this.IMAGES_BOTTLE);  // Optional: falls du noch wechseln willst
        this.loadImage(randomImage);          // Wähle zufälliges Bild
        this.x = 450 + Math.random() * 1500;
    }

}
