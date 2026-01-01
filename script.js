// Данные для 12 месяцев (2025 год)
const yearMonths = [
    {
        id: 1,
        name: "Январь",
        date: "1 января 2025",
        title: "Начало нашего года",
        story: "Первый месяц 2025 года мы встретили вместе. Холодные январские дни согревались твоими улыбками и смехом. Мы строили планы на год вперёд, и каждый из них включал в себя друг друга.",
        memory: "Новогодняя ночь, когда мы загадывали желания под бой курантов.",
        quote: "«Январь научил меня: новый год начинается не с календарной даты, а с того момента, когда рядом ты»",
        feeling: "Надежда и тепло",
        photos: 8,
        icon: "🎉",
        image: "https://i.yapx.ru/cdwC2.jpg"
    },
    {
        id: 2,
        name: "Февраль",
        date: "14 февраля 2025",
        title: "День всех влюблённых",
        story: "Февраль подарил нам первый День святого Валентина вместе. Ты подарила мне handmade открытку, а я — букет твоих любимых цветов. Мы ужинали при свечах и говорили о том, как здорово, что мы нашли друг друга.",
        memory: "Твой сюрприз — домашний ужин, который ты приготовила сама.",
        quote: "«Любовь — это когда февральский холод не страшен, потому что в сердце всегда лето»",
        feeling: "Романтика и нежность",
        photos: 12,
        icon: "❤️",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Март",
        date: "8 марта 2025",
        title: "Первая весна вместе",
        story: "В марте пришла весна, а с ней — первые прогулки по паркам, где снег только начал таять. Ты учила меня различать первоцветы, а я просто любовался тем, как ты радуешься каждому новому цветочку.",
        memory: "Наша поездка за город, где мы искали первые признаки весны.",
        quote: "«Весна — это когда природа просыпается, а мое сердце бодрствует уже с того дня, как встретило тебя»",
        feeling: "Обновление и радость",
        photos: 10,
        icon: "🌼",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Апрель",
        date: "12 апреля 2025",
        title: "Прогулки под дождём",
        story: "Апрельские дожди не стали для нас препятствием. Наоборот, мы полюбили гулять под зонтом, слушая, как капли стучат по ткани. В одной кофейне мы пережидали ливень и играли в настольные игры три часа.",
        memory: "День, когда мы промокли до нитки, но смеялись как дети.",
        quote: "«С тобой даже дождь превращается в музыку, а лужи — в зеркала, отражающие наше счастье»",
        feeling: "Лёгкость и беззаботность",
        photos: 9,
        icon: "☔",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Май",
        date: "24 мая 2025",
        title: "Наш особенный день",
        story: "Май запомнился самым важным днём в нашей истории. Тот день, когда всё изменилось. Мы говорили о будущем, о мечтах, и каждый понимал — эти мечты теперь общие. Дата 24.05 навсегда останется в моем сердце.",
        memory: "Вечер, когда мы сидели на берегу реки и смотрели на закат.",
        quote: "«Некоторые дни не просто случаются — они становятся вехами в жизни. 24 мая — наш день»",
        feeling: "Судьбоносность и глубина",
        photos: 20,
        icon: "⭐",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Июнь",
        date: "22 июня 2025",
        title: "Первое лето вдвоём",
        story: "Лето вступило в свои права, и мы наслаждались каждым тёплым днём. Пикники в парке, мороженое на набережной, вечерние прогулки до самого заката. Ты загорела, а я просто счастлив, что могу видеть твою улыбку каждый день.",
        memory: "Ночь у костра, когда мы пели песни под гитару.",
        quote: "«Лето — это не сезон, а состояние души, когда рядом тот, кто делает каждый день солнечным»",
        feeling: "Свобода и счастье",
        photos: 15,
        icon: "🌞",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Июль",
        date: "15 июля 2025",
        title: "Поездка к морю",
        story: "Мы впервые поехали вместе на море. Твой восторг при виде волн был таким искренним! Мы купались до посинения, загорали на песке и ели самую вкусную рыбу в прибрежных кафе. Море запомнило наш смех.",
        memory: "Рассвет на пляже, когда мы встретили sunrise вместе.",
        quote: "«Море огромное, но наше счастье — больше. Оно не помещается ни в один океан»",
        feeling: "Восторг и единение",
        photos: 25,
        icon: "🌊",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Август",
        date: "3 августа 2025",
        title: "Звёздные ночи",
        story: "Августовские ночи мы проводили на балконе, считая падающие звёзды. Ты рассказывала о созвездиях, а я просто слушал твой голос. В одну из таких ночей ты сказала то, что изменило всё.",
        memory: "Ночь, когда мы заснули на балконе, укрывшись одним пледом.",
        quote: "«Иногда нужно смотреть не на звёзды, а на того, кто смотрит на них с тобой»",
        feeling: "Тайна и глубина",
        photos: 11,
        icon: "🌠",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Сентябрь",
        date: "1 сентября 2025",
        title: "Осень начинается",
        story: "Золотая осень закружила нас в вальсе из жёлтых листьев. Мы собирали гербарий, пили капучино в уютных кафе и покупали друг другу тёплые шарфы. Ты сказала, что осень — это время уюта, а я добавил: «И время быть вместе».",
        memory: "День, когда мы запускали бумажные кораблики в парковом пруду.",
        quote: "«Осень красива не листопадом, а тем, что ты рядом, и мы можем делить этот уют вдвоём»",
        feeling: "Уют и гармония",
        photos: 9,
        icon: "🍂",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Октябрь",
        date: "21 октября 2025",
        title: "Твой день рождения",
        story: "19 лет — возраст мечтаний и надежд. Я видел, как ты становишься той удивительной женщиной, которой всегда хотела быть. Мы устроили домашнюю вечеринку с блинами, смотрели детские фото и мечтали о будущем.",
        memory: "Торт со свечами, который мы ели прямо руками.",
        quote: "«Стареть — обязательно, взрослеть — нет. Рад, что ты выбираешь второе, но сохраняешь первое в душе»",
        feeling: "Гордость и нежность",
        photos: 20,
        icon: "🎂",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Ноябрь",
        date: "7 ноября 2025",
        title: "Домашние вечера",
        story: "Холодный ноябрь мы провели в тепле домашнего очага. Готовили вместе, смотрели фильмы, читали книги вслух. Иногда мы просто молчали, и это молчание было красноречивее любых слов.",
        memory: "Вечер, когда мы испекли пирог и он получился кривым, но вкусным.",
        quote: "«Тишина между нами была такой же содержательной, как и слова»",
        feeling: "Близость и понимание",
        photos: 7,
        icon: "🏠",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Декабрь",
        date: "31 декабря 2025",
        title: "Завершение года",
        story: "Год завершился там же, где и начался — в наших объятиях. Мы подводили итоги, благодарили друг друга за каждый месяц и загадывали желания на следующий год. Я загадал одно: чтобы каждый следующий год был с тобой.",
        memory: "Последние минуты года, когда мы считали секунды до нового начала.",
        quote: "«Новый год — это не смена даты, а возможность начать новую главу с тем, кто делает твою жизнь книгой»",
        feeling: "Благодарность и любовь",
        photos: 18,
        icon: "🎄",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Секретный код для письма
const SECRET_CODE = "2405"; // 24 мая

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createCalendar();
    startCountdown();
    createSnowflakes();
});

// Создание календаря
function createCalendar() {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';
    
    yearMonths.forEach(month => {
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
                <span><i class="fas fa-heart"></i> ${month.feeling}</span>
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
    document.getElementById('monthFeeling').textContent = month.feeling;
    document.getElementById('modalPhoto').src = month.image;
    
    const modal = document.getElementById('monthModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('monthModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Запуск путешествия
function startJourney() {
    document.getElementById('calendar').scrollIntoView({
        behavior: 'smooth'
    });
}

// Открытие конверта
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
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
            dot.style.background = '#d81b60';
            dot.style.boxShadow = '0 0 10px #d81b60';
        } else {
            dot.style.background = '#e0e0e0';
            dot.style.boxShadow = 'none';
        }
    });
}

// Проверка секретного кода
function checkSecretCode() {
    const input = document.getElementById('secretCode').value;
    const errorMsg = document.getElementById('codeError');
    
    if (input === SECRET_CODE) {
        errorMsg.textContent = '✅ Код верный! Открываю письмо...';
        errorMsg.style.color = '#4CAF50';
        
        document.getElementById('secretSection').style.opacity = '0';
        document.getElementById('secretSection').style.transition = 'opacity 1s';
        
        createFireworks();
        
        setTimeout(() => {
            document.getElementById('secretSection').style.display = 'none';
            document.getElementById('letterSection').style.display = 'block';
            document.getElementById('letterSection').scrollIntoView({
                behavior: 'smooth'
            });
        }, 2000);
    } else {
        errorMsg.textContent = '❌ Неверный код. Попробуй ещё раз!';
        errorMsg.style.color = '#ff6b6b';
        
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
    const colors = ['#FF6B93', '#FFD700', '#64B5F6'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
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
            
            const animation = firework.animate([
                { transform: 'scale(0) translateY(0)', opacity: 1 },
                { transform: `scale(1) translateY(${Math.random() * 100 - 50}px)`, opacity: 0.8 },
                { transform: 'scale(0) translateY(0)', opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            animation.onfinish = () => firework.remove();
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
    setInterval(updateCountdown, 60000);
}

// Создание снежинок
function createSnowflakes() {
    const snowContainer = document.querySelector('.snowflakes');
    for (let i = 11; i <= 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = Math.random() > 0.5 ? '❅' : '❆';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${8 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);
    }
}

// Добавляем анимацию тряски
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
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
