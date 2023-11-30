document.addEventListener('DOMContentLoaded', () => {
    const pageTheme = document.getElementById('pagetheme');
    const containerTheme = document.getElementById('containertheme');
    const container = document.getElementById('container');

    pageTheme.addEventListener('change', () => {
        if (pageTheme.checked){
            document.body.classList.add('dark');
            containerTheme.checked = true;
        } else {
            document.body.classList.remove('dark');
            containerTheme.checked = false;
        }
    })
    containerTheme.addEventListener('change', () => {
        if (containerTheme.checked){
            container.classList.add('dark');
        } else {
            container.classList.remove('dark');
        }
    })
})