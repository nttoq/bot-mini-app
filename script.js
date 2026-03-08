const tg = window.Telegram.WebApp;

// Сообщаем телеграму, что приложение готово и разворачиваем его
tg.ready();
tg.expand();

// --- ЛОГИКА МОДАЛЬНОГО ОКНА ---
const modal = document.getElementById('photo-modal');
const avatarImg = document.getElementById('avatar-trigger');
const closeBtn = document.querySelector('.close-btn');

// Открыть
avatarImg.addEventListener('click', () => {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('active');
        modal.classList.remove('closing');
    });
});

// Закрыть
function closeModal() {
    if (!modal.classList.contains('active')) return;
    
    modal.classList.add('closing');
    modal.classList.remove('active');

    setTimeout(() => {
        modal.classList.remove('closing');
        modal.style.display = 'none';
    }, 300);
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
