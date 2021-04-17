const init = document.querySelector('.btn-item1');
const init2 = document.querySelector('.btn-item2');
const init3 = document.querySelector('.btn-item3');
const dates = document.querySelector('.footer p span');

dates.innerHTML = (new Date().getFullYear());

const tovar = [
    {
        name:'Гринобль ролл',
        presence:true},
    {
        name:'Оранжад ролл',
        presence:false},
    {
        name:'Брауни рол',
        presence:false
}];
const initq = function(){
    if(tovar[0].presence == true){
        init.innerHTML = 'Заказать';
        init.style.color="#06811a";
    }else{
        init.innerHTML = 'Недоступно к заказу';
        init.style.color="black";
    }
}
initq();
const initqs = function(){
    if(tovar[1].presence == true){
        init2.innerHTML = 'Заказать';
        init2.style.color="#06811a";
    }else{
        init2.innerHTML = 'Недоступно к заказу';
        init2.style.color="black";
    }
}
initqs();
const initqss = function(){
    if(tovar[2].presence == true){
        init3.innerHTML = 'Заказать';
        init3.style.color="#06811a";
    }else{
        init3.innerHTML = 'Недоступно к заказу';
        init3.style.color="black";
    }
}
initqss();











