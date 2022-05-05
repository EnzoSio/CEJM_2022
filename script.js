      const drop_btn = document.querySelector(".drop-btn span");
         const tooltip = document.querySelector(".tooltip");
         const menu_wrapper = document.querySelector(".wrapper");
         const menu_bar = document.querySelector(".menu-bar");





        //Commande
         const menu_th1 = document.querySelector(".menuth1");
         const menu_th2 = document.querySelector(".menuth2");
         const menu_th3 = document.querySelector(".menuth3");
         const menu_th4 = document.querySelector(".menuth4");
         const menu_th5 = document.querySelector(".menuth5");
         const menu_th6 = document.querySelector(".menuth6");


         const theme1 = document.querySelector(".theme1");
         const theme2 = document.querySelector(".theme2");
         const theme3 = document.querySelector(".theme3");
         const theme4 = document.querySelector(".theme4");
         const theme5 = document.querySelector(".theme5");
         const theme6 = document.querySelector(".theme6");


         //Bouton de retour
         const retourth1 = document.querySelector(".retourth1");
         const retourth2 = document.querySelector(".retourth2");
         const retourth3 = document.querySelector(".retourth3");
         const retourth4 = document.querySelector(".retourth4");
         const retourth5 = document.querySelector(".retourth5");
         const retourth6 = document.querySelector(".retourth6");






           drop_btn.onclick = (()=>{
             menu_wrapper.classList.toggle("show");
             tooltip.classList.toggle("show");
           });


           theme1.onclick = (()=>{
             menu_bar.style.marginLeft = "-400px";
             setTimeout(()=>{
               menu_th1.style.display = "block";
             }, 100);
           });
           theme2.onclick = (()=>{
             menu_bar.style.marginLeft = "-400px";
             setTimeout(()=>{
               menu_th2.style.display = "block";
             }, 100);
           });
           theme3.onclick = (()=>{
            menu_bar.style.marginLeft = "-400px";
            setTimeout(()=>{
              menu_th3.style.display = "block";
            }, 100);
          });
          theme4.onclick = (()=>{
            menu_bar.style.marginLeft = "-400px";
            setTimeout(()=>{
              menu_th4.style.display = "block";
            }, 100);
          });

          theme5.onclick = (()=>{
            menu_bar.style.marginLeft = "-400px";
            setTimeout(()=>{
              menu_th5.style.display = "block";
            }, 100);
          });
          theme6.onclick = (()=>{
            menu_bar.style.marginLeft = "-400px";
            setTimeout(()=>{
              menu_th6.style.display = "block";
            }, 100);
          });



           retourth1.onclick = (()=>{
             menu_th1.style.display = "none";
             menu_bar.style.marginLeft = "0px";
           });
           retourth2.onclick = (()=>{
             menu_th2.style.display = "none";
             menu_bar.style.marginLeft = "0px";
           });
           retourth3.onclick = (()=>{
            menu_th3.style.display = "none";
            menu_bar.style.marginLeft = "0px";
          });
          retourth4.onclick = (()=>{
            menu_th4.style.display = "none";
            menu_bar.style.marginLeft = "0px";
          });
          retourth5.onclick = (()=>{
            menu_th5.style.display = "none";
            menu_bar.style.marginLeft = "0px";
          });
          retourth6.onclick = (()=>{
            menu_th6.style.display = "none";
            menu_bar.style.marginLeft = "0px";
          });