/// <reference types="../@types/jquery" />


$('.asideIcon').on('click' , function(){


    $('.aside').animate({width:'toggle' , paddingInline:'toggle'}, 1000)

})


$('.toggle1').on('click' , function(){



    $('.toggle-text1').slideToggle(1000)
    $('.toggle-text2').slideUp(1000)
    $('.toggle-text3').slideUp(1000)
    $('.toggle-text4').slideUp(1000)



})
$('.toggle2').on('click' , function(){

    $('.toggle-text2').slideToggle(1000)
    $('.toggle-text1').slideUp(1000)
    $('.toggle-text3').slideUp(1000)
    $('.toggle-text4').slideUp(1000)

})
$('.toggle3').on('click' , function(){

    $('.toggle-text3').slideToggle(1000)
    $('.toggle-text2').slideUp(1000)
    $('.toggle-text1').slideUp(1000)
    $('.toggle-text4').slideUp(1000)

})
$('.toggle4').on('click' , function(){

    $('.toggle-text4').slideToggle(1000)
    $('.toggle-text2').slideUp(1000)
    $('.toggle-text3').slideUp(1000)
    $('.toggle-text1').slideUp(1000)

})



let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

let x = setInterval(function(){

  let now = new Date().getTime();

  let distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = "-"+ days + "d"
  document.getElementById('hours').innerHTML = hours + "h"
  document.getElementById('min').innerHTML = minutes + "m"
  document.getElementById('sec').innerHTML = seconds + "s"

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


let textAria = document.getElementById('messgae');
let charates = document.getElementById('charates');

textAria.addEventListener( 'input' , function(){
    charates.innerHTML = textAria.value.length
})

