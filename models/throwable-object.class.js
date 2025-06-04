class ThrowableObject extends movableObject {

    IMAGES_BOTTLE_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;

        this.loadImage(this.IMAGES_BOTTLE_THROW[0]);
        this.loadImages(this.IMAGES_BOTTLE_THROW);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);

        this.trow();
    }

    trow() {
        this.animate();
        this.speedY = 30;
        this.applyGravity();

        this.throwInterval = setInterval(() => {
            this.x += 10;

            // Prüfen, ob Flasche auf Boden aufkommt (z.B. Bodenhöhe = 340)
            if (this.y >= 370) {
                this.splash();
            }
        }, 25);
    }

    animate() {
        this.animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_THROW);
        }, 100);
    }

    splash() {
        // Stoppe vorherige Animation & Bewegung
        clearInterval(this.throwInterval);
        clearInterval(this.animationInterval);

        // Lade Splash-Bilder und starte Animation
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);

        // Optional: Nach Splash löschen oder entfernen
        setTimeout(() => {
            // z. B. aus world.throwableObjects entfernen
            this.shouldBeRemoved = true; // manuell prüfen und löschen
        }, 1000);
    }
}
