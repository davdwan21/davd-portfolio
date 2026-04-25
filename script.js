let currentPage = 1;
let activePanel = null;
let activePanel3 = null;

function showPanel(idx) {
    const panels = document.querySelectorAll('.option-panel');
    const items = document.querySelectorAll('.option-item');
    if (activePanel === idx) return;

    if (activePanel !== null) {
        const prev = activePanel;
        panels[prev].classList.remove('panel-active');
        panels[prev].classList.add('panel-exiting');
        panels[prev].addEventListener('transitionend', function cleanup() {
            panels[prev].classList.remove('panel-exiting');
            panels[prev].removeEventListener('transitionend', cleanup);
        });
        items[prev].classList.remove('active');
    }

    activePanel = idx;
    panels[idx].classList.remove('panel-exiting');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            panels[idx].classList.add('panel-active');
            items[idx].classList.add('active');
        });
    });
}

function hideActivePanel() {
    if (activePanel === null) return;
    const panels = document.querySelectorAll('.option-panel');
    const items = document.querySelectorAll('.option-item');
    const prev = activePanel;
    activePanel = null;
    panels[prev].classList.remove('panel-active');
    panels[prev].classList.add('panel-exiting');
    panels[prev].addEventListener('transitionend', function cleanup() {
        panels[prev].classList.remove('panel-exiting');
        panels[prev].removeEventListener('transitionend', cleanup);
    });
    items[prev].classList.remove('active');
}

function resetPanels() {
    document.querySelectorAll('.option-panel').forEach(p => {
        p.classList.remove('panel-active', 'panel-exiting');
    });
    document.querySelectorAll('.option-item').forEach(i => i.classList.remove('active'));
    activePanel = null;
}

document.querySelectorAll('.option-item').forEach((item, idx) => {
    item.addEventListener('click', () => {
        if (currentPage !== 2) return;
        showPanel(idx);
    });
});

function showPanel3(idx) {
    const panels = document.querySelectorAll('.option-panel-p3');
    const items = document.querySelectorAll('.option-item-p3');
    if (activePanel3 === idx) return;

    if (activePanel3 !== null) {
        const prev = activePanel3;
        panels[prev].classList.remove('panel-active');
        panels[prev].classList.add('panel-exiting');
        panels[prev].addEventListener('transitionend', function cleanup() {
            panels[prev].classList.remove('panel-exiting');
            panels[prev].removeEventListener('transitionend', cleanup);
        });
        items[prev].classList.remove('active');
    }

    activePanel3 = idx;
    panels[idx].classList.remove('panel-exiting');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            panels[idx].classList.add('panel-active');
            items[idx].classList.add('active');
        });
    });
}

function hideActivePanel3() {
    if (activePanel3 === null) return;
    const panels = document.querySelectorAll('.option-panel-p3');
    const items = document.querySelectorAll('.option-item-p3');
    const prev = activePanel3;
    activePanel3 = null;
    panels[prev].classList.remove('panel-active');
    panels[prev].classList.add('panel-exiting');
    panels[prev].addEventListener('transitionend', function cleanup() {
        panels[prev].classList.remove('panel-exiting');
        panels[prev].removeEventListener('transitionend', cleanup);
    });
    items[prev].classList.remove('active');
}

function resetPanels3() {
    document.querySelectorAll('.option-panel-p3').forEach(p => {
        p.classList.remove('panel-active', 'panel-exiting');
    });
    document.querySelectorAll('.option-item-p3').forEach(i => i.classList.remove('active'));
    activePanel3 = null;
}

document.querySelectorAll('.option-item-p3').forEach((item, idx) => {
    item.addEventListener('click', () => {
        if (currentPage !== 3) return;
        showPanel3(idx);
    });
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("page").classList.add("open");
    }, 50);
});

fetch("ascii/house.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("ascii-art-1").textContent = data;
    });
fetch("ascii/desk.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("ascii-art-2").textContent = data;
    });
fetch("ascii/teaset.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("ascii-art-3").textContent = data;
    });

// Page 1 → Page 2
document.querySelector('.ascii-box').addEventListener('click', function () {
    if (currentPage !== 1) return;
    const introBox = document.querySelector('.intro-box');
    const asciiBox = document.querySelector('.ascii-box');
    const introBox2 = document.querySelector('.intro-box-2');
    const asciiBox2 = document.querySelector('.ascii-box-2');

    introBox.classList.remove('slide-in-left');
    asciiBox.classList.remove('slide-in-right');
    void introBox.offsetWidth;
    introBox.classList.add('slide-out-left');
    asciiBox.classList.add('slide-out-right');

    setTimeout(() => {
        introBox2.style.pointerEvents = '';
        introBox2.classList.add('slide-in');
        asciiBox2.classList.add('slide-in');
        const backArrowEl = document.getElementById('back-arrow');
        backArrowEl.classList.remove('slide-out');
        void backArrowEl.offsetWidth;
        backArrowEl.classList.add('slide-in');
        backArrowEl.addEventListener('animationend', function onSlideIn() {
            backArrowEl.classList.remove('slide-in');
            backArrowEl.classList.add('visible');
            backArrowEl.removeEventListener('animationend', onSlideIn);
        });
        const nextArrowEl = document.getElementById('next-arrow');
        nextArrowEl.classList.remove('slide-out');
        void nextArrowEl.offsetWidth;
        nextArrowEl.classList.add('slide-in');
        nextArrowEl.addEventListener('animationend', function onSlideIn() {
            nextArrowEl.classList.remove('slide-in');
            nextArrowEl.classList.add('visible');
            nextArrowEl.removeEventListener('animationend', onSlideIn);
        });
        currentPage = 2;
    }, 1500);
});

// Page 2 → Page 3
document.getElementById('next-arrow').addEventListener('click', function () {
    if (currentPage !== 2) return;
    hideActivePanel();
    const introBox2 = document.querySelector('.intro-box-2');
    const asciiBox2 = document.querySelector('.ascii-box-2');
    const introBox3 = document.querySelector('.intro-box-3');
    const asciiBox3 = document.querySelector('.ascii-box-3');
    const nextArrow = document.getElementById('next-arrow');

    nextArrow.classList.remove('slide-in', 'visible');
    void nextArrow.offsetWidth;
    nextArrow.classList.add('slide-out');
    const backArrow2to3 = document.getElementById('back-arrow');
    backArrow2to3.classList.remove('slide-in', 'visible');
    void backArrow2to3.offsetWidth;
    backArrow2to3.classList.add('slide-out');
    introBox2.classList.add('slide-out-left');

    asciiBox2.style.animation = 'none';
    asciiBox2.style.transform = 'translate(0, 0)';
    asciiBox2.style.opacity = '1';
    void asciiBox2.offsetWidth;
    asciiBox2.style.animation = '';
    asciiBox2.classList.remove('slide-in');
    asciiBox2.classList.add('slide-out-bottom-right');

    setTimeout(() => {
        introBox3.style.opacity = '';
        introBox3.style.transform = '';
        introBox3.style.pointerEvents = '';
        void introBox3.offsetWidth;
        introBox3.classList.add('slide-in');
        asciiBox3.classList.add('slide-in');
        backArrow2to3.classList.remove('slide-out');
        void backArrow2to3.offsetWidth;
        backArrow2to3.classList.add('slide-in');
        backArrow2to3.addEventListener('animationend', function onSlideIn() {
            backArrow2to3.classList.remove('slide-in');
            backArrow2to3.classList.add('visible');
            backArrow2to3.removeEventListener('animationend', onSlideIn);
        });
        currentPage = 3;
    }, 1500);
});

// Back arrow — page-aware
document.getElementById('back-arrow').addEventListener('click', function () {
    if (currentPage === 2) {
        // Page 2 → Page 1
        hideActivePanel();
        const introBox = document.querySelector('.intro-box');
        const asciiBox = document.querySelector('.ascii-box');
        const introBox2 = document.querySelector('.intro-box-2');
        const asciiBox2 = document.querySelector('.ascii-box-2');
        const backArrow = document.getElementById('back-arrow');
        const nextArrow = document.getElementById('next-arrow');

        backArrow.classList.remove('slide-in', 'visible');
        void backArrow.offsetWidth;
        backArrow.classList.add('slide-out');
        nextArrow.classList.remove('slide-in', 'visible');
        void nextArrow.offsetWidth;
        nextArrow.classList.add('slide-out');
        introBox2.classList.add('slide-out-left');

        asciiBox2.style.animation = 'none';
        asciiBox2.style.transform = 'translate(0, 0)';
        asciiBox2.style.opacity = '1';
        void asciiBox2.offsetWidth;
        asciiBox2.style.animation = '';
        asciiBox2.classList.remove('slide-in');
        asciiBox2.classList.add('slide-out-bottom-right');

        setTimeout(() => {
            introBox.style.animation = 'none';
            introBox.style.opacity = '0';
            introBox.style.transform = 'translateX(-100%)';
            introBox.classList.remove('slide-out-left');
            void introBox.offsetWidth;
            introBox.style.animation = '';
            introBox.style.opacity = '';
            introBox.style.transform = '';
            introBox.classList.add('slide-in-left');

            asciiBox.style.animation = 'none';
            asciiBox.style.opacity = '0';
            asciiBox.style.transform = 'translateX(100%)';
            asciiBox.classList.remove('slide-out-right');
            void asciiBox.offsetWidth;
            asciiBox.style.animation = '';
            asciiBox.style.opacity = '';
            asciiBox.style.transform = '';
            asciiBox.classList.add('slide-in-right');

            introBox2.classList.remove('slide-in', 'slide-out-left');
            introBox2.style.opacity = '0';
            introBox2.style.transform = 'translateX(-100%)';
            introBox2.style.pointerEvents = 'none';
            asciiBox2.classList.remove('slide-in', 'slide-out-bottom-right');
            asciiBox2.style.animation = '';
            asciiBox2.style.opacity = '';
            asciiBox2.style.transform = '';
            nextArrow.classList.remove('slide-in', 'slide-out', 'visible');
            backArrow.classList.remove('slide-in', 'slide-out', 'visible');
            currentPage = 1;
        }, 1500);

    } else if (currentPage === 3) {
        // Page 3 → Page 2
        hideActivePanel3();
        const introBox2 = document.querySelector('.intro-box-2');
        const asciiBox2 = document.querySelector('.ascii-box-2');
        const introBox3 = document.querySelector('.intro-box-3');
        const asciiBox3 = document.querySelector('.ascii-box-3');
        const nextArrow = document.getElementById('next-arrow');
        const backArrow3to2 = document.getElementById('back-arrow');

        backArrow3to2.classList.remove('slide-in', 'visible');
        void backArrow3to2.offsetWidth;
        backArrow3to2.classList.add('slide-out');
        introBox3.classList.add('slide-out-left');

        asciiBox3.style.animation = 'none';
        asciiBox3.style.transform = 'translate(0, 0)';
        asciiBox3.style.opacity = '1';
        void asciiBox3.offsetWidth;
        asciiBox3.style.animation = '';
        asciiBox3.classList.remove('slide-in');
        asciiBox3.classList.add('slide-out-bottom-right');

        setTimeout(() => {
            introBox2.classList.remove('slide-in', 'slide-out-left');
            introBox2.style.opacity = '0';
            introBox2.style.transform = 'translateX(-100%)';
            introBox2.style.pointerEvents = '';
            void introBox2.offsetWidth;
            introBox2.style.opacity = '';
            introBox2.style.transform = '';
            introBox2.classList.add('slide-in');
            resetPanels();

            asciiBox2.style.animation = 'none';
            asciiBox2.style.opacity = '0';
            asciiBox2.style.transform = 'translate(100%, 100%)';
            asciiBox2.classList.remove('slide-in', 'slide-out-bottom-right');
            void asciiBox2.offsetWidth;
            asciiBox2.style.animation = '';
            asciiBox2.style.opacity = '';
            asciiBox2.style.transform = '';
            asciiBox2.classList.add('slide-in');

            introBox3.classList.remove('slide-in', 'slide-out-left');
            introBox3.style.opacity = '0';
            introBox3.style.transform = 'translateX(-100%)';
            introBox3.style.pointerEvents = 'none';
            asciiBox3.classList.remove('slide-in', 'slide-out-bottom-right');
            asciiBox3.style.animation = '';
            asciiBox3.style.opacity = '';
            asciiBox3.style.transform = '';
            resetPanels3();

            nextArrow.classList.remove('slide-out');
            void nextArrow.offsetWidth;
            nextArrow.classList.add('slide-in');
            nextArrow.addEventListener('animationend', function onSlideIn() {
                nextArrow.classList.remove('slide-in');
                nextArrow.classList.add('visible');
                nextArrow.removeEventListener('animationend', onSlideIn);
            });
            backArrow3to2.classList.remove('slide-out');
            void backArrow3to2.offsetWidth;
            backArrow3to2.classList.add('slide-in');
            backArrow3to2.addEventListener('animationend', function onSlideIn() {
                backArrow3to2.classList.remove('slide-in');
                backArrow3to2.classList.add('visible');
                backArrow3to2.removeEventListener('animationend', onSlideIn);
            });
            currentPage = 2;
        }, 1500);
    }
});

(function () {
    const container = document.getElementById('starfield');
    const starChars = ['.', '*', '+', '·', '⋆', '✦'];
    const numStars = 55;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('span');
        star.textContent = starChars[Math.floor(Math.random() * starChars.length)];
        star.style.cssText = [
            'position:absolute',
            'left:' + (Math.random() * 98 + 1) + '%',
            'top:' + (Math.random() * 98 + 1) + '%',
            'color:rgba(222,222,222,' + (Math.random() * 0.45 + 0.1) + ')',
            'font-size:' + (Math.random() * 7 + 5) + 'px',
            'font-family:monospace',
            'pointer-events:none',
            'user-select:none'
        ].join(';');
        container.appendChild(star);
    }

    const planets = [
        [' .--. ', '(  o  )', ' `--\' '],
        ['  ___  ', ' /   \\ ', '| ( ) |', ' \\___/ '],
        [' .-""-. ', '/ (()) \\', '\\      /', ' `----\' ']
    ];

    const positions = [
        { left: '6%', top: '12%' },
        { left: '80%', top: '58%' },
        { left: '72%', top: '8%' }
    ];

    planets.forEach(function (lines, idx) {
        const pre = document.createElement('pre');
        pre.textContent = lines.join('\n');
        pre.style.cssText = [
            'position:absolute',
            'left:' + positions[idx].left,
            'top:' + positions[idx].top,
            'color:rgba(222,222,222,0.36)',
            'font-size:12px',
            'font-family:monospace',
            'margin:0',
            'line-height:1.3',
            'pointer-events:none',
            'user-select:none'
        ].join(';');
        container.appendChild(pre);
    });
})();
