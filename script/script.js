const r = document.getElementById('r');
const g = document.getElementById('g');
const b = document.getElementById('b');
r.focus();
const hexcode = document.getElementById('hex');
const preview = document.getElementById('preview');
//
function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}
 
const btnConvert = document.getElementById('convert');
btnConvert.addEventListener('click',()=>{
    let redcode = parseInt(r.value);
    let greencode = parseInt(g.value);
    let bluecode = parseInt(b.value);

    let hexString = redcode.toString(16) + greencode.toString(16) + bluecode.toString(16);

    document.querySelector('#hex').innerHTML = '#'+hexString;

    let previewColor = '#' + hexString; 
    preview.style = `background-color: ${previewColor}`;

})

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    r.focus()
    hexcode.innerHTML = '';
    r.value = '';
    g.value = '';
    b.value = '';
    let previewColor = 'white';
    preview.style = `background-color: ${previewColor}`;
})

// copyright
const Year = new Date().getFullYear();
document.getElementById('footer').innerHTML = `
&copyAbdus-Samad Charles ${Year}
`;