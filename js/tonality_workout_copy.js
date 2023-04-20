let keyboard_elements = document.querySelectorAll('.elem_of_keyboard');
let white_key_numb = ['1','3','5','6','8','10','12','13','15','17','18','20','22','24','25'];

for(let item of keyboard_elements){
    console.log(item.dataset.numb == ('1' || '3' || '5'||'6'||'8'||'10'||'12'))
    if(white_key_numb.includes(item.dataset.numb)){
        item.classList.add('white_elem')
    } else {
        item.classList.add('black_elem')
    }
}
    

