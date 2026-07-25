document.addEventListener("DOMContentLoaded", function(){
    const nav = document.querySelector(".sidebar")
    const menu = document.querySelector(".menu");
    const addBorder = document.querySelector(".sidebar-div-1");

    menu.addEventListener("click", function(){
        if(nav.classList.contains("active")){
            nav.classList.remove("active")
            addBorder.style.borderBottom = "none";
            menu.innerText = "menu";
        }else{
            nav.classList.add("active");
            addBorder.style.borderBottom = "1px solid #0000001A"
            menu.innerText = "close"
        }
    })
})