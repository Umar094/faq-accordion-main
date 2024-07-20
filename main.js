const plusIcon = document.getElementsByClassName('img-icon')
const minusIcon = document.getElementsByClassName('minus-icon')

for(let i = 0; i < plusIcon.length; i++){
    plusIcon[i].addEventListener('click',function() {
        let paragraph = this.parentElement.nextElementSibling
        paragraph.classList.toggle('visible')
        this.classList.toggle('hidden')
        minusIcon[i].classList.toggle('hidden')
    })
}

for(let i = 0; i < minusIcon.length; i++){
    minusIcon[i].addEventListener('click',function() {
        let paragraph = this.parentElement.nextElementSibling
        paragraph.classList.toggle('visible')
        plusIcon[i].classList.toggle('hidden')
        minusIcon[i].classList.toggle('hidden')
    })
}










