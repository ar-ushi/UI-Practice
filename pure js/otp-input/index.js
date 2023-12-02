const otpFields = [];
const otpLength = 4;

document.addEventListener('DOMContentLoaded', () => {
    const otpContainer = document.getElementById('otp');
    addOTPInputFields(otpLength);

    function addOTPInputFields(len) {
        for (let i=0; i<len; i++){
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.inputMode = 'numeric';
            inputField.maxLength = 1;
            inputField.classList.add('otpinput');
            otpContainer.appendChild(inputField);
            otpFields.push(inputField);
        }
    }

    otpContainer.addEventListener('keydown', e => {
        const target = e.target;
        if (e.key === 'ArrowLeft'){
            target.previousElementSibling?.focus();
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (e.key === 'ArrowRight'){
            target.nextElementSibling?.focus();
            return;
        }});

        document.addEventListener('keyup', e => {
        if (e.key === 'Backspace' || e.key === 'Delete'){
            e.target.value && (e.target.value = "");
            e.target.previousElementSibling?.focus();
            return;
        }});
        
        otpContainer.addEventListener('input', e => {
            const next = e.target.nextElementSibling;
            if (e.target.value){
                if (next) {
                    next.focus();
                } else {
                    e.target.blur();
                }   
            }
    })
    
    
})
