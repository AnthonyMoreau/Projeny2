// menu

let menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {

    let menuUl = document.querySelector('ul');

    if(menuUl.classList.contains('display-block')){

        menuUl.classList.remove('display-block');
        menuUl.classList.add('display-none')

    } else {

        menuUl.classList.add('display-block');
        menuUl.classList.remove('display-none');
    }
    
})