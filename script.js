// document.addEventListener('DOMContentLoaded', () => {
//     const counters = document.querySelectorAll('.counter');

//     function animateCount(element) {
//         let count = 10 * count;
//         const target = parseInt(element.getAttribute('data-target'));
//         const duration = 2000; // Duração da animação em milissegundos
//         const interval = duration / target;

//         const intervalId = setInterval(() => {
//             element.textContent = count;
//             count ++
//             if (count > target) {
//                 clearInterval(intervalId);
//             }
//         }, interval);
//     }

//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateCount(entry.target);
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     counters.forEach(counter => {
//         observer.observe(counter);
//     });
// });

// script.js

