const modal = document.getElementById("modalPromos");
const close = document.getElementById("closeModalPromos");

function closeModal() {
    // localStorage.removeItem("modalAbierto");
    if(localStorage.getItem("modalAbierto")!="false"){
        modal.classList.remove("hide");
    }

    close.addEventListener("click",(e)=>{
        e.preventDefault();
        modal.classList.add("hide");
        localStorage.setItem("modalAbierto", false);
    });
}

export{
    closeModal,
}