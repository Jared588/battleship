export default function gameOver(outcome) {
    const modal = document.getElementById('game-over-modal');
    const text = document.getElementById('game-over-text');
    const retryBtn = document.getElementById('retry-btn');

    // Display Modal
    modal.style.display = 'grid';

    // Display Outcome
    if (outcome === 'win') {
        text.innerText = 'You Win!';
    } else {
        text.innerText = 'You Lose!'
    }

    // Retry Button reactivity
    retryBtn.addEventListener('mouseenter', () => {
        retryBtn.style.color = 'white';
    })
    retryBtn.addEventListener('mouseleave', () => {
        retryBtn.style.color = 'gray';
    })

    // Restart
    retryBtn.addEventListener('click', () => {
        // Reload the current page
        window.location.reload();
    });
}