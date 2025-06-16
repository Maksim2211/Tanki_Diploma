# Tanki Diploma — 2D Tank Battle Game

🎮 **Tanki Diploma** — це клієнтська частина двовимірної гри «Танковий бій». Реалізована на HTML, CSS та JavaScript. Забезпечує інтерактивний ігровий процес, оформлення профілю гравця, таблицю лідерів та багатокористувацький режим.

---

## 🚀 Швидкий старт

### 1️⃣ Клонування репозиторію

```bash
git clone <repo_url>
cd Tanki_Diploma-Tanki
```

### 2️⃣ Запуск гри

Відкрий `templates/index.html` у браузері. Реєстрація та гра доступні без додаткових налаштувань сервера (тільки фронтенд). Для повної роботи — підключи серверну частину.

---

## ⚙️ Використані технології

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Аудіо та спрайти для ігрової графіки
- Ручне управління танком та логіка бою
- Модальні вікна профілю, реєстрації, зміни пароля

---

## 📁 Структура проєкту

```
├── static/
│   ├── Audio/
│   │   ├── home1.mp3
│   │   ├── home2.mp3
|   |
│   ├── CSS/
│   │   ├── game.css
│   │   ├── load_to_game_1.css
│   │   ├── load_to_game_2.css
│   │   ├── reset_password.css
│   │   └── style.css
|   |
│   ├── Images/
|   |   ├──assets/
|   |   │  ├── sprite-clasic.png
|   |   │  ├── sprite-hell.png
|   |   │  ├── sprite-hells.png
|   |   │  └── sprite.png
|   |   │
│   │   ├── back.png
│   │   ├── background.png
│   │   ├── logo.png
│   │   ├── skin1.png
│   │   └── skin2.png
│   │
│   ├── JavaScript/
│   |   ├── src/
│   |   |   ├── base.js
│   |   |   ├── border.js
│   |   |   ├── brick-wall.js
│   |   |   ├── bullet-explosion.js
│   |   |   ├── bullet.js
│   |   |   ├── constants.js
│   |   |   ├── enemy-tank.js
│   |   |   ├── event-emitter.js
│   |   |   ├── explosion.js
│   |   |   ├── game-object.js
│   |   |   ├── game.js
│   |   |   ├── hud.js
│   |   |   ├── input.js
│   |   |   ├── player-tank.js
│   |   |   ├── player.js
│   |   |   ├── sprite.js
│   |   |   ├── stage.js
│   |   |   ├── stages.js
│   |   |   ├── steel-wall.js
│   |   |   ├── tank-explosion.js
│   |   |   ├── tank.js
│   |   |   ├── utils.js
│   |   |   ├── view.js
│   |   |   └── wall.js
|   |   |
│   │   ├── bug_report.js   
│   │   ├── change_password.js
│   │   ├── home.js   
│   │   ├── hud.js
│   │   ├── leaderboard.js  
│   │   ├── load-profile.js
│   │   ├── login.js
│   |   ├── music-player.js
│   |   ├── profile.js
│   │   ├── recover-password.js
│   │   ├── register.js
│   │   ├── reset_password.js
│   |   └── tanki.js
|   |
├── templates/
|   ├── bug_report.html
|   ├── index.html                # тут знаходиться форма авторизації
|   ├── leaderboard.html
|   ├── load_to_game_1.html
|   ├── load_to_game_2.html
|   ├── load_to_game_3.html
|   ├── register.html             # форма реєстрації
|   ├── reset_password.html
|   ├── tankim.html 
|   └── tanki.html
```

---

## 🌐 Основні можливості

✅ Реєстрація та профіль гравця  
✅ Таблиця лідерів  
✅ Ігровий HUD та контроль танка  
✅ Зміна пароля через модальне вікно  
✅ Музичний плеєр на сторінках гри

---

## 📚 Джерела та автори

Ця клієнтська частина є частиною кваліфікаційної роботи:

> **«Розробка клієнтської частини 2D гри Танковий бій»**  
> Виконавець: **Максим Мартиненко**, студент групи **2К-21**  
> Керівник: **Дмитро Подорошко**, Черкаський державний фаховий бізнес-коледж

---

## ✅ Ліцензія

Цей проєкт розповсюджується під ліцензією **MIT License**.  
Деталі дивись у файлі [`LICENSE`](./LICENSE).

---

✨ **Приємної гри та натхнення у розробці!**