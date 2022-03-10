var counter=document.getElementById('counter');
var increaseCounter=document.querySelector('#increase');
var resetCounter=document.querySelector('#reset');
var decreaseCounter=document.querySelector('#decrease');
var i=0;
increaseCounter.addEventListener("click", function()
{
  counter.textContent=++i;
});
resetCounter.addEventListener("click", function()
{
    i=0;
  counter.textContent=i;
});
decreaseCounter.addEventListener("click", function()
{
  counter.textContent=--i;
});