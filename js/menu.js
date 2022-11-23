(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();

document.getElementById("buton-gub").addEventListener("click", scroollUp);

function scroollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scroollUp);
        window.scrollTo (0,currentScroll - (currentScroll/30));
    }
}

buttonUp = document.getElementById("buton-gub");

window.onscroll = function(){
    
        var scroll = document.documentElement.scrollTop;

        if(scroll > 800){
            buttonUp.style.transfom = "scale(1)";
        }else if(scroll < 800){
            buttonUp.style.transfom = "scale(0)";
        }
    }
