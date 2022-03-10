var randomColor = Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = "#" + randomColor;
document.getElementById('button').style.backgroundColor = "#" + randomColor;
document.getElementById("hexcolor").innerHTML ="#" + randomColor;
// const reload =() => {
// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// document.body.style.backgroundColor = "#" + randomColor;
// document.getElementById("hexcolor").innerHTML ="#" + randomColor;
// }
// document.getElementById('button').addEventListener("click", reload);
const colors = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9','a','b','c','d','e', 'f']
const button = document.getElementById('button');
const colorText = document.querySelector('#hexcolor');
function random() {
    const randomColor =Math.floor(Math.random()*colors.length);
    return randomColor;
} 
function flipColor() {
    let genColor="#";
for (let i = 0; i < 6;i++) 
{   
  genColor += colors[random()]; 
}
    document.body.style.backgroundColor=genColor;
    button.style.backgroundColor=genColor;
    hexcolor.textContent=genColor;
}
button.addEventListener("click",flipColor);

