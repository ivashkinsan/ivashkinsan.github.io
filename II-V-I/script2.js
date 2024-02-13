let count = 0;
document.querySelector('.btn').onclick = () => {
    console.log('click');
    count++;
    localStorage.setItem('click', count);
}