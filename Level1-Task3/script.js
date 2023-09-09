const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',handleClick);
});

function handleClick(event){
    const buttonText = event.target.textContent;
     
    if (buttonText === 'AC') {
        display.value = '';
      } else if (buttonText === '='){
        try{
            display.value = eval(display.value); 
        } catch (error){
            display.value = 'Error';
        }
      } else if(buttonText === 'DE'){
        display.value = display.value.toString().slice(0,-1);
      }
      else {
        display.value += buttonText;
      }
}