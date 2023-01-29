const buttons = document.querySelectorAll('.card__button');
const submit = document.querySelector('.card__submit');
const buttonRegresar = document.querySelector('.thanks__arrow');

let valorSeleccionado = 0;

const eliminarSeleccionado = () => {
    buttons.forEach(element => {
        element.classList.remove('card__button-selected');
    })
}
buttons.forEach(element => {
    element.addEventListener('click', () => {
        eliminarSeleccionado();
        if(element.id == 1){
            valorSeleccionado = element.id;
            element.classList.add('card__button-selected');
        }else if(element.id == 2){
            valorSeleccionado = element.id;
            element.classList.add('card__button-selected');
        }else if(element.id == 3){
            valorSeleccionado = element.id;
            element.classList.add('card__button-selected');
        }else if(element.id == 4){
            valorSeleccionado = element.id;
            element.classList.add('card__button-selected');
        }else if (element.id == 5){
            valorSeleccionado = element.id;
            element.classList.add('card__button-selected');
        }
    })
});
submit.addEventListener('click', () => {
    if(valorSeleccionado != 0) {
        document.getElementById('thanks__value').innerHTML = valorSeleccionado;
        document.querySelector('.card').style.display = 'none';
        document.querySelector('.thanks').style.display = 'flex';
    }else {
        document.querySelector('.card').classList.remove('animate__zoomIn');
        document.querySelector('.card').classList.add('animate__tada');
        setTimeout(()=>{
            document.querySelector('.card').classList.remove('animate__tada');
        }, 2000)
    }
});
buttonRegresar.addEventListener('click', () => {

    valorSeleccionado = 0;
    eliminarSeleccionado();
    document.querySelector('.card').classList.add('animate__zoomIn');
    document.querySelector('.card').classList.remove('animate__tada');

    document.querySelector('.card').style.display = 'block';
    document.querySelector('.thanks').style.display = 'none';
});