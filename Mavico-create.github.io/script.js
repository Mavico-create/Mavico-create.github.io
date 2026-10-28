const yearElement = document.getElementById("year");

if (yearElement){
    yearElement.textContent = new Date().getFullYear();
}

// Sticky Navbar shadow on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.style.boxShadow = '0 4px 20px rgba (58, 5, 25, 0.08)'; // This is will add shadow
    } else{
        header.style.boxShadow = 'none' //This will remove the shadow at the top
    }
})