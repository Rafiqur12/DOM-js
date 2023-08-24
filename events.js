console.log('This is separate JS file');
// option 1
// direcly declare 
//<button onclick="console.log(7)">click me</button> 

  // option 2 = add onclick funciton on the html element
 // <button onclick="makeRed()">make red</button>
    function makeRed(){
        document.body.style.backgroundColor='red';
    }

    // option 3 
    const makeBlueButton= document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;
    function makeBlue(){
      document.body.style.backgroundColor='blue';
    }
    // option 3 another 
    
  const makePurpleButto=document.getElementById('make-purple');
  makePurpleButto.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
  }
//   option 4 
const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)
function makePink(){
   document.body.style.backgroundColor='pink';
}
// option 4 another 
const greenButton=document.getElementById('make-green');
greenButton.addEventListener('click',function makeGreen(){
   document.body.style.backgroundColor='green';
})
// option 4 final 
document.getElementById('make-goldenrod').addEventListener('click',function(){
  document.body.style.backgroundColor='goldenrod';  
})