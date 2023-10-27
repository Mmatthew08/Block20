console.log('Connected')
const details=document.getElementById('details');
const button=document.getElementById('primary-button');
function handClick(){
    details.innerHTML='Button was clicked!';
}
const handleMouseOver= ()=>{
    details.innerText='Its Hover Time ';
    console.log('The user is mousing over the button' )
}

button.addEventListener('click',handClick)
button.addEventListener('mouseover',handleMouseOver)
button.addEventListener('mouseout'),()=>{
    details.innerText='The text is gone:('
}