document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        tran.setLang(selectedLang);
    });
});


var tran = new Translater({
    lang: "en"
});


const proModeButton = document.getElementById('proModeButton');
const proModeElements = document.querySelectorAll('.promode');
const proModeiElements = document.querySelectorAll('.promode-inline');
showOrHide();

proModeButton.addEventListener('click', function() {
    showOrHide();
});


function showOrHide() {
    proModeElements.forEach(function(element) {
        if (element.style.opacity === '0') {
            element.style.opacity = '1';

        } else {
            element.style.opacity = '0';

        }
    });


    proModeiElements.forEach(function(element) {
        if (element.style.visibility === 'hidden') {
            element.style.visibility = 'visible';
            element.style.opacity = '0';
            setTimeout(function() {
                element.style.opacity = '1';
            }, 300);
        } else {
            element.style.opacity = '0';
            setTimeout(function() {
                element.style.visibility = 'hidden';
            }, 300);
        }
    });
}

function isMobile() {
    const mobileThreshold = 1144;
    return window.innerWidth <= mobileThreshold;
}


//defilement aimanté
if (!isMobile()) {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('containerglobal');
        const sections = document.querySelectorAll('.section');

        let isScrolling = false;
        const firstH1 = sections[0].querySelector('h1');
        if (firstH1) {
            firstH1.classList.add('visible');
        }
        container.addEventListener('scroll', () => {
            if (!isScrolling) {
                isScrolling = true;
                setTimeout(() => {
                    snapScroll();
                    isScrolling = false;
                }, 250); 
            }
        });

        function snapScroll() {
            const scrollPosition = container.scrollTop;
            let closestSection = sections[0];
            let minDistance = Math.abs(scrollPosition - closestSection.offsetTop);

            sections.forEach(section => {
                const distance = Math.abs(scrollPosition - section.offsetTop);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section;
                }
            });

            container.scrollTo({
                top: closestSection.offsetTop,
                behavior: 'smooth'
            });
            sections.forEach(section => {
                const h1 = section.querySelector('h1');
                if (section === closestSection) {
                    h1.classList.add('visible');
                } else {
                    h1.classList.remove('visible');
                }
            });
        }
    });
}


//slider defi
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('#definav h3');
    const slides = document.querySelectorAll('.sliderdefi .slide');

    navItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        });
    });

    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
});
