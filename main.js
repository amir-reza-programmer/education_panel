
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

faqDivs = document.querySelectorAll('.faq')
faqDivs.forEach(faqDiv => {
    faqDiv.addEventListener('click', (e)=>{
        console.log(e.target);
        faqDiv.querySelector('p').classList.toggle('answer__visible')
    })
});