function createLessons() {
    const subjects = {
        monday: [
            'history of ukraine', 'history of ukraine', 'history of ukraine', 'history of ukraine',
            'history of ukraine', 'history of ukraine', 'history of ukraine'
        ],
        tuesday: [
            'history of ukraine', 'history of ukraine', 'history of ukraine', 'history of ukraine',
            'history of ukraine', 'history of ukraine', 'history of ukraine'
        ],
        wednesday: [
            'history of ukraine', 'history of ukraine', 'history of ukraine', 'history of ukraine',
            'history of ukraine', 'history of ukraine', 'history of ukraine'
        ],
        thursday: [
            'history of ukraine', 'history of ukraine', 'history of ukraine', 'history of ukraine',
            'history of ukraine', 'history of ukraine', 'history of ukraine'
        ],
        friday: [
            'history of ukraine', 'history of ukraine', 'history of ukraine', 'history of ukraine',
            'history of ukraine', 'history of ukraine', 'history of ukraine'
        ]
    };
}

function loadHomeworkPage() {
    const homeworkWindow = document.getElementById('homework-window');

    document.getElementById('homework-button').addEventListener('click', () => {
        homeworkWindow.style.display = 'flex';
        window.onclick = event => {
            if (event.target === homeworkWindow || event.target === document.getElementById('homework-window-span')) {
                homeworkWindow.style.display = 'none';
            }
        };
    });
}

function findSubjects() {
    const input = document.getElementById('find-input');

    input.addEventListener('input', () => {
        document.querySelectorAll('.day-list-item__lesson').forEach(lesson => {
            if (input.value.toLowerCase() === lesson.textContent.toLowerCase() ||
                lesson.textContent.toLowerCase().split(' ').includes(input.value.toLowerCase())) {
                lesson.style.cssText = 'text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-weight: 700';
            }
            else lesson.style = null;
        });
    });
}

function markDayComplete() {
    const weekdaysTitles = [
        document.getElementById('monday-title'), document.getElementById('tuesday-title'),
        document.getElementById('wednesday-title'), document.getElementById('thursday-title'),
        document.getElementById('friday-title')
    ];

    weekdaysTitles.forEach(title => {
        title.addEventListener('click', () => {
            const weekday = title.parentNode;
            const weekdayLessons = weekday.querySelectorAll('.day-list-item__lesson');
            const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));

            if (!checkLessonsForComplete) {
                title.classList.add('complete-lesson');
                weekdayLessons.forEach(lesson => lesson.classList.add('complete-lesson'));
            } else {
                title.classList.remove('complete-lesson');
                weekdayLessons.forEach(lesson => lesson.classList.remove('complete-lesson'));
            }
        });
    });

    document.querySelectorAll('.day-list-item__lesson').forEach(lesson => {
        const lessonParent = lesson.parentNode;
        const lessonTitle = lessonParent.querySelector('.day-list-item__week-title');
        const weekdayLessons = lessonParent.querySelectorAll('.day-list-item__lesson');

        lesson.addEventListener('click', (event) => {
            if (document.getElementById('edit-button').classList.contains('ready-to-edit')) {
                if (!document.querySelector('.edit-time-input')) {
                    const input = document.createElement('input');
                    input.setAttribute('value', `${lesson.textContent}`);
                    input.classList.add('edit-time-input');
                    input.style.cssText = `left: ${event.pageX}px; top: ${event.pageY}px`;
                    document.body.append(input);
                } else {
                    lesson.textContent = document.querySelector('.edit-time-input').value;
                    document.querySelector('.edit-time-input').remove();
                }
            } else {
                lesson.classList.toggle('complete-lesson')
                const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                if (checkLessonsForComplete) lessonTitle.classList.add('complete-lesson');
                else lessonTitle.classList.remove('complete-lesson');
            }
        });

    });
}

function checkNumberLessons() {
    const weekdays = [
        document.getElementById('monday'), document.getElementById('tuesday'),
        document.getElementById('wednesday'), document.getElementById('thursday'),
        document.getElementById('friday')
    ];

    weekdays.forEach(weekday => {
        const lessonsOfDay = weekday.querySelectorAll('.day-list-item__lesson');
        if (lessonsOfDay.length < 7) {
            for (let i = 0; i < (7 - lessonsOfDay.length); ++i) {
                const li = document.createElement('li');
                li.textContent = '-';
                li.classList.add('day-list-item__lesson', 'day-list-item__lesson-skip');
                weekday.append(li);
            }
        }
    });
}

function reloadLessons() {
    document.getElementById('reload').addEventListener('click', () => {
        document.querySelectorAll('.day-list-item__lesson').forEach(lesson => lesson.classList.remove('complete-lesson'));
        document.querySelectorAll('.day-list-item__week-title').forEach(title => title.classList.remove('complete-lesson'));
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
                    input.setAttribute('value', '00:00 - 00:00');
                    input.classList.add('edit-time-input');
                    input.style.cssText = `left: ${event.pageX}px; top: ${event.pageY}px`;
                    document.body.append(input);
                } else {
                    const input = document.querySelector('.edit-time-input');
                    if (input.value.split('-').length == 2) timer.textContent = input.value;
                    input.remove();
                }
            }
        });
    });
}

function resetPage() {
    const button = document.getElementById('reset-button');
    button.addEventListener('click', () => location.reload());
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
    const select = document.getElementById('lang-select');
    select.addEventListener('change', () => {
        location.href = `${location.pathname}#${select.value}`;
        location.reload();
    });
    const hash = location.hash.substr(1);
    if (!allLanguages.includes(hash)) {
        location.href = location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    for (let key in translateSubjects) {
        document.querySelectorAll(`.${key}`).forEach(subject => subject.textContent = translateSubjects[key][hash]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHomeworkPage();
    findSubjects();
    markDayComplete();
    reloadLessons();
    checkNumberLessons();
    resetPage();
    translatePage();
    editSchedule();
});