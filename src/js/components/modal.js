const modalPromos = document.getElementById("modalPromos");
const closePromos = document.getElementById("closeModalPromos");

const modalLogin = document.getElementById("modalLogin");
const openLogin = document.querySelectorAll(".openLogin");
const closeLogin = document.getElementById("closeLogin");

function closeModal() {
    // localStorage.removeItem("modalAbierto");
    if(localStorage.getItem("modalAbierto")!="false"){
        modalPromos.classList.remove("hide");
    }

    closePromos.addEventListener("click",(e)=>{
        e.preventDefault();
        modalPromos.classList.add("hide");
        localStorage.setItem("modalAbierto", false);
    });
}

function loginModal(){
    for (let i = 0; i < openLogin.length; i++) {
        openLogin[i].addEventListener('click',(e)=>{
            e.preventDefault();
            modalLogin.classList.add("showModalLogin");
        })
    }
    closeLogin.addEventListener('click',(e)=>{
        e.preventDefault();
        modalLogin.classList.remove('showModalLogin');
    })

    
}
export{
    closeModal,
    loginModal,
}