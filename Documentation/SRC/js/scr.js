const cross = document.querySelector('.cross');
const warningSec = document.querySelector('.warning');

cross.addEventListener('click', function(){
    warningSec.classList.add('closed');
})