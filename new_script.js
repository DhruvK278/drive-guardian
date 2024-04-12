document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.querySelector('.overlay');
    var acceptButton = document.getElementById('acceptButton');

    acceptButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});

const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush1 = document.querySelector('.bush1')
const bush2 = document.querySelector('.bush2')
const upload = document.querySelector('.upload')
const stream = document.querySelector('.stream')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    const scaleExpo = Math.pow(1.0009, value);
    const initialScale = 0.5;
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = value *0.2 + 'px'
    leaf1.style.transform = `scale(${scaleExpo})`;

    leaf2.style.marginRight = value *0.2 + 'px'
    leaf2.style.transform = `scale(${scaleExpo})`;

    bush1.style.marginTop = -value * 1.3 + 'px'
    bush1.style.transform = `scale(${scaleExpo})`;
    
    bush2.style.marginTop = -value * 1.3 + 'px'
    bush2.style.transform = `scale(${scaleExpo})`;

    const slantDistance = value * 0.3;
    const maxScroll = 5000;
    const scaleAntiLog = 1 - Math.pow(value / maxScroll, 0.4);
    const scaleLog = 1 + Math.pow(value / maxScroll, 0.4);
    initialScale + (1 - initialScale) * (Math.log(scrollY + 1) / Math.log(maxScroll + 1));

    upload.style.transform = `translate(${slantDistance}px, -${slantDistance}px) scale(${scaleAntiLog})`;
    stream.style.transform = `translate(${slantDistance}px, ${slantDistance}px) scale(${scaleLog})`;
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });
    updateActiveLink(currentSection);
});

function updateActiveLink(currentSection) {
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}