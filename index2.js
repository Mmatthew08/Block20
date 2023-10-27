console.log('connected')

const words=['bug', ' in', ' a',' rug'];
const form=document.querySelector('form');
const output= document.getElementById('output');

const wordElements= words.map((word)=>{
    const newSpan=document.createElement('span');
    newSpan.innerText=word;
    return newSpan
})
console.log(wordElements);
output.replaceChildren(...wordElements)

form.addEventListener('submit',handlesubmit);

function handlesubmit(event){
    event.preventDefault();
    //console.log(input.value);
    words.push(input.value);
   // console.log(words)
   render ();
}
function removeWord(){
    console.log('this is where we remove words');
    const index=words.indexOf(event.target.textcontent);
    console.log(index);
    words.splice(index,1);
    console.log(words)
    render();
}
render();