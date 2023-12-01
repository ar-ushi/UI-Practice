document.addEventListener('DOMContentLoaded', () =>{
    let inputElement = document.getElementById('phone');
    inputElement.addEventListener('keypress', (ev) =>{
        if (ev.key === 'Enter'){
            let inputValue = inputElement.value;
            let countryCode = inputValue.slice(0,3)
            let number = inputValue.slice(3);
            inputElement.value = `+(${countryCode})-${number}`;
            inputElement.style.accentColor = 'blue';
        }
    })
})