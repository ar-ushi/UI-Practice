function createJSON(){
    const obj = {};
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;
    let jsonString = `{"${key}": "${value}"}`;
    document.getElementById('jsonOutput').textContent = jsonString;

}

function nestJSON(){

}