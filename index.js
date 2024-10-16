const display = document.getElementById('display');

let currentInput = '';

const buttons = document.querySelectorAll('button');


buttons.forEach( button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // console.log(value);

        //Functionality Implementation of special buttons

        if(value === 'DEL'){
            currentInput = currentInput.slice(0, -1);
            display.innerHTML = currentInput || '0';
        }else if (value === 'RESET'){
            currentInput = '';
            display.innerText = '0';
        }else if( value === '='){
            try{
                currentInput = eval(currentInput).toString();
                display.innerHTML = currentInput;
            }catch{
                display.innerText = 'Error';      
            }            
        }else{
            if(display.innerHTML === '0'){
                currentInput = value;
            }else{
                currentInput += value;
            }
            display.innerText = currentInput; 
        }
        
    })
} )



