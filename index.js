const elements = document.querySelectorAll('[data-i18n]');
const nav = document.querySelectorAll('a[href^="#"]');
const theme = document.querySelectorAll('[data-theme]')
const body = document.querySelector('body')
const header = document.querySelector('#header')
const footer = document.querySelector('#footer')
const skills1 = document.querySelector('#skills-1')
const skills2 = document.querySelector('#skills-2')
const skills3 = document.querySelector('#skills-3')
const skills4 = document.querySelector('#skills-4')
const skills5 = document.querySelector('#skills-5')
const skills6 = document.querySelector('#skills-6')
const skillsElements = [skills1, skills2, skills3, skills4, skills5, skills6];
const portfolio1 = document.querySelector('#portfolio1')
const portfolio2 = document.querySelector('#portfolio2')
const portfolio3 = document.querySelector('#portfolio3')
const portfolio4 = document.querySelector('#portfolio4')
const portfolio5 = document.querySelector('#portfolio5')
const portfolio6 = document.querySelector('#portfolio6')
const portfolioElements = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6]
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btnElements = [btn1, btn2]
const section1 = document.querySelector('#section1')

const toggleicone = {
    night: `<svg class="moon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                data-sentry-element="svg" data-sentry-component="Moon"
                                data-sentry-source-file="Moon.tsx">
                                <path
                                    d="M19.2827 7.10938C20.0675 8.81309 20.3114 10.7164 19.9814 12.563C19.6513 14.4095 18.7633 16.1105 17.4369 17.4369C16.1105 18.7633 14.4095 19.6513 12.563 19.9814C10.7164 20.3114 8.81309 20.0675 7.10938 19.2827C8.1228 23.8461 12.1938 27.2575 17.0621 27.2575C22.693 27.2575 27.2575 22.693 27.2575 17.0621C27.2575 12.1938 23.8461 8.1228 19.2827 7.10938Z"
                                    fill="#5E6C84" data-sentry-element="path" data-sentry-source-file="Moon.tsx"></path>
                                <path
                                    d="M7.90268 5.11929C7.90268 4.99359 7.82367 4.74219 7.50762 4.74219C7.19157 4.74219 7.11256 4.99359 7.11256 5.11929C7.11256 5.7478 6.7175 7.00481 5.13725 7.00481C5.00556 7.00481 4.74219 7.08023 4.74219 7.38192C4.74219 7.6836 5.00556 7.75902 5.13725 7.75902C5.79569 7.82187 7.11256 8.28697 7.11256 9.64454C7.11256 9.77025 7.19157 10.0216 7.50762 10.0216C7.82367 10.0216 7.90268 9.77025 7.90268 9.64454C7.90268 8.13613 9.35124 7.75902 9.87799 7.75902C10.0097 7.75902 10.2731 7.6836 10.2731 7.38192C10.2731 7.08023 10.0097 7.00481 9.87799 7.00481C8.29774 7.00481 7.90268 5.7478 7.90268 5.11929Z"
                                    fill="#5E6C84" data-sentry-element="path" data-sentry-source-file="Moon.tsx"></path>
                                <path
                                    d="M13.0385 9.64454C13.0385 9.51884 13.1175 9.26744 13.4335 9.26744C13.7496 9.26744 13.8286 9.51884 13.8286 9.64454C13.8286 10.0216 14.0656 10.7759 15.0138 10.7759C15.1455 10.7759 15.4089 10.8513 15.4089 11.153C15.4089 11.4546 15.1455 11.5301 15.0138 11.5301C14.6187 11.5301 13.8286 11.7563 13.8286 12.6614C13.8286 12.7871 13.7496 13.0385 13.4335 13.0385C13.1175 13.0385 13.0385 12.7871 13.0385 12.6614C13.0385 12.2843 12.8014 11.5301 11.8533 11.5301C11.7216 11.5301 11.4582 11.4546 11.4582 11.153C11.4582 10.8513 11.7216 10.7759 11.8533 10.7759C12.2484 10.7759 13.0385 10.5496 13.0385 9.64454Z"
                                    fill="#5E6C84" data-sentry-element="path" data-sentry-source-file="Moon.tsx"></path>
                            </svg>
                       `,
    light: `<svg class="rAflUG Dm2XIb" width="32" height="32" viewBox="0 0 32 32" fill="none"
        data-sentry-element="svg" data-sentry-component="Sun" data-sentry-source-file="Sun.tsx">
        <path
            d="M23.3958 15.806C23.3958 19.7848 20.1704 23.0102 16.1916 23.0102C12.2128 23.0102 8.98738 19.7848 8.98738 15.806C8.98738 11.8272 12.2128 8.60178 16.1916 8.60178C20.1704 8.60178 23.3958 11.8272 23.3958 15.806Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M15.2181 3.34464C15.2181 2.80696 15.6539 2.37109 16.1916 2.37109C16.7293 2.37109 17.1652 2.80696 17.1652 3.34464V4.51289C17.1652 5.05057 16.7293 5.48644 16.1916 5.48644C15.6539 5.48644 15.2181 5.05057 15.2181 4.51289V3.34464Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M15.2181 27.4886C15.2181 26.9509 15.6539 26.515 16.1916 26.515C16.7293 26.515 17.1652 26.9509 17.1652 27.4886V28.6568C17.1652 29.1945 16.7293 29.6304 16.1916 29.6304C15.6539 29.6304 15.2181 29.1945 15.2181 28.6568V27.4886Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M6.39501 7.59483C6.01482 7.21464 6.01482 6.59822 6.39501 6.21803C6.77521 5.83784 7.39162 5.83784 7.77181 6.21803L8.59789 7.04411C8.97809 7.4243 8.97809 8.04072 8.59789 8.42091C8.2177 8.8011 7.60129 8.8011 7.22109 8.42091L6.39501 7.59483Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M23.7713 24.9712C23.3911 24.591 23.3911 23.9746 23.7713 23.5944C24.1515 23.2142 24.7679 23.2142 25.1481 23.5944L25.9742 24.4205C26.3544 24.8006 26.3544 25.4171 25.9742 25.7973C25.594 26.1774 24.9776 26.1774 24.5974 25.7973L23.7713 24.9712Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M8.79258 24.9712C9.17278 24.591 9.17278 23.9746 8.79258 23.5944C8.41239 23.2142 7.79598 23.2142 7.41578 23.5944L6.5897 24.4205C6.20951 24.8006 6.20951 25.4171 6.5897 25.7973C6.9699 26.1774 7.58631 26.1774 7.9665 25.7973L8.79258 24.9712Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M25.9742 7.59483C26.3544 7.21464 26.3544 6.59822 25.9742 6.21803C25.594 5.83784 24.9776 5.83784 24.5974 6.21803L23.7713 7.04411C23.3911 7.4243 23.3911 8.04072 23.7713 8.42091C24.1515 8.8011 24.7679 8.8011 25.1481 8.42091L25.9742 7.59483Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M3.34073 16.7796C2.80306 16.7796 2.36719 16.3437 2.36719 15.806C2.36719 15.2683 2.80306 14.8325 3.34073 14.8325H4.50899C5.04666 14.8325 5.48253 15.2683 5.48253 15.806C5.48253 16.3437 5.04666 16.7796 4.50899 16.7796H3.34073Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
        <path
            d="M27.4846 16.7796C26.947 16.7796 26.5111 16.3437 26.5111 15.806C26.5111 15.2683 26.947 14.8325 27.4846 14.8325H28.6529C29.1906 14.8325 29.6264 15.2683 29.6264 15.806C29.6264 16.3437 29.1906 16.7796 28.6529 16.7796H27.4846Z"
            fill="#83888F" data-sentry-element="path" data-sentry-source-file="Sun.tsx"></path>
    </svg>`}

const translations = {
    fa: {
        Discription: "توضیحات",
        Skills: "مهارت‌ها",
        Home: "خانه",
        btn: "ENG",
        name: "محمد مسگرزاده هستم",
        info: "توسعه‌دهنده فرانت‌اند و متخصص پیاده‌سازی رابط‌های کاربری مدرن و تعاملی",
        Request: "درخواست همکاری",
        resume: "دریافت فایل رزومه",
        Services: "خدمات قابل ارائه",
        Portfolio: "نمونه کارها",
        Introduction: "به‌عنوان یک فرانت‌اند دولوپر، متخصص در پیاده‌سازی دقیق و بهینه‌ی رابط‌های کاربری هستم و با تکیه بر HTML، CSS و JavaScript تجربه‌های تعاملی، سریع و استاندارد ارائه می‌دهم. معماری ظریف UI، مدیریت جزئیات پیکسلی، طراحی واکنش‌گرا و رعایت اصول دسترس‌پذیری از اولویت‌های کاری من است. همواره تلاش می‌کنم کدی ساختارمند، مقیاس‌پذیر و قابل نگه‌داری تولید کنم و با رویکردی مبتنی بر بهترین روش‌های توسعه، طراحی‌ها را به محصولی واقعی، روان و کاربرمحور تبدیل کنم.",
        email: 'ایمیل'
    },
    en: {
        about: "about",
        Discription: "Discription",
        Skills: "Skills",
        Home: "Home",
        btn: "FA",
        name: "I am Mohammad Mesgarzadeh",
        info: "Frontend Developer and Specialist in Implementing Modern and Interactive User Interfaces",
        Request: "Request for cooperation",
        resume: "Download resume file",
        Services: "Services available",
        Portfolio: "Portfolio",
        Introduction: "As a frontend developer, I specialize in the precise and optimized implementation of user interfaces. Leveraging HTML, CSS, and JavaScript, I deliver interactive, fast, and standard experiences. My priorities include elegant UI architecture, meticulous pixel-level detail management, responsive design, and adherence to accessibility principles. I consistently strive to produce well-structured, scalable, and maintainable code, transforming designs into genuine, fluid, and user-centric products through a development approach grounded in best practices.",
        email: "email"
    }
}

let currentLanguage = 'fa';
let currentTheme = 'night';

function toggleNightMode() {
    currentTheme = currentTheme === 'night' ? 'light' : 'night'
    updatetheme();
}
function updatetheme() {
    theme.forEach(element => {
        if (toggleicone[currentTheme])
            element.innerHTML = toggleicone[currentTheme]


        if (currentTheme === 'night') {
            body.style.background = 'white';
            header.style.background = '#6aa4b8';
            footer.style.background = '#454545';
            body.style.color = 'black';


        } else {
            body.style.background = '#101828';
            header.style.background = '#4a7a8c';
            footer.style.background = '#364153';
            body.style.color = 'white';
            

        }
        skillsElements.forEach(skill => {
            skill.style.background = (currentTheme === 'night') ? 'white' : '#1d293d';
        });

        portfolioElements.forEach(Portfolio => {
            Portfolio.style.background = (currentTheme === 'night') ? 'white' : '#1d293d';

        })
        btnElements.forEach(Portfolio => {
            Portfolio.style.background = (currentTheme === 'night') ? '#3b82f6' : '#1e40af';

        })

    })
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fa' ? 'en' : 'fa';
    updateContent();
}

function updateContent() {

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }

        if (currentLanguage === 'fa') {
            element.style.direction = 'rtl';
            element.style.textAlign = 'right';
        } else {
            element.style.direction = 'ltr';
            element.style.textAlign = 'left';
        }
    });

}

nav.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'

            });
        }
    });
});

