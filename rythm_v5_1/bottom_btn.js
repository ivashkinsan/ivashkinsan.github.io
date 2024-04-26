let buttonsPls = document.querySelectorAll('.btn_pls');
let buttonsGrp = document.querySelectorAll('.btn_grp');
let btnSelectOptions;
let changeForBtnContains = new Event('change', {
    bubbles: true,
    cancelable: true
});
let containBtnPulse = document.querySelector('.contain_btn_pulse');
let containBtnGroup = document.querySelector('.contain_btn_group');

buttonsPls.forEach(button => {
    button.addEventListener('click', () => {
        buttonsPls.forEach(btn => {
            btn.classList.remove('btn_active');
        });
        button.classList.add('btn_active');
        button.parentNode.dataset.value = button.dataset.value;
        // btnSelectOptions = button.dataset.value;
        // console.log(btnSelectOptions);
        // Вызов события change на btnContains
        containBtnPulse.dispatchEvent(changeForBtnContains);
    });
});

buttonsGrp.forEach(button => {
    button.addEventListener('click', () => {
        buttonsGrp.forEach(btn => {
            btn.classList.remove('btn_active');
        });
        button.classList.add('btn_active');
        button.parentNode.dataset.value = button.dataset.value;
        // btnSelectOptions = button.dataset.value;
        // console.log(btnSelectOptions);
        // Вызов события change на btnContains
        containBtnGroup.dispatchEvent(changeForBtnContains);
    });
});