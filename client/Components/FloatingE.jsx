import React from 'react';


function FloatingEmoji({ emoji }) {
    const toggleSpawnAnimation = (event) => {
        const emojiElement = event.currentTarget;

        const spawnEmoji = document.createElement('div');
        spawnEmoji.className = 'spawning-emojis';
        spawnEmoji.textContent = emojiElement.textContent;

        const x = Math.random() * (window.innerWidth - 40);
        const y = Math.random() * (window.innerHeight - 40);

        spawnEmoji.style.left = `${x}px`;
        spawnEmoji.style.top = `${y}px`;

        document.body.appendChild(spawnEmoji);

        setTimeout(() => {
            spawnEmoji.remove();
        }, 5000);
    };

    return (
        <p className="emoji" onClick={toggleSpawnAnimation}>
            {emoji}
        </p>
    );
}

export default FloatingEmoji;
