<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini App</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>

    <!-- Аватарка сверху -->
    <div class="avatar-container">
        <!-- По умолчанию стоит заглушка, JS заменит её на реальное фото -->
        <img id="user-avatar" src="media/photo.jpg" alt="Avatar" class="avatar">
    </div>

    <!-- Модальное окно -->
    <div id="photo-modal" class="modal">
        <span class="close-btn">&times;</span>
        <!-- Картинка в модальном окне тоже обновится -->
        <img id="modal-avatar" class="modal-content" src="media/photo.jpg" alt="Full Avatar">
    </div>

    <script src="script.js"></script>
</body>
</html>
