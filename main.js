                  /* Menu Mobile */

                  const menuBtn = document.querySelector(".mobile-menu");
                  const navigation = document.querySelector(".navigator ");
                  
                  
                  menuBtn.addEventListener("click", () => {
                    menuBtn.classList.toggle("active"); 
                    navigation.classList.toggle("active");
                  }); 
                  
                  
                  
                  
                  
                  /* Transitor de wallpapers */
                  
                  const btns = document.querySelectorAll(".nav-btn");
                  const slides = document.querySelectorAll(".Wallpapers");
                  const contents = document.querySelectorAll(".content");
                  
                  var sliderNav = function(manual) {
                    btns.forEach((btn) => {
                      btn.classList.remove("active");
                    });
                    
                  
                    slides.forEach((Wallpapers) => {
                      Wallpapers.classList.remove("active");
                    });
                  
                  
                    contents.forEach((content) => {
                      content.classList.remove("active");
                    });
                    
                    btns[manual].classList.add("active");
                    
                    slides[manual].classList.add("active");
                  
                    contents[manual].classList.add("active");
                  }
                  
                  btns.forEach((btn, i) => {
                      btn.addEventListener("click", () => {
                        sliderNav(i);
                      });
                  });
                  
                  
                  