const infoBtn = document.querySelectorAll(".info-btn")

infoBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active")
        const myBtn = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const MinusIcon = this.querySelector('.minus-icon')

        if (myBtn.style.maxHeight) {
            myBtn.style.maxHeight = null
            plusIcon.style.display = "block"
            MinusIcon.style.display = "none"
        } else {
            myBtn.style.maxHeight = myBtn.scrollHeight + "px" 
            plusIcon.style.display = "none"
            MinusIcon.style.display = "block"
        }
    })
})