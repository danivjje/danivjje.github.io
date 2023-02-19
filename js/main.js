let subjects = {
    monday: [
        {
            name: 'ukrainian',
            done: false
        },
        {
            name: 'history of ukraine',
            done: false
        },
        {
            name: 'german',
            done: false
        },
        {
            name: 'physics',
            done: false
        },
        {
            name: 'physics',
            done: false
        },
        {
            name: 'PE',
            done: false
        },
        {
            name: 'technology',
            done: false
        }
    ],
    tuesday: [
        {
            name: 'jurisprudence',
            done: false
        },
        {
            name: 'computer science',
            done: false
        },
        {
            name: 'ukrainian literature',
            done: false
        },
        {
            name: 'english',
            done: false
        },
        {
            name: 'algebra',
            done: false
        },
        {
            name: 'foreign literature',
            done: false
        }
    ],
    wednesday: [
        {
            name: 'geometry',
            done: false
        },
        {
            name: 'chemistry',
            done: false
        },
        {
            name: 'biology',
            done: false
        },
        {
            name: 'ukrainian',
            done: false
        },
        {
            name: 'history of ukraine',
            done: false
        },
        {
            name: 'history',
            done: false
        },
        {
            name: 'health study',
            done: false
        },
    ],
    thursday: [
        {
            name: 'algebra',
            done: false
        },
        {
            name: 'biology',
            done: false
        },
        {
            name: 'german',
            done: false
        },
        {
            name: 'PE',
            done: false
        },
        {
            name: 'english',
            done: false
        },
        {
            name: 'ukrainian literature',
            done: false
        },
        {
            name: 'computer science',
            done: false
        },
    ],
    friday: [
        {
            name: 'geometry',
            done: false
        },
        {
            name: 'chemistry',
            done: false
        },
        {
            name: 'foreign literature',
            done: false
        },
        {
            name: 'physics',
            done: false
        },
        {
            name: 'art',
            done: false
        },
        {
            name: 'geography',
            done: false
        },
        {
            name: 'PE',
            done: false
        },
    ]
};

let time = ['09:00 - 09:30', '09:45 - 10:15', '10:30 - 11:00', '11:15 - 11:45', '12:00 - 12:30', '12:45 - 13:15', '13:30 - 14:00'];

let defaultSubjects;
if (localStorage.getItem('default subjects')) defaultSubjects = JSON.parse(localStorage.getItem('default subjects'));
else {
    defaultSubjects = JSON.parse(JSON.stringify(subjects));
    localStorage.setItem('default subjects', JSON.stringify(defaultSubjects));
}

if (localStorage.getItem('subjects')) subjects = JSON.parse(localStorage.getItem('subjects'));
else localStorage.setItem('subjects', JSON.stringify(subjects));

let defaultTime = JSON.parse(JSON.stringify(time));
if (localStorage.getItem('time')) time = JSON.parse(localStorage.getItem('time'));
else localStorage.setItem('time', JSON.stringify(time));

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1000) location.reload();
    });
    if (window.innerWidth <= 768) {
        if (document.querySelector('.day-list-item__desktop-wrapper')) document.querySelector('.day-list-item__desktop-wrapper').remove();
        fillFullSchedule();
    }

    addLessons(subjects, time);
    loadHomeworkPage();
    findSubjects();
    checkNumberLessons('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    markDayComplete();
    reloadLessons();
    resetPage();
    translatePage();
    editSchedule();
    initializeSwiper();
    setAsDefaultSchedule();
    openBooksModal();
    openBurgerMenu();
});

function addLessons(subjects, time) {
    for (let weekday in subjects) {
        const currentWeekday = document.getElementById(weekday);
        for (let subject of subjects[weekday]) {
            const li = document.createElement('li');
            li.classList.add('day-list-item__lesson', subject.name.split(' ').join('-'));
            if (subject.done) li.classList.add('complete-lesson');
            li.textContent = subject.name;
            currentWeekday.append(li);
        }
    }

    for (let timer of time) {
        const li = document.createElement('li');
        li.classList.add('day-list-item__lesson-time');
        li.textContent = timer;
        document.querySelector('.schedule-days-list__time-list-item').append(li);
    }
}

function markDayComplete() {
    const weekdaysTitles = document.querySelectorAll('.day-list-item__week-title');

    weekdaysTitles.forEach(title => {
        const weekday = title.parentNode;
        const weekdayLessons = weekday.querySelectorAll('.day-list-item__lesson');
        const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
        if (checkLessonsForComplete) title.classList.add('complete-lesson');

        title.addEventListener('click', () => {
            const weekday = title.parentNode;
            const weekdayLessons = weekday.querySelectorAll('.day-list-item__lesson');
            const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
            subjects = JSON.parse(localStorage.getItem('subjects'));
            console.log(checkLessonsForComplete);
            if (checkLessonsForComplete) {
                title.classList.remove('complete-lesson');
                weekdayLessons.forEach(lesson => lesson.classList.remove('complete-lesson'));
                for (let subject of subjects[title.parentElement.id]) subject.done = false;
                localStorage.setItem('subjects', JSON.stringify(subjects));
            } else {
                title.classList.add('complete-lesson');
                weekdayLessons.forEach(lesson => lesson.classList.add('complete-lesson'));
                for (let subject of subjects[title.parentElement.id]) subject.done = true;
                localStorage.setItem('subjects', JSON.stringify(subjects));
            }
        });
    });

    document.querySelectorAll('.day-list-item__lesson, .day-list-item__lesson-skip').forEach(lesson => {
        const lessonParent = lesson.parentNode;
        const lessonTitle = lessonParent.querySelector('.day-list-item__week-title');
        const weekdayLessons = lessonParent.querySelectorAll('.day-list-item__lesson');

        lesson.addEventListener('click', (event) => {
            if (document.getElementById('edit-button').classList.contains('ready-to-edit')) {
                if (!document.querySelector('.edit-time-input')) {
                    const input = document.createElement('input');
                    input.setAttribute('value', `${lesson.textContent}`);
                    input.classList.add('edit-time-input');
                    if (window.innerWidth > 768) input.style.cssText = `left: ${event.pageX}px; top: ${event.pageY}px`;
                    else input.style.cssText = `top: ${event.pageY}px; left: 50%; transform: translateX(-130px) translateY(-40px)`;
                    document.body.append(input);
                } else {
                    const indexOfLesson = Array.from(lessonParent.children).indexOf(lesson) - 1;
                    if (subjects[lessonParent.id][indexOfLesson]) {
                        if (document.querySelector('.edit-time-input').value == '-') {
                            subjects[lessonParent.id].splice(indexOfLesson, 1);
                            lesson.classList.remove('.day-list-item__lesson');
                            lesson.classList.add('day-list-item__lesson-skip');
                        } else subjects[lessonParent.id][indexOfLesson].name = document.querySelector('.edit-time-input').value;
                        lesson.textContent = document.querySelector('.edit-time-input').value;
                    } else {
                        subjects[lessonParent.id].push({
                            name: document.querySelector('.edit-time-input').value,
                            done: false
                        });
                        lesson.textContent = document.querySelector('.edit-time-input').value;
                        if (lesson.classList.contains('day-list-item__lesson-skip')) {
                            lesson.classList.add('day-list-item__lesson');
                            lesson.classList.remove('day-list-item__lesson-skip');
                        }
                    }
                    localStorage.setItem('subjects', JSON.stringify(subjects));
                    document.querySelector('.edit-time-input').remove();
                }
            } else {
                if (!lesson.classList.contains('day-list-item__lesson-skip')) lesson.classList.toggle('complete-lesson');
                const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                if (checkLessonsForComplete) lessonTitle.classList.add('complete-lesson');
                else lessonTitle.classList.remove('complete-lesson');
                if (subjects[lessonParent.id]) {
                    const indexOfLesson = Array.from(lessonParent.children).indexOf(lesson) - 1;
                    subjects[lessonParent.id][indexOfLesson].done = lesson.classList.contains('complete-lesson');
                    localStorage.setItem('subjects', JSON.stringify(subjects));
                }
            }
        });

    });
}

function editSchedule() {
    const timeOfLessons = document.querySelectorAll('.day-list-item__lesson-time');
    const button = document.getElementById('edit-button');

    button.addEventListener('click', () => {
        button.classList.toggle('ready-to-edit');
        if (!button.classList.contains('ready-to-edit')) {
            if (document.querySelector('.edit-time-input')) document.querySelector('.edit-time-input').remove();
        }
    });

    timeOfLessons.forEach(timer => {
        timer.addEventListener('click', (event) => {
            if (button.classList.contains('ready-to-edit')) {
                if (!document.querySelector('.edit-time-input')) {
                    const input = document.createElement('input');
                    input.setAttribute('value', timer.textContent);
                    input.classList.add('edit-time-input');
                    input.style.cssText = `left: ${event.pageX}px; top: ${event.pageY}px`;
                    document.body.append(input);
                } else {
                    const input = document.querySelector('.edit-time-input');
                    if (input.value.split('-').length == 2) {
                        timer.textContent = input.value;
                        const indexOfTimer = Array.from(document.querySelectorAll('.day-list-item__lesson-time')).indexOf(timer);
                        time[indexOfTimer] = input.value;
                        localStorage.setItem('time', JSON.stringify(time));
                    }
                    input.remove();
                }
            }
        });
    });
}

function checkNumberLessons(monday, tuesday, wednesday, thursday, friday) {
    const weekdays = [
        document.getElementById(monday), document.getElementById(tuesday),
        document.getElementById(wednesday), document.getElementById(thursday),
        document.getElementById(friday)
    ];

    const lengthArray = [];
    for (let weekday of weekdays) {
        const lessonsOfDay = weekday.querySelectorAll('.day-list-item__lesson');
        lengthArray.push(lessonsOfDay.length);
    }

    weekdays.forEach(weekday => {
        const lessonsOfDay = weekday.querySelectorAll('.day-list-item__lesson');
        if (lessonsOfDay.length < Math.max.apply(null, lengthArray)) {
            for (let i = 0; i < (Math.max.apply(null, lengthArray) - lessonsOfDay.length); ++i) {
                const li = document.createElement('li');
                li.textContent = '-';
                li.classList.add('day-list-item__lesson-skip');
                weekday.append(li);
            }
        }
    });
}

function findSubjects() {
    const input = document.getElementById('find-input');
    input.addEventListener('input', () => {
        document.querySelectorAll('.day-list-item__lesson').forEach(lesson => {
            if (input.value) {
                if (lesson.textContent.toLowerCase().split(input.value.toLowerCase()).length >= 2) {
                    lesson.style.cssText = 'text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-weight: 700';
                } else lesson.style = null;
            }
            if (!input.value) lesson.style = null;
        });
    });
}


function reloadLessons() {
    document.getElementById('reload').addEventListener('click', () => {
        document.querySelectorAll('.day-list-item__lesson').forEach(lesson => lesson.classList.remove('complete-lesson'));
        document.querySelectorAll('.day-list-item__week-title').forEach(title => title.classList.remove('complete-lesson'));
        subjects = JSON.parse(localStorage.getItem('subjects'));
        for (let weekday in subjects) {
            for (let subject of subjects[weekday]) {
                subject.done = false;
            }
        }
        localStorage.setItem('subjects', JSON.stringify(subjects));
    });
}

function resetPage() {
    document.getElementById('reset-button').addEventListener('click', () => {
        if (confirm('do you want to reset all subjects?')) {
            subjects = defaultSubjects;
            for (let weekday in subjects) for (let subject of subjects[weekday]) subject.done = false;
            localStorage.setItem('subjects', JSON.stringify(subjects));
            time = defaultTime;
            localStorage.setItem('time', JSON.stringify(time));
            location.reload();
        }
    });
}

function translatePage() {
    const allLanguages = ['en', 'ua', 'ru'];
    const translateSubjects = {
        "history-of-ukraine": {
            en: 'history of ukraine',
            ru: 'история украины',
            ua: 'історія україни'
        },
        "history": {
            en: 'history',
            ru: 'история',
            ua: 'історія'
        },
        "algebra": {
            en: 'algebra',
            ru: 'алгебра',
            ua: 'алгебра'
        },
        "geometry": {
            en: 'geometry',
            ru: 'геометрия',
            ua: 'геометрія'
        },
        "physics": {
            en: 'physics',
            ru: 'физика',
            ua: 'фізика'
        },
        "PE": {
            en: 'PE',
            ru: 'информатика',
            ua: 'інформатика'
        },
        "foreign-literature": {
            en: 'foreign literature',
            ru: 'зарубежная литература',
            ua: 'зарубіжна література'
        },
        "ukrainian-literature": {
            en: 'ukrainian literature',
            ru: 'украинская литература',
            ua: 'українська література'
        },
        "ukrainian": {
            en: 'ukrainian',
            ru: 'украинский язык',
            ua: 'українська мова'
        },
        "german": {
            en: 'german',
            ru: 'немецкий язык',
            ua: 'німецька мова'
        },
        "technology": {
            en: 'technology',
            ru: 'труды',
            ua: 'трудове навчання'
        },
        "jurisprudence": {
            en: 'jurisprudence',
            ru: 'правознание',
            ua: 'правознавство'
        },
        "computer-science": {
            en: 'computer science',
            ru: 'информатика',
            ua: 'інформатика'
        },
        "english": {
            en: 'english',
            ru: 'английский язык',
            ua: 'англійська мова'
        },
        "chemistry": {
            en: 'chemistry',
            ru: 'химия',
            ua: 'хімія'
        },
        "biology": {
            en: 'biology',
            ru: 'биология',
            ua: 'біологія'
        },
        "health-study": {
            en: 'health study',
            ru: 'основы здоровья',
            ua: "основи здоров'я"
        },
        "geography": {
            en: 'geography',
            ru: 'география',
            ua: 'географія'
        },
        "art": {
            en: 'art',
            ru: 'рисование',
            ua: 'мистецтво'
        }
    };
    const selects = [document.getElementById('lang-select'), document.getElementById('adaptive-lang-select')];
    selects.forEach(select => {
        select.addEventListener('change', () => {
            location.href = `${location.pathname}#${select.value}`;
            location.reload();
        });
    });
    const hash = location.hash.substr(1);
    if (!allLanguages.includes(hash)) {
        location.href = location.pathname + '#en';
        location.reload();
    }
    for (let key in translateSubjects) {
        document.querySelectorAll(`.${key}`).forEach(subject => subject.textContent = translateSubjects[key][hash]);
    }
}

function initializeSwiper() {
    const currentWeekday = new Date().getDay() - 1;

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        initialSlide: currentWeekday,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function setAsDefaultSchedule() {
    const button = document.getElementById('set-as-default-button');
    button.addEventListener('click', () => {
        localStorage.setItem('default subjects', JSON.stringify(subjects));
    });
}

function loadHomeworkPage() {
    const homeworkWindow = document.getElementById('homework-window');

    document.getElementById('homework-button').addEventListener('click', () => {
        homeworkWindow.classList.add('is-active');
        document.body.style.overflow = 'hidden';
        window.onclick = event => {
            if (event.target === homeworkWindow || event.target === document.getElementById('homework-window-span')) {
                homeworkWindow.classList.remove('is-active');
                document.body.style.overflow = 'visible';
            }
        };
    });
}

function openBooksModal() {
    const booksList = document.getElementById('books-list');
    document.getElementById('books-button').addEventListener('click', () => {
        booksList.classList.add('is-active');
        document.body.style.overflow = 'hidden'
    });
    document.getElementById('books-close-button').addEventListener('click', () => {
        booksList.classList.remove('is-active');
        document.body.style.overflow = 'visible';
    });
}

function fillFullSchedule() {
    const currentSubjects = JSON.parse(localStorage.getItem('subjects'));
    const currentTime = JSON.parse(localStorage.getItem('time'));

    for (let weekday in currentSubjects) {
        const currentWeekday = document.getElementById(`full-${weekday}`);
        for (let subject of currentSubjects[weekday]) {
            const li = document.createElement('li');
            li.classList.add('day-list-item__lesson', subject.name.split(' ').join('-'));
            if (subject.done) li.classList.add('complete-lesson');
            li.textContent = subject.name;
            currentWeekday.append(li);
        }
    }

    for (let timer of currentTime) {
        const li = document.createElement('li');
        li.classList.add('day-list-item__lesson-time');
        li.textContent = timer;
        document.getElementById('full-time').append(li);
    }

    checkNumberLessons('full-monday', 'full-tuesday', 'full-wednesday', 'full-thursday', 'full-friday');

    document.getElementById('full-schedule-button').addEventListener('click', () => {
        if (window.innerWidth > 680) document.querySelector('.full-schedule-list').classList.toggle('is-active');
    });
}

function openBurgerMenu() {
    document.getElementById('burger-open-button').addEventListener('click', () => {
        document.getElementById('burger-menu').classList.add('is-active');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('burger-close-button').addEventListener('click', () => {
        document.getElementById('burger-menu').classList.remove('is-active');
        document.body.style.overflow = 'visible';
    });
}