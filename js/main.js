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

let links = {
    "history-of-ukraine": {
        cht: null,
        online: 'https://pidruchnyk.com.ua/945-istoriya-ukrainy-9-klas-vlasov.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_istorija_ukrajini_vlasov_2017.pdf'
    },
    "history": {
        cht: 'https://shkola.obozrevatel.com/ukr/gdz/9klass/istorija_ukrainy/gisem-20176/',
        online: 'https://4book.org/uchebniki-ukraina/9-klas/pidruchnik-vsesvitnya-istoriya-9-klas-gisem-2017',
        pdf: 'https://file.4book.org/images/shcoolbook_ua/9/9_vi_g_2017_ua.pdf'
    },
    "algebra": {
        cht: 'https://vshkole.com/9-klass/reshebniki/algebra/ns-prokopenko-yuo-zaharijchenko-nl-kinaschuk-2017',
        online: 'https://4book.org/uchebniki-ukraina/9-klas/pidruchnik-algebra-9-klas-prokopenko-2017',
        pdf: 'https://file.4book.org/images/shcoolbook_ua/9/9_a_p_2017.pdf'
    },
    "geometry": {
        cht: 'https://vshkole.com/9-klass/reshebniki/geometriya/ap-yershova-vv-goloborodko-of-krizhanovskij-sv-yershov-2017',
        online: 'https://4book.org/uchebniki-ukraina/9-klas/pidruchnik-geometriya-9-klas-iershova-2017-2017',
        pdf: 'https://file.4book.org/images/shcoolbook_ua/9/9_geom_e_2017_ua.pdf'
    },
    "physics": {
        cht: 'https://vshkole.com/9-klass/reshebniki/fizika/vd-sirotyuk-2017',
        online: 'https://pidruchnyk.com.ua/1018-syrotyuk-fmzyka-9-klas.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_fizika_sirotjuk_2017.pdf'
    },
    "PE": {
        cht: null,
        online: null,
        pdf: null
    },
    "foreign-literature": {
        cht: null,
        online: 'https://pidruchnyk.com.ua/959-zarubizhna-literatura-9-klas-nikolenko-2017.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_zarubizhna_literatura_nikolenko_2017.pdf'
    },
    "ukrainian-literature": {
        cht: 'https://4book.org/gdz-reshebniki-ukraina/9-klas/gdz-ukrayinska-literatura-9-klas-avramenko-2017',
        online: 'https://pidruchnyk.com.ua/967-ukrliteratura-9-klas-avramenko-2017.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_ukrajinska_literatura_avramenko_2017.pdf'
    },
    "ukrainian": {
        cht: 'https://matematika-doma.org/gdz/9-klas/ukrajinska-mova/zabolotnij',
        online: 'https://pidruchnyk.com.ua/1000-ukrmova-zabolotniy-9-klas-2017.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_ukrajinska_mova_zabolotnij_2017.pdf'
    },
    "german": {
        cht: 'https://gdzonline.net/475-nimecka-hllo-freunde-9-klas-sotnikova.html',
        online: 'https://shkola.in.ua/812-nimetska-mova-9-klas-sotnykova-5-rik-navchannia.html',
        pdf: 'https://vshkole.com/web/uploads/book/nimecka_mova_9_sotnikova_2017_5_rik.zip'
    },
    "technology": {
        cht: null,
        online: 'https://4book.org/uchebniki-ukraina/9-klas/pidruchnik-trudove-navchannya-9-klas-hodzicka-divchata-2017',
        pdf: '// https://file.4book.org/images/shcoolbook_ua/9/9_t_h_2017_div.pdf'
    },
    "jurisprudence": {
        cht: null,
        online: 'https://shkola.in.ua/2520-osnovy-pravoznavstva-9-klas-sviatokum-2022.html',
        pdf: 'https://drive.google.com/uc?export=download&id=1Mv0fZXhox8kDcsjPZYq6iMx8M9Vlb26m'
    },
    "computer-science": {
        cht: null,
        online: null,
        pdf: null
    },
    "english": {
        cht: 'https://matematika-doma.org/gdz/9-klas/anglijska-mova/karpyuk',
        online: 'https://pidruchnyk.com.ua/948-students-book-english-9-oksana-karpyuk.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_anglijska_mova_karpjuk_2017.pdf'
    },
    "chemistry": {
        cht: null,
        online: 'https://pidruchnyk.com.ua/1037-hmya-9-klas-grankna-2017.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_khimija_grankina_2017.pdf'
    },
    "biology": {
        cht: 'https://shkola.obozrevatel.com/ukr/gdz/9klass/biologija/zadorozhnyij-20172/',
        online: 'https://shkola.in.ua/739-biolohiia-9-klas-zadorozhnyi-2017.html',
        pdf: 'https://drive.google.com/uc?export=download&id=1dXIS5v_10CeeasTWIr7EEE3eWXDSwPJj'
    },
    "health-study": {
        cht: null,
        online: 'https://pidruchnyk.com.ua/1022-zdorovya-9klas-polischuk.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_osnovi_zdorovja_polishhuk_2017.pdf'
    },
    "geography": {
        cht: null,
        online: 'https://pidruchnyk.com.ua/913-kobernik-9-geografiya.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_geografija_kobernik_2017.pdf'
    },
    "art": {
        cht: null,
        online: 'https://pidruchnyk.com.ua/1011-mystectvo-masol-9-klas.html',
        pdf: 'https://files.pidruchnyk.com.ua/uploads/book/9_klas_mistectvo_masol_2017.pdf'
    }
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
if (localStorage.getItem('default time')) defaultTime = JSON.parse(localStorage.getItem('default time'));
else {
    defaultTime = JSON.parse(JSON.stringify(time));
    localStorage.setItem('default time', JSON.stringify(defaultTime));
}

if (localStorage.getItem('time')) time = JSON.parse(localStorage.getItem('time'));
else localStorage.setItem('time', JSON.stringify(time));

if (localStorage.getItem('useful-links')) links = JSON.parse(localStorage.getItem('useful-links'));
else localStorage.setItem('useful-links', JSON.stringify(links));

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        if (document.querySelector('.day-list-item__desktop-wrapper')) document.querySelector('.day-list-item__desktop-wrapper').remove();
        fillFullSchedule();
    }

    switchTheme();
    addLessons(subjects, time);
    loadHomeworkPage();
    findSubjects();
    skipLessons();
    markDayComplete();
    reloadLessons();
    resetPage();
    translatePage();
    editTime();
    initializeSwiper();
    setAsDefaultSchedule();
    openBurgerMenu();
    manageRows();
    manageWeekdays();

    document.querySelectorAll('.day-list-item__desktop-wrapper ul').forEach(weeklist => {
        weeklist.style.flexBasis = `${100 / document.querySelectorAll('.day-list-item__desktop-wrapper ul').length}%`;
    });
});

function addLessons(subjects, time) {
    for (let weekday in subjects) {
        const ul = document.createElement('ul');
        ul.classList.add('schedule-days-list__day-list-item');
        ul.id = weekday;
        if (document.querySelector('.day-list-item__desktop-wrapper')) document.querySelector('.day-list-item__desktop-wrapper').append(ul);
        else {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.append(ul);
            document.querySelector('.swiper-wrapper').append(slide);
        }

        const currentWeekday = document.getElementById(weekday);

        const li = document.createElement('li');
        li.id = `${weekday}-title`;
        li.classList.add('day-list-item__title', 'day-list-item__week-title');
        li.textContent = weekday;
        currentWeekday.append(li);

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
            if (checkLessonsForComplete) {
                title.classList.remove('complete-lesson');
                weekdayLessons.forEach(lesson => lesson.classList.remove('complete-lesson'));
                if (title.parentElement.id.split('-').length > 1) {
                    const subjectId = title.parentElement.id.split('-').length - 1;
                    for (let subject of subjects[title.parentElement.id.split('-')[subjectId]]) subject.done = false;
                } else for (let subject of subjects[title.parentElement.id]) subject.done = false;
                localStorage.setItem('subjects', JSON.stringify(subjects));
            } else {
                title.classList.add('complete-lesson');
                weekdayLessons.forEach(lesson => lesson.classList.add('complete-lesson'));
                if (title.parentElement.id.split('-').length > 1) {
                    const subjectId = title.parentElement.id.split('-').length - 1;
                    for (let subject of subjects[title.parentElement.id.split('-')[subjectId]]) subject.done = true;
                } else for (let subject of subjects[title.parentElement.id]) subject.done = true;
                localStorage.setItem('subjects', JSON.stringify(subjects));
            }
        });
    });

    document.querySelectorAll('.day-list-item__lesson, .day-list-item__lesson-skip').forEach(lesson => {
        const lessonParent = lesson.parentElement;
        let parentId;
        if (lessonParent.id.split('-').length > 1) parentId = lessonParent.id.split('-')[lessonParent.id.split('-').length - 1];
        else parentId = lessonParent.id;
        const lessonTitle = lessonParent.querySelector('.day-list-item__week-title');
        const weekdayLessons = lessonParent.querySelectorAll('.day-list-item__lesson');

        lesson.addEventListener('click', () => {
            const lessonPanel = createLessonPanel().lessonPanel;

            if (!document.querySelector('.lesson-panel-list') && !document.querySelector('.links-list') && !document.querySelector('.what-do-wrapper') &&
                !document.querySelector('.edit-input')) {
                if (window.innerWidth <= 1200 && window.innerWidth > 768) lessonPanel.style.cssText = `left: ${lesson.offsetLeft}px; top: ${lesson.offsetTop}px`;
                else if (window.innerWidth <= 768) lessonPanel.style.cssText = `left: ${lesson.getBoundingClientRect().left + 20}px; top: ${lesson.getBoundingClientRect().top}px`
                else lessonPanel.style.cssText = `left: ${lesson.offsetLeft + lesson.offsetWidth / 3}px; top: ${lesson.offsetTop}px`;
                document.body.append(lessonPanel);
                document.querySelector('.lesson-panel-list').querySelectorAll('li:not(:first-child)').forEach(element => {
                    element.insertAdjacentHTML('beforebegin', '<div style="width: 100%; border-bottom: 1px solid #000"></div>');
                });

                const completeButton = document.getElementById('mark-complete-button');
                const deleteButton = document.getElementById('delete-lesson-button');
                const linksButton = document.getElementById('useful-links-button');
                const editButton = document.getElementById('edit-lesson-button');

                editButton.addEventListener('click', () => {
                    if (document.querySelector('.links-list')) document.querySelector('.links-list').remove();
                    lessonPanel.remove();

                    const wrapper = document.createElement('div');
                    wrapper.classList.add('edit-time-wrapper');
                    const button = document.createElement('button');
                    button.textContent = 'edit';
                    button.classList.add('edit-time-button');
                    const input = document.createElement('input');
                    if (lesson.textContent !== '-') input.setAttribute('value', lesson.textContent);
                    input.classList.add('edit-input');
                    wrapper.append(input, button);
                    document.body.append(wrapper);
                    input.focus();
                    if (window.innerWidth <= 1024) wrapper.style.cssText = `opacity: 0.9; z-index: 1012; position: absolute; left: ${(window.innerWidth / 2) - (wrapper.offsetWidth / 2)}px;
                    top: ${(window.innerHeight / 2) - (wrapper.offsetHeight / 2)}px;`;
                    else wrapper.style.cssText = `z-index: 1012; position: absolute; left: ${lesson.offsetLeft}px; top: ${lesson.offsetTop + lesson.offsetHeight / 4}px;`;

                    button.addEventListener('click', () => {
                        if (input.value.trim()) {
                            lesson.textContent = input.value;
                            if (lesson.classList.contains('day-list-item__lesson-skip')) {
                                lesson.classList.remove('day-list-item__lesson-skip');
                                lesson.classList.add('day-list-item__lesson');
                                lesson.classList.add(lesson.textContent.split(' ').join('-'));
                            }
                            const indexOfLesson = Array.from(lessonParent.children).indexOf(lesson) - 1;
                            subjects[parentId][indexOfLesson].name = input.value;
                            localStorage.setItem('subjects', JSON.stringify(subjects));
                            wrapper.remove();

                            const weekdaysTitles = document.querySelectorAll('.day-list-item__week-title');
                            weekdaysTitles.forEach(title => {
                                const weekday = title.parentNode;
                                const weekdayLessons = weekday.querySelectorAll('li:not(:first-child)');
                                const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                                const checkLessonsForSkip = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                                if (checkLessonsForComplete || checkLessonsForSkip) title.classList.add('complete-lesson');
                                else title.classList.remove('complete-lesson');
                            });
                        } else wrapper.remove();
                    });
                });

                if (!lesson.classList.contains('day-list-item__lesson-skip')) {
                    completeButton.addEventListener('click', () => {
                        lesson.classList.toggle('complete-lesson');

                        const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                        if (checkLessonsForComplete) lessonTitle.classList.add('complete-lesson');
                        else lessonTitle.classList.remove('complete-lesson');

                        const indexOfLesson = Array.from(lessonParent.children).indexOf(lesson) - 1;
                        subjects[parentId][indexOfLesson].done = lesson.classList.contains('complete-lesson');
                        localStorage.setItem('subjects', JSON.stringify(subjects));

                        if (document.querySelector('.links-list')) document.querySelector('.links-list').remove();
                        lessonPanel.remove();

                        const weekdaysTitles = document.querySelectorAll('.day-list-item__week-title');
                        weekdaysTitles.forEach(title => {
                            const weekday = title.parentNode;
                            const weekdayLessons = weekday.querySelectorAll('.day-list-item__lesson');
                            const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                            if (checkLessonsForComplete) title.classList.add('complete-lesson');
                        });
                    });
                    deleteButton.addEventListener('click', () => {
                        lesson.textContent = '-';
                        lesson.removeAttribute('class');
                        lesson.classList.add('day-list-item__lesson-skip');

                        const indexOfLesson = Array.from(lessonParent.children).indexOf(lesson) - 1;
                        subjects[parentId][indexOfLesson].name = '-';
                        localStorage.setItem('subjects', JSON.stringify(subjects));

                        if (document.querySelector('.links-list')) document.querySelector('.links-list').remove();
                        lessonPanel.remove();

                        const weekdaysTitles = document.querySelectorAll('.day-list-item__week-title');
                        weekdaysTitles.forEach(title => {
                            const weekday = title.parentNode;
                            const weekdayLessons = weekday.querySelectorAll('.day-list-item__lesson');
                            const checkLessonsForComplete = Array.from(weekdayLessons).every(lesson => lesson.classList.contains('complete-lesson'));
                            if (checkLessonsForComplete) title.classList.add('complete-lesson');
                        });
                    });
                    linksButton.addEventListener('click', () => {
                        if (!document.querySelector('.links-list')) {
                            const linksList = document.createElement('ul');
                            linksList.classList.add('links-list');
                            const CHTLink = document.createElement('a'),
                                PDFLink = document.createElement('a'),
                                onlineLink = document.createElement('a');
                            for (let i = 0; i < 3; ++i) {
                                const linksListItem = document.createElement('li');
                                linksList.append(linksListItem);
                                linksListItem.append([CHTLink, PDFLink, onlineLink][i]);
                            }
                            document.body.append(linksList);
                            linksList.style.cssText = `left: ${lessonPanel.getBoundingClientRect().left + lessonPanel.offsetWidth - 10}px;
                             top: ${lessonPanel.offsetTop + 5}px`;
                            if ((window.innerWidth - lessonPanel.offsetLeft - lessonPanel.offsetWidth) < linksList.offsetWidth) {
                                linksList.style.cssText = `left: ${lessonPanel.getBoundingClientRect().left - lessonPanel.offsetWidth + 10}px;
                                top: ${lessonPanel.offsetTop + 5}px`;
                            }
                            CHTLink.setAttribute('href', links[lesson.textContent.split(' ').join('-')].cht);
                            CHTLink.textContent = 'cht(gdz)';
                            CHTLink.id = 'cht';
                            PDFLink.setAttribute('href', links[lesson.textContent.split(' ').join('-')].pdf);
                            PDFLink.textContent = 'pdf file';
                            PDFLink.id = 'pdf';
                            onlineLink.setAttribute('href', links[lesson.textContent.split(' ').join('-')].online);
                            onlineLink.textContent = 'use online';
                            onlineLink.id = 'online';

                            [CHTLink, PDFLink, onlineLink].forEach(link => {
                                link.addEventListener('click', e => {
                                    e.preventDefault();

                                    const whatWrapper = document.createElement('div');
                                    whatWrapper.classList.add('what-do-wrapper');
                                    whatWrapper.insertAdjacentHTML('afterbegin', `
                                <svg tabindex="0" id="back-button" role="button" aria-label="back button" class="what-do-wrapper__black-arrow" width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM21 5.25L1 5.25V6.75L21 6.75V5.25Z" fill="black"/>
                                </svg>`);
                                    whatWrapper.style.cssText = `left: ${linksList.offsetLeft}px; top: ${linksList.offsetTop}px`;
                                    const openLink = document.createElement('a');
                                    openLink.textContent = 'open';
                                    openLink.setAttribute('href', link.href);
                                    openLink.setAttribute('target', '_blank');
                                    const editLinkButton = document.createElement('button');
                                    editLinkButton.textContent = 'edit';
                                    whatWrapper.append(openLink, editLinkButton);
                                    document.body.append(whatWrapper);
                                    lessonPanel.remove();
                                    linksList.remove();

                                    openLink.addEventListener('click', (e) => {
                                        if (!link.href) e.preventDefault();
                                        whatWrapper.remove();
                                    });
                                    document.getElementById('back-button').addEventListener('click', () => {
                                        whatWrapper.remove();
                                        if (document.querySelector('.edit-time-wrapper')) document.querySelector('.edit-time-wrapper').remove();
                                        document.body.append(lessonPanel, linksList);
                                    });
                                    editLinkButton.addEventListener('click', () => {
                                        const wrapper = document.createElement('div');
                                        wrapper.classList.add('edit-time-wrapper');
                                        const button = document.createElement('button');
                                        button.textContent = 'edit';
                                        button.classList.add('edit-time-button');
                                        const input = document.createElement('input');
                                        input.classList.add('edit-input');
                                        wrapper.append(input, button);
                                        document.body.append(wrapper);
                                        wrapper.style.cssText = `position: absolute; left: ${whatWrapper.offsetLeft}px;
                                        top: ${whatWrapper.offsetTop + whatWrapper.offsetHeight + 10}px`;
                                        input.focus();
                                        button.addEventListener('click', () => {
                                            if (input.value.trim()) {
                                                links[lesson.textContent][link.id] = input.value;
                                                link.href = input.value;
                                                openLink.href = input.value;
                                                localStorage.setItem('useful-links', JSON.stringify(links));
                                                wrapper.remove();
                                            } else wrapper.remove();
                                        });
                                    });
                                    // dragndrop of wrapper
                                    whatWrapper.addEventListener('mousedown', () => {
                                        const moveAt = evt => {
                                            whatWrapper.style.cssText = `top: ${evt.pageY - (whatWrapper.offsetHeight / 2)}px; left: ${evt.pageX - (whatWrapper.offsetWidth)}px`;
                                            if (document.querySelector('.edit-time-wrapper')) {
                                                document.querySelector('.edit-time-wrapper').style.cssText = `position: absolute; left: ${whatWrapper.offsetLeft}px;
                                                top: ${whatWrapper.offsetTop + whatWrapper.offsetHeight + 10}px`;
                                            }
                                        }
                                        whatWrapper.addEventListener('mousemove', moveAt);
                                        whatWrapper.addEventListener('mouseup', () => {
                                            whatWrapper.removeEventListener('mousemove', moveAt);
                                        });
                                    });

                                    whatWrapper.addEventListener('touchmove', (event) => {
                                        event.preventDefault();
                                        whatWrapper.style.top = `${event.touches[0].pageY - (whatWrapper.offsetHeight / 2)}px`;
                                        whatWrapper.style.left = `${event.touches[0].pageX - (whatWrapper.offsetWidth)}px`;
                                        if (document.querySelector('.edit-time-wrapper')) {
                                            document.querySelector('.edit-time-wrapper').style.cssText = `position: absolute; left: ${whatWrapper.offsetLeft}px;
                                            top: ${whatWrapper.offsetTop + whatWrapper.offsetHeight + 10}px`;
                                        }
                                    });
                                });
                            });
                        }
                    });
                } else {
                    completeButton.setAttribute('disabled', 'disabled');
                    deleteButton.setAttribute('disabled', 'disabled');
                    linksButton.setAttribute('disabled', 'disabled');
                }

            } else {
                document.querySelector('.lesson-panel-list').remove();
                if (document.querySelector('.links-list')) document.querySelector('.links-list').remove();
            }
        });
    });
}

function createLessonPanel() {
    const lessonPanel = document.createElement('ul');
    lessonPanel.classList.add('lesson-panel-list');

    const markAsCompleteButton = document.createElement('button');
    markAsCompleteButton.classList.add('lesson-panel-list__list-item-button');
    markAsCompleteButton.textContent = 'mark as complete';
    markAsCompleteButton.id = 'mark-complete-button'
    const deleteLessonButton = document.createElement('button');
    deleteLessonButton.classList.add('lesson-panel-list__list-item-button');
    deleteLessonButton.textContent = 'delete lesson';
    deleteLessonButton.id = 'delete-lesson-button';
    const usefulLinksButton = document.createElement('button');
    usefulLinksButton.classList.add('lesson-panel-list__list-item-button');
    usefulLinksButton.textContent = 'useful links';
    usefulLinksButton.id = 'useful-links-button';
    const editLessonButton = document.createElement('button');
    editLessonButton.classList.add('lesson-panel-list__list-item-button');
    editLessonButton.textContent = 'edit lesson';
    editLessonButton.id = 'edit-lesson-button';

    lessonPanel.addEventListener('mousedown', () => {
        const moveAt = evt => {
            lessonPanel.style.cssText = `top: ${evt.pageY - (lessonPanel.offsetHeight / 2)}px; left: ${evt.pageX - (lessonPanel.offsetWidth / 2)}px`;
            if (document.querySelector('.links-list')) {
                if ((window.innerWidth - lessonPanel.offsetLeft - lessonPanel.offsetWidth) < document.querySelector('.links-list').offsetWidth) {
                    document.querySelector('.links-list').style.cssText = `left: ${lessonPanel.offsetLeft - document.querySelector('.links-list').offsetWidth + 10}px;
                    top: ${lessonPanel.offsetTop + 5}px`;
                } else {
                    document.querySelector('.links-list').style.cssText = `left: ${lessonPanel.offsetLeft + lessonPanel.offsetWidth - 10}px; top: ${lessonPanel.offsetTop + 5}px`;
                }
            }
        }

        lessonPanel.addEventListener('mousemove', moveAt);
        lessonPanel.addEventListener('mouseup', () => {
            lessonPanel.removeEventListener('mousemove', moveAt);
        });
    });

    lessonPanel.addEventListener('touchmove', (event) => {
        event.preventDefault();
        lessonPanel.style.top = `${event.touches[0].pageY - (lessonPanel.offsetHeight / 2)}px`;
        lessonPanel.style.left = `${event.touches[0].pageX - (lessonPanel.offsetWidth / 2)}px`;
        if (document.querySelector('.links-list')) {
            if ((window.innerWidth - lessonPanel.offsetLeft - lessonPanel.offsetWidth) < document.querySelector('.links-list').offsetWidth) {
                document.querySelector('.links-list').style.cssText = `left: ${lessonPanel.getBoundingClientRect().left - lessonPanel.offsetWidth + 10}px;
                top: ${lessonPanel.offsetTop + 5}px`;
            } else {
                document.querySelector('.links-list').style.cssText = `left: ${lessonPanel.offsetLeft + lessonPanel.offsetWidth - 10}px; top: ${lessonPanel.offsetTop + 5}px`;
            }
        }
    });

    for (let i = 0; i < 4; ++i) {
        const lessonPanelItem = document.createElement('li');
        lessonPanelItem.classList.add('lesson-panel-list__list-item');
        lessonPanel.append(lessonPanelItem);
        lessonPanelItem.append([markAsCompleteButton, deleteLessonButton, usefulLinksButton, editLessonButton][i]);
    }

    return {
        lessonPanel, markAsCompleteButton, usefulLinksButton, editLessonButton, deleteLessonButton
    };
}

function editTime() {
    const timeOfLessons = document.querySelectorAll('.day-list-item__lesson-time');
    timeOfLessons.forEach(timer => {
        timer.addEventListener('click', (event) => {
            if (!sessionStorage.getItem('go-edit')) if (confirm('do you want to change time of lesson?')) sessionStorage.setItem('go-edit', true);

            if (sessionStorage.getItem('go-edit')) {
                if (!document.querySelector('.edit-input')) {
                    const block = document.createElement('div');
                    const wrapper = document.createElement('div');
                    wrapper.classList.add('edit-time-wrapper');
                    const button = document.createElement('button');
                    button.textContent = 'edit';
                    button.classList.add('edit-time-button');
                    const input = document.createElement('input');
                    input.setAttribute('value', timer.textContent);
                    input.classList.add('edit-input');
                    block.style.cssText = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px`;
                    wrapper.append(input, button);
                    block.append(wrapper);
                    document.body.append(block);
                    input.focus();
                    button.addEventListener('click', () => {
                        if (input.value.split('-').length == 2) {
                            timer.textContent = input.value;
                            let indexOfTimer = Array.from(document.querySelectorAll('.day-list-item__lesson-time')).indexOf(timer);
                            if (window.innerWidth <= 768) indexOfTimer = Array.from(document.querySelectorAll('.day-list-item__lesson-time')).indexOf(timer) -
                                document.querySelectorAll('.day-list-item__lesson-time').length / 2;
                            time[indexOfTimer] = input.value;
                            localStorage.setItem('time', JSON.stringify(time));
                            block.remove();
                        } else alert('please, enter a correct time format (example: 00:00 - 00:00)');
                    });
                }
            }
        });
    });
}

function skipLessons() {
    let weekdays;
    if (document.querySelector('.day-list-item__desktop-wrapper')) weekdays = document.querySelector('.day-list-item__desktop-wrapper').querySelectorAll('ul');
    else weekdays = document.querySelectorAll('.swiper-slide ul');

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
                subjects[weekday.querySelector('.day-list-item__week-title').textContent].push({
                    name: '-',
                    done: false
                });
                localStorage.setItem('subjects', JSON.stringify(subjects));
            }
        }

        for (let lesson of lessonsOfDay) {
            if (lesson.textContent === '-') {
                lesson.removeAttribute('class');
                lesson.classList.add('day-list-item__lesson-skip');
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
            subjects = JSON.parse(localStorage.getItem('default subjects'));
            for (let weekday in subjects) for (let subject of subjects[weekday]) subject.done = false;
            localStorage.setItem('subjects', JSON.stringify(subjects));
            time = JSON.parse(localStorage.getItem('default time'));
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
            ru: 'физкультура',
            ua: 'фiзкультура'
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
    document.getElementById('set-as-default-button').addEventListener('click', () => {
        localStorage.setItem('default subjects', JSON.stringify(JSON.parse(localStorage.getItem('subjects'))));
        localStorage.setItem('default time', JSON.stringify(JSON.parse(localStorage.getItem('time'))));
    });
}

function loadHomeworkPage() {
    const homeworkWindow = document.getElementById('homework-window');

    [document.getElementById('homework-button'), document.getElementById('burger-homework-button')].forEach(button => {
        button.addEventListener('click', () => {
            if (document.getElementById('burger-menu').classList.contains('is-active')) {
                document.getElementById('burger-menu').classList.remove('is-active');
            }
            window.scrollTo(0, 0);
            homeworkWindow.classList.add('is-active');
            document.body.style.overflow = 'hidden';
            window.onclick = event => {
                if (event.target === homeworkWindow || event.target === document.getElementById('homework-window-span')) {
                    homeworkWindow.classList.remove('is-active');
                    document.body.style.overflow = 'visible';
                }
            };
        });
    });
}

function fillFullSchedule() {
    const currentSubjects = JSON.parse(localStorage.getItem('subjects'));
    const currentTime = JSON.parse(localStorage.getItem('time'));

    for (let weekday in currentSubjects) {
        const ul = document.createElement('ul');
        ul.classList.add('full-schedule-list__list-item');
        ul.id = `full-${weekday}`;
        document.querySelector('.full-schedule-list').append(ul);

        const currentWeekday = document.getElementById(`full-${weekday}`);

        const li = document.createElement('li');
        li.id = `${weekday}-title`;
        li.classList.add('day-list-item__title', 'day-list-item__week-title');
        li.textContent = weekday;
        currentWeekday.append(li);

        for (let subject of currentSubjects[weekday]) {
            const li = document.createElement('li');
            li.classList.add('day-list-item__lesson', subject.name.split(' ').join('-'));
            if (subject.done) li.classList.add('complete-lesson');
            li.textContent = subject.name;
            currentWeekday.append(li);
        }
    }

    document.querySelectorAll('.full-schedule-list__list-item li').forEach(item => {
        if (item.textContent === '-') {
            item.removeAttribute('class');
            item.classList.add('day-list-item__lesson-skip');
        }
    });

    for (let timer of currentTime) {
        const li = document.createElement('li');
        li.classList.add('day-list-item__lesson-time');
        li.textContent = timer;
        document.getElementById('full-time').append(li);
    }

    document.getElementById('full-schedule-button').addEventListener('click', () => {
        if (window.matchMedia("(orientation: landscape)").matches) {
            document.querySelector('.full-schedule-list').classList.toggle('is-active');
            if (document.querySelector('.full-schedule-list').classList.contains('is-active')) {
                window.addEventListener('resize', () => {
                    if (window.matchMedia("(orientation: portrait)").matches) {
                        document.querySelector('.full-schedule-list').classList.remove('is-active');
                    }
                });
            }
        } else alert('change your screen orientation and click again please');
    });
}

function openBurgerMenu() {
    document.getElementById('burger-open-button').addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.getElementById('burger-menu').classList.add('is-active');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('burger-close-button').addEventListener('click', () => {
        document.getElementById('burger-menu').classList.remove('is-active');
        document.body.style.overflow = 'visible';
    });
}

function manageRows() {
    document.getElementById('plus-row').addEventListener('click', () => {
        let indexOfTimer = 0;
        const allTimers = document.querySelectorAll('.day-list-item__lesson-time');
        if (window.innerWidth > 768) indexOfTimer = Array.from(allTimers).indexOf(allTimers[allTimers.length - 1]);
        else indexOfTimer = Array.from(allTimers).indexOf(allTimers[allTimers.length - 1]);

        const firstCurrentInMinutes = (+allTimers[indexOfTimer].textContent.split('-')[0].split(':')[0] * 60) + +allTimers[indexOfTimer].textContent.split('-')[0].split(':')[1];
        const secondCurrentInMinutes = (+allTimers[indexOfTimer].textContent.split('-')[1].split(':')[0] * 60) + +allTimers[indexOfTimer].textContent.split('-')[1].split(':')[1];
        const previousInMinutes = (+allTimers[indexOfTimer - 1].textContent.split('-')[1].split(':')[0] * 60) + +allTimers[indexOfTimer - 1].textContent.split('-')[1].split(':')[1];
        const lessonTime = secondCurrentInMinutes - firstCurrentInMinutes;
        const breakTime = firstCurrentInMinutes - previousInMinutes;

        let startMinutes = String(String(((secondCurrentInMinutes + breakTime) / 60).toFixed(2)).split('.')[1] * 6).substr(0, 2);
        if (startMinutes == 0) startMinutes = '00';
        const startTimer = `${parseInt((secondCurrentInMinutes + breakTime) / 60)}:${startMinutes}`;
        let startInMinutes = +(startTimer.split(':')[0] * 60) + +(startTimer.split(':')[1]);

        let endMinutes = String(String(((startInMinutes + lessonTime) / 60).toFixed(2)).split('.')[1] * 6).substr(0, 2);
        if (endMinutes == 0) endMinutes = '00';
        const endTimer = `${parseInt((startInMinutes + lessonTime) / 60)}:${endMinutes}`;

        const li = document.createElement('li');
        li.classList.add('day-list-item__lesson-time');
        li.textContent = `${startTimer} - ${endTimer}`;
        time.push(`${startTimer} - ${endTimer}`);
        localStorage.setItem('time', JSON.stringify(time));
        document.querySelector('.schedule-days-list__time-list-item').append(li);

        if (document.querySelector('.day-list-item__desktop-wrapper')) {
            document.querySelectorAll('.day-list-item__desktop-wrapper ul').forEach(weeklist => {
                const li = document.createElement('li');
                li.classList.add('day-list-item__lesson-skip');
                li.textContent = '-';
                weeklist.append(li);

                subjects[weeklist.id].push({ name: '-', done: false });
                localStorage.setItem('subjects', JSON.stringify(subjects));
            });
        } else {
            document.querySelectorAll('.swiper-slide ul').forEach(weeklist => {
                const li = document.createElement('li');
                li.classList.add('day-list-item__lesson-skip');
                li.textContent = '-';
                weeklist.append(li);

                subjects[weeklist.id].push({ name: '-', done: false });
                localStorage.setItem('subjects', JSON.stringify(subjects));
            });
        }
    });

    document.getElementById('minus-row').addEventListener('click', () => {
        if (document.querySelector('.day-list-item__desktop-wrapper')) {
            document.querySelectorAll('.day-list-item__desktop-wrapper ul').forEach(weeklist => {
                weeklist.querySelectorAll('li')[weeklist.childElementCount - 1].remove();
            });
        } else {
            document.querySelectorAll('.swiper-slide ul').forEach(weeklist => {
                weeklist.querySelectorAll('li')[weeklist.childElementCount - 1].remove();
            });
        }
        document.querySelectorAll('.schedule-days-list__time-list-item li')[document.querySelectorAll('.schedule-days-list__time-list-item li').length - 1].remove();

        time.pop();
        localStorage.setItem('time', JSON.stringify(time));
        for (let key in subjects) subjects[key].pop();
        localStorage.setItem('subjects', JSON.stringify(subjects));
    });
}

function manageWeekdays() {
    const manageList = createManageList().manageList;
    manageList.prepend(createManageList().deleteTitle);
    manageList.append(createManageList().addTitle);

    document.getElementById('manage-weekdays-button').addEventListener('click', () => {
        document.body.append(manageList);
        const wrapper = createManageList().addWrapper;
        manageList.insertAdjacentHTML('afterbegin',
            `<button id="manage-list-backward" class="manage-list__backward">
                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="22.5" cy="22" rx="22.5" ry="22" fill="#D06BF3"/>
                <line y1="-1.5" x2="25.7467" y2="-1.5" transform="matrix(0.715007 -0.699118 0.715007 0.699118 14.0225 32)" stroke="black" stroke-width="3"/>
                <line y1="-1.5" x2="25.7467" y2="-1.5" transform="matrix(0.715007 0.699118 -0.715007 0.699118 13 14)" stroke="black" stroke-width="3"/>
                </svg>
            </button>`);
        const input = createManageList().addInput;
        const button = createManageList().addButton;
        if (!document.querySelector('.manage-list__add-wrapper')) {
            wrapper.append(input, button);
            manageList.append(wrapper);
        }
        window.scrollTo(0, 0);
        manageList.style.cssText = `left: ${(window.innerWidth / 2) - manageList.offsetWidth / 2}px; top: ${(window.innerHeight / 2) - manageList.offsetHeight / 2}px`;

        document.getElementById('manage-list-backward').addEventListener('click', () => manageList.remove());

        button.addEventListener('click', () => {
            if (Object.keys(subjects).length < 7) {
                if (input.value.trim()) {
                    if (!subjects[input.value]) {
                        subjects[input.value] = [];
                        localStorage.setItem('subjects', JSON.stringify(subjects));

                        document.querySelectorAll('.day-list-item__lesson-time').forEach(item => item.remove());
                        document.querySelectorAll('.day-list-item__desktop-wrapper ul').forEach(item => item.remove());
                        addLessons(subjects, time);
                        skipLessons();
                        markDayComplete();
                    }
                } else if (!document.querySelector('.manage-list__amount-warning')) manageList.append(createManageList().amountWarning);
            } else if (!document.querySelector('.manage-list__amount-warning')) manageList.append(createManageList().amountWarning);
        });

        document.querySelectorAll('.manage-list__list-item').forEach(item => {
            item.addEventListener('click', () => {
                if (confirm(`do you want to delete a schedule for ${item.textContent}?`)) {
                    delete subjects[item.textContent];
                    localStorage.setItem('subjects', JSON.stringify(subjects));

                    item.remove();
                    if (document.querySelector('.day-list-item__desktop-wrapper')) {
                        document.getElementById(item.textContent).remove();
                        document.querySelectorAll('.day-list-item__desktop-wrapper ul').forEach(weeklist => {
                            weeklist.style.flexBasis = `${100 / document.querySelectorAll('.day-list-item__desktop-wrapper ul').length}%`;
                        });
                    } else {
                        document.getElementById(item.textContent).parentElement.remove();
                    }
                }
            });
        });
    });
}

function createManageList() {
    const manageList = document.createElement('ul');
    manageList.classList.add('manage-list');
    const addTitle = document.createElement('h1');
    addTitle.classList.add('manage-list__title', 'manage-list__add-title');
    addTitle.textContent = 'add';
    const deleteTitle = document.createElement('h1');
    deleteTitle.classList.add('manage-list__title');
    deleteTitle.textContent = 'delete';
    const addWrapper = document.createElement('div');
    addWrapper.classList.add('manage-list__add-wrapper');
    const addInput = document.createElement('input');
    addInput.classList.add('manage-list__add-input');
    const addButton = document.createElement('button');
    addButton.classList.add('manage-list__add-button');
    addButton.textContent = 'plus';
    const amountWarning = document.createElement('p');
    amountWarning.classList.add('manage-list__amount-warning');
    amountWarning.textContent = 'amount of weekdays must be no more than 7, input field must be not empty';

    manageList.addEventListener('mousedown', () => {
        const moveAt = evt => {
            manageList.style.cssText = `top: ${evt.pageY - (manageList.offsetHeight / 2)}px; left: ${evt.pageX - (manageList.offsetWidth / 2)}px`;
            if (document.querySelector('.edit-time-wrapper')) {
                document.querySelector('.edit-time-wrapper').style.cssText = `position: absolute; left: ${manageList.offsetLeft}px;
                top: ${manageList.offsetTop + manageList.offsetHeight + 10}px`;
            }
        }
        manageList.addEventListener('mousemove', moveAt);
        manageList.addEventListener('mouseup', () => {
            manageList.removeEventListener('mousemove', moveAt);
        });
    });

    manageList.addEventListener('touchmove', (event) => {
        event.preventDefault();
        manageList.style.top = `${event.touches[0].pageY - (manageList.offsetHeight / 2)}px`;
        manageList.style.left = `${event.touches[0].pageX - (manageList.offsetWidth / 2)}px`;
        if (document.querySelector('.edit-time-wrapper')) {
            document.querySelector('.edit-time-wrapper').style.cssText = `position: absolute; left: ${manageList.offsetLeft}px;
            top: ${manageList.offsetTop + manageList.offsetHeight + 10}px`;
        }
    });

    for (let i = 0; i < Object.keys(JSON.parse(localStorage.getItem('subjects'))).length; ++i) {
        const li = document.createElement('li');
        li.classList.add('manage-list__list-item');
        li.textContent = Object.keys(JSON.parse(localStorage.getItem('subjects')))[i];
        manageList.append(li);
    }

    return {
        manageList, addTitle, deleteTitle, amountWarning, addInput, addButton, addWrapper
    };
}

function switchTheme() {
    const selects = [document.getElementById('switch-theme-desktop'), document.getElementById('switch-theme-mobile')];

    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'purple-theme');
    else {
        document.getElementById('theme-link').href = `css/themes/${localStorage.getItem('theme')}.css`;
        document.getElementById('favicon-apple-icon').href = `favicons/${localStorage.getItem('theme').split('-')[0]}-icon/apple-touch-icon.png`;
        document.getElementById('favicon-icon').href = `favicons/${localStorage.getItem('theme').split('-')[0]}-icon/favicon-32x32.png`;
        document.getElementById('favicon-manifest').href = `favicons/${localStorage.getItem('theme').split('-')[0]}-icon/site.webmanifest`;
    }

    selects.forEach(select => {
        select.addEventListener('change', () => {
            localStorage.setItem('theme', select.value);
            document.getElementById('theme-link').href = `css/themes/${select.value}.css`; document.getElementById('favicon-apple-icon').href = `favicons/${localStorage.getItem('theme').split('-')[0]}-icon/apple-touch-icon.png`;
            document.getElementById('favicon-icon').href = `favicons/${localStorage.getItem('theme').split('-')[0]}-icon/favicon-32x32.png`;
            document.getElementById('favicon-manifest').href = `favicons/${localStorage.getItem('theme').split('-')[0]}-icon/site.webmanifest`;
        });
    });
}