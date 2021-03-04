document.addEventListener("DOMContentLoaded", ()=>{
	new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
		mousewheel:{
			sensitivity:1,
		},
		autoHight:true,
    });



		const input = document.getElementById('only_num');

input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
const timerShow = document.querySelector(".order__timer");

timeMinut = 1800
	
timer = setInterval(function () {
    seconds = timeMinut%60 // Получаем секунды
    minutes = timeMinut/60%60 // Получаем минуты
    hour = timeMinut/60/60%60 // Получаем часы
    // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
		
        
    } else { // Иначе
		
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)

const inputName = document.querySelector(".order__name");
const afterName =  document.querySelector (".order__containe-name");
const inputPhone =  document.querySelector (".order__phone");
const afterPhone =  document.querySelector (".order__containe-phone");
inputName.onfocus = ()=>{
	console.log("h2");
	afterName.classList.toggle("show");
}
inputPhone.onfocus = ()=>{
	console.log("h2");
	afterPhone.classList.toggle("show");
}
// inputName.onblur = ()=>{
// 	console.log("h2");
// 	afterName.classList.toggle("show");
// }
// inputPhone.onblur = ()=>{
// 	console.log("h2");
// 	afterPhone.classList.toggle("show");
// }
})
