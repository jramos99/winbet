/* const modalPromos = document.getElementById("modalPromos");
const closePromos = document.getElementById("closeModalPromos"); */

const modalLogin = document.getElementById("modalLogin");
const openLogin = document.querySelectorAll("#tnsSingleGames");
const openLoginDesk = document.querySelectorAll(".openLogin");
const closeLogin = document.getElementById("closeLogin");

// function closeModal() {
//     // localStorage.removeItem("modalAbierto");
//     if(localStorage.getItem("modalAbierto")!="false"){
//         modalPromos.classList.remove("hide");
//     }

//     closePromos.addEventListener("click",(e)=>{
//         e.preventDefault();
//         modalPromos.classList.add("hide");
//         localStorage.setItem("modalAbierto", false);
//     });
// }

function loginModal(){
    openLogin[0].addEventListener('click',(e)=>{
        e.preventDefault();
        modalLogin.classList.add("showModalLogin");
    })
    for (let i = 0; i < openLoginDesk.length; i++) {
        openLoginDesk[i].addEventListener('click',(e)=>{
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
    // closeModal,
    loginModal,
}