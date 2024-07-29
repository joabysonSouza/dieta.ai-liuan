





document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('butaoTeste');

    if (button) {
        button.addEventListener('click', function() {
            console.log('clicou');
        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("nav button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
  
  function countNumber() {
      const textecount = document.querySelectorAll(".count");
  
      let index = 10;
  
      function startCounting() {
          const interval = setInterval(() => {
              if (index <= 5000) {
                  textecount.forEach(element => {
                      element.textContent = index;
                  });
                  index++;
              } else {
                  clearInterval(interval);
              }
          }, 10);
      }
  
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  startCounting();
                  observer.unobserve(entry.target); 
              }
          });
      });
  
      textecount.forEach(element => {
          observer.observe(element);
      });
  }
  
  
  countNumber();
  

