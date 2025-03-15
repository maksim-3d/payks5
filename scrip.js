const image = document.getElementById('imageToMove');
const image5 = document.getElementById('image5');
const image9 = document.getElementById('image9');
const image8 = document.getElementById('image8');
const image7 = document.getElementById('image7');
const n = document.getElementById('n');
let button = document.querySelector('button');
const l = document.getElementById('l');
const mag = document.getElementById('mag');
var a = 0;
let i = 0; // Убедитесь, что вы инициализируете i
let topPosition = 0; 
let leftPosition = 0;                             
const step = 10;
leftPosition -= 450;  
image.style.top = `${topPosition}px`;
image.style.left = `${leftPosition}px`;
image5.style.top = `${topPosition}px`;
image5.style.left = `${leftPosition}px`;
function m() {
  if (i > 36) {
    i = 0; // Убедитесь, что вы инициализируете i
    topPosition = 0;                            
    image.style.top = `${topPosition}px`;
    image.style.left = `${leftPosition}px`;
    image5.style.top = `${topPosition}px`;
    image5.style.left = `${leftPosition}px`;
    image.style.display='block';
    image5.style.display='block';
  }
    image.style.display='block';
    image5.style.display='block';
    function updatePosition() {
        if (i <= 37) { 
          topPosition -= step;
          topPosition - 10; // Обновляем позицию
          image.style.top = `${topPosition}px`;
          image5.style.top = `${topPosition}px`; // Устанавливаем новую позицию
          i++; // Увеличиваем i
          button.disabled = true;
          l.disabled = true;
          mag.disabled = true;
          setTimeout(updatePosition, 100);
          if (i >= 36) {
          setTimeout(fh, 3000);
          }
        }
    }

    // Начинаем обновление позиции
    updatePosition();
}
function fh() {
    image.style.display='none';
    image5.style.display='none';
    if (a<=6){
    button.disabled = false;
    l.disabled = false;
    mag.disabled = false;
    }
    q();
    w();
    e();
    a++;
    if(a>=7){
      button.disabled = true;
      n.style.display='block';
    }
}
function q(){
  if (a==0){
    image9.style.display='none';
  }
}
function w(){
  if (a==3){
    image8.style.display='none';
  }
}
function e(){
  if (a==6){
    image7.style.display='none';
    l.disabled = true;
    mag.disabled = true;
  }
}
