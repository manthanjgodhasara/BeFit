let sidenav = document.querySelector(".sidenavbar");
let open = document.querySelector(".btn");
let close = document.querySelector(".close-btn");
// let container = document.querySelector(".container");

open.addEventListener("click", ()=>{
    if(sidenav.classList.contains("disappear")){
        sidenav.classList.remove("disappear");
        sidenav.classList.add("appear");
    }
});

close.addEventListener("click", () =>{
    if (sidenav.classList.contains("appear")) {
        sidenav.classList.remove("appear");
        sidenav.classList.add("disappear");
    }
});


