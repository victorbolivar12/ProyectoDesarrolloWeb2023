const monthTitle = document.querySelector(".month-title");
const monthTitle2 = document.querySelector(".month-title2");
var daysTag = document.querySelector(".days"); 
var next = document.querySelectorAll(".icon img")

var date = new Date();
var currYear = date.getFullYear();
var currMonth = date.getMonth();


var month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const renderCalendar = () => {
    let firstDay = new Date(currYear, currMonth, 0).getDay();
    let last = new Date(currYear,currMonth + 1,0).getDate();
   
  
    let litag = "";

    for(let i =firstDay; i>0 ;i--){
        litag += "<li class='inactive'>"+i+"</li>" ; 
     }

    for(let i =1; i<=last ;i++){
       litag += "<li>"+i+"</li>" ; 
    }

  
    monthTitle.innerText = month[currMonth] ;
    monthTitle2.innerText = currYear;
    daysTag.innerHTML = litag;
   
}
renderCalendar();

next.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        renderCalendar();
    });
});


const iconoMenu = document.querySelector("#icono");
 var menu = document.querySelector(".menu");

  iconoMenu.addEventListener('click', () => {
     menu.classList.toggle('active');
     document.body.classList.toggle('opacity');
  });