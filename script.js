// Данные для 12 месяцев (зимняя тема)
const winterMonths = [
    {
        id: 1,
        name: "Январь",
        date: "5 января",
        title: "Первый снег и ты",
        story: "Москва встретила нас морозом, но мы ответили ей теплом. Блуждая по спящим улицам, мы находили не достопримечательности, а друг в друге ту тихую радость, что не боится ни стужи, ни расстояний. Январь научил нас любовь .",
        memory: "Как мы дни напролет собирали пазлы.",
        quote: "«Зима стала моим любимым временем года в тот момент, когда ты в неё вошла»",
        temperature: "-10°C на улице, +100°C в сердце",
        photos: 8,
        icon: "❄️",
        image: "<a href="https://yapx.ru/image/cdQiA" title="Фотография загружена на фотохостинг yapx.ru"><img src="https://i.yapx.ru/cdQiA.jpg" alt="Смотреть на фотохостинг сайте yapx.ru"></a>"
    },
    {
        id: 2,
        name: "Январь",
        date: "14 января",
        title: "Крещенские морозы",
        story: "Самые сильные морозы были в январе, но с тобой даже -25°C казались тёплыми. Мы пили горячий шоколад в той маленькой кофейне, где окна полностью замерзали, и рисовали сердца на инее. Ты научила меня, что холод — это не оправдание, а повод прижаться ближе.",
        memory: "Как мы бежали по морозу до машины, смеясь, а потом отогревали друг другу руки.",
        quote: "«Любовь — это когда ты предпочитаешь мороз с тобой теплу без тебя»",
        temperature: "-25°C за окном, бесконечность°C в душе",
        photos: 12,
        icon: "🧤",
        image: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Февраль",
        date: "23 февраля",
        title: "День защитника... тепла",
        story: "В феврале я понял, что хочу быть твоим защитником не только в праздник, а всегда. Защитником твоего смеха, твоих мечтаний, твоего тепла. Ты подарила мне шарф, который связала сама — он пахнет тобой и домашним уютом.",
        memory: "Вечер, когда ты впервые спела под гитару, а за окном метель создавала аккомпанемент.",
        quote: "«Настоящий мужчина — не тот, кто не мёрзнет, а тот, кто готов согреть того, кто ему дорог»",
        temperature: "-15°C, но в твоих объятиях — вечное лето",
        photos: 10,
        icon: "🎸",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Март",
        date: "8 марта",
        title: "Первая капель",
        story: "Март принёс первую капель и первые проталины. Но я уже не ждал весны — потому что она была рядом со мной. Ты — моя вечная весна, даже когда за окном ещё лежит снег. В этот день я подарил тебе подснежники и обещание: «Каждую весну встречать с тобой».",
        memory: "Как мы слушали капель с балкона, завернувшись в один плед.",
        quote: "«Весна начинается не с таяния снега, а с появления того, кто заставляет сердце таять»",
        temperature: "0°C на улице, солнечно в глазах",
        photos: 7,
        icon: "💐",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Апрель",
        date: "12 апреля",
        title: "Лед тронулся",
        story: "Реки вскрылись, и лёд пошёл. Так же, как и лёд вокруг моего сердца, который ты растопила своей улыбкой. Мы гуляли по набережной и смотрели, как огромные льдины плывут в неизвестность. «Мы тоже плывём», — сказала ты. «Но вместе», — добавил я.",
        memory: "Наш пикник на берегу реки, когда мы ели бутерброды в перчатках.",
        quote: "«Любовь — это когда два айсберга тают, чтобы стать одной рекой»",
        temperature: "+5°C, но тепло шло не от солнца",
        photos: 9,
        icon: "🚣",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Май",
        date: "9 мая",
        title: "Последний снег",
        story: "В мае выпал последний снег — неожиданный, как твоё признание в любви. Ты сказала, что это привет от зимы, которая не хочет уходить. Я ответил, что зима может уходить — лишь бы ты оставалась. Этот снег растаял за час, а чувства — остались навсегда.",
        memory: "Как мы лепили последнего снеговика сезона и назвали его «Зимний страж».",
        quote: "«Иногда нужно дождаться последнего снега, чтобы понять: самое ценное — не сезон, а тот, кто рядом»",
        temperature: "+10°C и снег — только с тобой такое возможно",
        photos: 6,
        icon: "⛄",
        image: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Июнь",
        date: "22 июня",
        title: "Белые ночи",
        story: "Санкт-Петербург, белые ночи и ты в белом платье. Ты сказала, что чувствуешь себя невестой города. Я подумал: «Ты будешь невестой. Моей». Мы гуляли до утра, и солнце так и не село — как и моя любовь к тебе.",
        memory: "Ночь на Дворцовой площади, когда мы считали, сколько раз пробили куранты.",
        quote: "«В белые ночи можно не спать — чтобы не пропустить ни одного мгновения с тобой»",
        temperature: "+18°C и светлее, чем когда-либо",
        photos: 15,
        icon: "🌅",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Июль",
        date: "15 июля",
        title: "Летний холодок",
        story: "Жара, +30°C, а мы ели мороженое и смотрели зимние фильмы. «Хочу обратно в зиму», — сказала ты. «Я тоже», — ответил я, потому что зимой мы встретились. Но потом понял: мне всё равно, какое время года, если ты рядом.",
        memory: "Как мы включили кондиционер на максимум и устроили «зиму» в комнате.",
        quote: "«Настоящая зима — не во времени года, а в том, кто напоминает тебе о самом тёплом холоде»",
        temperature: "+30°C, но в сердце — новогоднее настроение",
        photos: 8,
        icon: "🍦",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Август",
        date: "3 августа",
        title: "Звёздный дождь",
        story: "Ночь на крыше, звёздопад Персеиды и твоя голова на моём плече. Ты загадала желание на каждую падающую звезду. «О чём?» — спросил я. «О том, чтобы каждая следующая зима была с тобой», — прошептала ты.",
        memory: "Как мы пытались сфотографировать падающие звёзды, но получались только смазанные полоски.",
        quote: "«Звёзды падают, чтобы напомнить: даже небесные тела стремятся к земле, где есть любовь»",
        temperature: "+20°C ночью, и все звёзды — для нас",
        photos: 11,
        icon: "🌠",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Сентябрь",
        date: "1 сентября",
        title: "Листопад чувств",
        story: "Жёлтые листья, первые куртки и твои тёплые руки в моих карманах. «Осень — это предвестник зимы», — сказала ты. «А ты — предвестник счастья», — ответил я. Мы собирали кленовые листья и делали из них гербарий любви.",
        memory: "День, когда ты впервые надела мою толстовку, и она была на тебе в три раза больше.",
        quote: "«Осенний листопад — это обещание, что после увядания обязательно наступит зима, а после зимы — новая жизнь»",
        temperature: "+10°C, и в воздухе пахло будущим",
        photos: 9,
        icon: "🍁",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Октябрь",
        date: "21 октября",
        title: "Твой день рождения",
        story: "19 лет — возраст, когда детство уже позади, а взрослость ещё не наступила. Я видел, как ты становишься той удивительной женщиной, которой всегда хотела быть. Мы устроили домашнюю вечеринку с блинами и смотрели детские фото. «Я тоже хочу видеть, как ты взрослеешь», — сказал я. «Тогда оставайся рядом», — улыбнулась ты.",
        memory: "Торт со свечами, который мы ели прямо руками, смеясь, как дети.",
        quote: "«Стареть — обязательно, взрослеть — нет. Рад, что ты выбираешь второе, но сохраняешь первое в душе»",
        temperature: "+5°C, но в комнате было жарко от смеха",
        photos: 20,
        icon: "🎂",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Ноябрь",
        date: "30 ноября",
        title: "Предвкушение зимы",
        story: "Последний месяц осени, а мы уже ждали зиму. Купили новые варежки, достали коньки и пересмотрели все рождественские фильмы. «Скоро снова будет снег», — сказала ты. «Скоро снова будет наша зима», — поправил я.",
        memory: "Вечер, когда мы писали письма Деду Морозу с просьбой: «Оставьте нам друг друга на следующий год».",
        quote: "«Самое сладкое в зиме — не первый снег, а предвкушение его с тем, кто уже стал твоим личным солнцем»",
        temperature: "-3°C, но в ожидании — +100°C",
        photos: 13,
        icon: "⛸️",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Секретный код (замени на свою дату: ДДММ)
const SECRET_CODE = "2405"; // 15 декабря - пример, измени на свою дату

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createCalendar();
    startCountdown();
    initSnowflakes();
    
    // Показываем подсказку про музыку
    setTimeout(() => {
        if (!isPlaying) {
            showNotification('🎵 Нажми на нотку, чтобы включить нашу песню!');
        }
    }, 5000);
});

// Создание календаря
function createCalendar() {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';
    
    winterMonths.forEach(month => {
        const card = document.createElement('div');
        card.className = 'month-card';
        card.innerHTML = `
            <div class="month-header">
                <div class="month-number">${month.id}</div>
                <div class="month-icon">${month.icon}</div>
            </div>
            <h3 class="month-name">${month.name}</h3>
            <div class="month-date">
                <i class="far fa-calendar"></i>
                <span>${month.date}</span>
            </div>
            <p class="month-preview">${month.story.substring(0, 120)}...</p>
            <div class="month-stats">
                <span><i class="fas fa-camera"></i> ${month.photos} фото</span>
                <span><i class="fas fa-thermometer-half"></i> ${month.temperature}</span>
            </div>
        `;
        
        card.addEventListener('click', () => openMonthModal(month));
        grid.appendChild(card);
    });
}

// Открытие модального окна месяца
function openMonthModal(month) {
    document.getElementById('modalMonthTitle').textContent = `${month.name}: ${month.title}`;
    document.getElementById('modalDate').innerHTML = `<i class="far fa-calendar"></i><span>${month.date}</span>`;
    document.getElementById('modalStory').textContent = month.story;
    document.getElementById('modalMemory').textContent = month.memory;
    document.getElementById('modalQuote').textContent = month.quote;
    document.getElementById('photoCount').textContent = `${month.photos} фото`;
    document.getElementById('monthTemp').textContent = month.temperature;
    document.getElementById('modalPhoto').src = month.image;
    
    const modal = document.getElementById('monthModal');
    modal.style.display = 'flex';
    
    // Блокируем прокрутку фона
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('monthModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Запуск путешествия (скролл к календарю)
function startJourney() {
    document.getElementById('calendar').scrollIntoView({
        behavior: 'smooth'
    });
}

// Открытие конверта
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.style.transform = 'rotateX(180deg) translateY(-20px)';
    
    setTimeout(() => {
        document.getElementById('secretSection').style.display = 'block';
        document.getElementById('secretSection').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 1000);
}

// Обновление точек кода
function updateCodeDots() {
    const code = document.getElementById('secretCode').value;
    const dots = document.querySelectorAll('.code-dot');
    
    dots.forEach((dot, index) => {
        if (index < code.length) {
            dot.style.background = 'var(--gold)';
            dot.style.boxShadow = '0 0 10px var(--gold)';
        } else {
            dot.style.background = 'rgba(255, 255, 255, 0.2)';
            dot.style.boxShadow = 'none';
        }
    });
}

// Проверка секретного кода
function checkSecretCode() {
    const input = document.getElementById('secretCode').value;
    const errorMsg = document.getElementById('codeError');
    
    if (input === SECRET_CODE) {
        // Успех!
        errorMsg.textContent = '';
        errorMsg.style.color = '#4CAF50';
        errorMsg.innerHTML = '<i class="fas fa-check-circle"></i> Код верный! Лёд растаял...';
        
        // Прячем секретную секцию
        document.getElementById('secretSection').style.opacity = '0';
        document.getElementById('secretSection').style.transition = 'opacity 1s';
        
        // Запускаем фейерверк
        createFireworks();
        
        // Показываем письмо через 2 секунды
        setTimeout(() => {
            document.getElementById('secretSection').style.display = 'none';
            document.getElementById('letterSection').style.display = 'block';
            document.getElementById('letterSection').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Включаем музыку
            if (player) {
                player.playVideo();
                isPlaying = true;
                updateMusicIcon();
            }
        }, 2000);
    } else {
        // Ошибка
        errorMsg.textContent = '❄️ Неверный код. Попробуй ещё раз!';
        errorMsg.style.color = '#ff6b6b';
        
        // Анимация ошибки
        const codeInput = document.getElementById('secretCode');
        codeInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            codeInput.style.animation = '';
        }, 500);
    }
}

// Создание фейерверка
function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#FF6B93', '#FFD700', '#64B5F6', '#4CAF50', '#9C27B0'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework-particle';
            firework.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                z-index: 10000;
                pointer-events: none;
                box-shadow: 0 0 20px currentColor;
            `;
            
            container.appendChild(firework);
            
            // Анимация взрыва
            const explosion = firework.animate([
                { transform: 'scale(0) translateY(0)', opacity: 1 },
                { transform: `scale(1) translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px)`, opacity: 0.8 },
                { transform: 'scale(0) translateY(0)', opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            explosion.onfinish = () => firework.remove();
        }, i * 100);
    }
}

// Счётчик до следующего Нового года
function startCountdown() {
    function updateCountdown() {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const nextNewYear = new Date(nextYear, 0, 1, 0, 0, 0);
        const diff = nextNewYear - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Обновляем каждую минуту
}

// Инициализация дополнительных снежинок
function initSnowflakes() {
    const snowContainer = document.querySelector('.snowflakes');
    for (let i = 11; i <= 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = Math.random() > 0.5 ? '❅' : '❆';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${8 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.fontSize = `${0.5 + Math.random() * 1.5}em`;
        snowContainer.appendChild(snowflake);
    }
}

// Уведомления
function showNotification(text) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = text;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        padding: 15px 25px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.5s ease;
        border-left: 5px solid var(--crimson);
        color: var(--winter-blue);
        font-weight: 600;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Добавляем стили для анимации тряски
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('monthModal');
    if (event.target === modal) {
        closeModal();
    }
};
