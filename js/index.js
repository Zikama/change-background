let btn = document.getElementById("btn");
    btn.addEventListener("click",()=>{
        let change= document.getElementById("change"),second =document.getElementById("second");
            change.classList.toggle("change");
            change.classList.toggle("c");
            second.classList.toggle("second");
            second.classList.toggle("c"); 
        });