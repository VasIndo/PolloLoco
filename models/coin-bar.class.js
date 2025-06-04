class CoinBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];
    collectedCoins = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 35;
        this.width = 200;
        this.height = 40;
        this.setCoins(0);
    }

    setCoins(collectedCoins) {
        this.collectedCoins = collectedCoins;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.collectedCoins == 5) {
            return 5;
        } else if (this.collectedCoins == 4) {
            return 4;
        } else if (this.collectedCoins == 3) {
            return 3;
        } else if (this.collectedCoins == 2) {
            return 2;
        } else if (this.collectedCoins == 1) {
            return 1;
        } else {
            return 0;
        }

    }
}