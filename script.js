const Dos = document.getElementById('div2');
const txDos = document.getElementById('txt2');

Dos.addEventListener('mouseover', function () {
    
  Dos.style.backgroundImage = "url('../ima/resized_image_3.jpg')";
  txDos.style.opacity = '1';

});

Dos.addEventListener('mouseout', function () {
  Dos.style.backgroundImage = "url('../ima/resized_cristiano.jpg')";
  txDos.style.opacity = '0';

});

const uno = document.getElementById('div1');
const txuno = document.getElementById('txt1');

uno.addEventListener('mouseover', function () {
    
  uno.style.backgroundImage = "url('../ima/resized_image_1.jpg')";
  txuno.style.opacity = '1';

 });

uno.addEventListener('mouseout', function () {
  uno.style.backgroundImage = "url('../ima/resized_messi.jpg')";
  txuno.style.opacity = '0';

});
const tre = document.getElementById('div3');
const txtres = document.getElementById('txt3');

tre.addEventListener('mouseover', function () {
    
  tre.style.backgroundImage = "url('../ima/resized_image_2.jpg')";
  txtres.style.opacity = '1';

});

tre.addEventListener('mouseout', function () {
  tre.style.backgroundImage = "url('../ima/resized_pele.jpg')";
  txtres.style.opacity = '0';

});