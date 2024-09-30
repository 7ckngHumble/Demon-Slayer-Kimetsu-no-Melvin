
document.querySelectorAll('.character-item').forEach(item => {
    item.addEventListener('click', function () {
        const character = this.getAttribute('data-character');
        const modal = document.getElementById(`${character}-modal`);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    document.querySelectorAll('.character-modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

