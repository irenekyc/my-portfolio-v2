
const hamburgerBtn = document.querySelector('.btn-hamburger')
const modal = document.getElementById('modal')



window.addEventListener('click', (e)=>{
    if (e.target.id === "open-portfolio-details"){
        modal.classList.add('show-portfolio')
        modal.addEventListener('click', e=>{
            if (e.target.id==="close-portfolio-btn"){
                modal.classList.remove('show-portfolio')
            }
        })
    } else if (e.target.id === "toggle-menu"){
        hamburgerBtn.classList.toggle('active')
        modal.classList.toggle('show-menu')
    }
  
})