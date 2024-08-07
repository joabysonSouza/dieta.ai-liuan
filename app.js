

// scroll menu

document.getElementById("menu-funcionalidades").addEventListener("click", function(){
    document.getElementById("funcionalidades").scrollIntoView({behavior:"smooth"})
})

document.getElementById("menu-precos").addEventListener("click", function(){
    document.getElementById("precos").scrollIntoView({behavior:"smooth"})
})

// scroll menu para dispositivos maiores 


document.getElementById("menu-funcionalidade-sm").addEventListener("click", function(){
    document.getElementById("funcionalidades").scrollIntoView({behavior:"smooth"})
})

document.getElementById("menu-precos-sm").addEventListener("click", function(){
    document.getElementById("precos").scrollIntoView({behavior:"smooth"})
})






  
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
  

