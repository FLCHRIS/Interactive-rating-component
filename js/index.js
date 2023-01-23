const numbers = document.querySelectorAll('.number');
const selectedNumber = document.getElementById('selected-number');
const hero__thanks = document.querySelector('.hero__thanks');
const hero__selected = document.querySelector('.hero__selected');
const button = document.querySelector('.submit');

let selected = '';

numbers.forEach(element =>{
    if(element.innerHTML == '1'){
        element.addEventListener('click', ()=>{
            selectedNumber.innerHTML = element.innerHTML;
        });
    }else if(element.innerHTML == '2'){
        element.addEventListener('click', ()=>{
            selectedNumber.innerHTML = element.innerHTML;
        });
    }else if(element.innerHTML == '3'){
        element.addEventListener('click', ()=>{
            selectedNumber.innerHTML = element.innerHTML;
        });
    }else if(element.innerHTML == '4'){
        element.addEventListener('click', ()=>{
            selectedNumber.innerHTML = element.innerHTML;
        });
    }else if(element.innerHTML == '5'){
        element.addEventListener('click', ()=>{
            selectedNumber.innerHTML = element.innerHTML;
        });
    }
});
button.addEventListener('click', ()=>{
    hero__selected.style.display = 'none';
    hero__thanks.style.display = 'flex';
});