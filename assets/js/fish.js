document.addEventListener('DOMContentLoaded', () => {

    const aquarium = document.querySelector('.aquarium');
    if (!aquarium) return;

    const fishTank = aquarium;

    const tankWidth = aquarium.offsetWidth;
    const tankHeight = aquarium.offsetHeight;
    const WATER_LIMIT = tankHeight * 0.8;

    const MAX_FISH = 30;  

    const fishTypes = [
        { name: 'NemoFish', width: 60, height: 40, speedFactor: 2.0, image: 'url(assets/images/CaHe.jpg)' },
        { name: 'NemoFish', width: 60, height: 40, speedFactor: 2.0, image: 'url(assets/images/CaCanh1.png)' },
        { name: 'NemoFish', width: 60, height: 40, speedFactor: 2.0, image: 'url(assets/images/CaCanh2.png)' },
        { name: 'NemoFish', width: 60, height: 40, speedFactor: 2.0, image: 'url(assets/images/CaCanhBuom.png)' },
        { name: 'NemoFish', width: 60, height: 40, speedFactor: 2.0, image: 'url(assets/images/CaCanhBuom1.png)' },
        { name: 'NemoFish', width: 60, height: 40, speedFactor: 2.0, image: 'url(assets/images/CaThienThan.png)' },
    ];

    const numberOfFish = 6;

    // Hàm đếm cá hiện tại
    function getFishCount() {
        return document.querySelectorAll('.fish').length;
    }

    // Hàm tạo cá
    function createFish() {

        if (getFishCount() >= MAX_FISH) {
            alert("⚠ Bể đã đạt số lượng cá tối đa (30 con)!");
            return;
        }

        const type = fishTypes[Math.floor(Math.random() * fishTypes.length)];
        
        const fish = document.createElement('div');
        fish.classList.add('fish', type.name);

        fish.currentTilt = 0;
        fish.tiltInterval = null;
        fish.speedFactor = type.speedFactor;
        fish.fishWidth = type.width;
        fish.fishHeight = type.height;

        fish.style.width = `${type.width}px`;
        fish.style.height = `${type.height}px`;
        fish.style.backgroundImage = type.image;
        fish.style.backgroundSize = 'contain';
        fish.style.backgroundRepeat = 'no-repeat';
        fish.style.position = 'absolute';

        let startX = Math.random() * (tankWidth - type.width);
        let startY = Math.random() * (WATER_LIMIT - type.height);

        fish.style.left = `${startX}px`;
        fish.style.top = `${startY}px`;
        fish.style.transform = `scaleX(1) rotateZ(0deg)`;

        fishTank.appendChild(fish);

        setTimeout(() => { animateFish(fish, startX, startY) }, 100);
    }

    function animateFish(fish, currentX, currentY) {
        const targetX = Math.random() * (tankWidth - fish.fishWidth);
        const targetY = Math.random() * (WATER_LIMIT - fish.fishHeight);

        const deltaX = targetX - currentX;
        const deltaY = targetY - currentY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        const baseSpeed = Math.random() * 30 + 20;
        const duration = (distance / baseSpeed) / fish.speedFactor;

        const flip = deltaX < 0 ? -1 : 1;

        const angleRad = Math.atan2(deltaY, deltaX);
        let angleDeg = (angleRad * 180) / Math.PI;
        if (angleDeg < 0) angleDeg += 360;

        let targetTilt = flip === -1 ? (180 - angleDeg) : angleDeg;

        fish.style.transition = `left ${duration}s linear, top ${duration}s linear`;
        fish.style.left = `${targetX}px`;
        fish.style.top = `${targetY}px`;

        if (fish.tiltInterval) clearInterval(fish.tiltInterval);

        fish.tiltInterval = setInterval(() => {
            let diff = targetTilt - fish.currentTilt;

            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;

            if (Math.abs(diff) < 1) {
                fish.currentTilt = targetTilt;
                clearInterval(fish.tiltInterval);
            } else {
                fish.currentTilt += diff * 0.1;
            }

            fish.style.transform = `scaleX(${flip}) rotateZ(${fish.currentTilt}deg)`;
        }, 50);

        setTimeout(() => {
            animateFish(fish, targetX, targetY);
        }, duration * 1000);
    }

    for (let i = 0; i < numberOfFish; i++) {
        setTimeout(createFish, i * 100);
    }

    const addFishBtn = document.getElementById("addFishBtn");
    addFishBtn.addEventListener("click", () => {
        createFish();
    });

    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
        const fishes = document.querySelectorAll('.fish');
        fishes.forEach(fish => {
            if (fish.tiltInterval) clearInterval(fish.tiltInterval);
            fish.remove();
        });
    });

      
});
