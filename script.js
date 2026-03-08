const tg = window.Telegram.WebApp;

// Инициализация
tg.ready();
tg.expand();

const userAvatarImg = document.getElementById('user-avatar');
const modalAvatarImg = document.getElementById('modal-avatar');
const avatarContainer = document.querySelector('.avatar-container');

const user = tg.initDataUnsafe.user;

if (user && user.photo_url) {
    // ✅ Есть данные и фото: используем ссылку от Telegram
    // Telegram предоставляет безопасную ссылку через свой прокси
    const photoUrl = user.photo_url;
    
    userAvatarImg.src = photoUrl;
    modalAvatarImg.src = photoUrl;
    
    // Убираем серый фон-заглушку, если он был
    userAvatarImg.style.backgroundColor = 'transparent';
} else {
    // ❌ Нет данных (открыто в браузере) или нет фото у пользователя
    // Показываем стильную заглушку (серый круг с иконкой или просто цвет)
    
    // Вариант А: Просто серый круг (уже задан в CSS через background-color при отсутствии src)
    userAvatarImg.style.backgroundColor = '#ccc'; 
    userAvatarImg.style.border = 'none';
    
    // Можно добавить текст "?" внутрь, но проще оставить пустым кругом
    // Для модального окна тоже ставим заглушку
    modalAvatarImg.style.backgroundColor = '#ccc';
    
    console.log("Режим теста: аватарка не загружена (нет данных TG)");
}

// --- ЛОГИКА МОДАЛЬНОГО ОКНА ---
const modal = document.getElementById('photo-modal');
const closeBtn = document.querySelector('.close-btn');

// Функция открытия
function openModal() {
    // Если картинки нет вообще (пустой src и нет фона), можно не открывать, но оставим открытие
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('active');
        modal.classList.remove('closing');
    });
}

// Функция закрытия
function closeModal() {
    if (!modal.classList.contains('active')) return;
    
    modal.classList.add('closing');
    modal.classList.remove('active');

    setTimeout(() => {
        modal.classList.remove('closing');
        modal.style.display = 'none';
    }, 300);
}

// Слушатели событий
userAvatarImg.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
