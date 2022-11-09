let btns=document.querySelectorAll(".rate-btn");

let rate=document.getElementById("rate");

let submitBtn=document.getElementById("submit-btn");

let rating=document.getElementById("rating");

let thankYou=document.getElementById("thank-you");

btns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        const selectedBtn=e.currentTarget;
        for(let i=0;i<btns.length;i++){
            if(btns[i].classList.contains("selected")){
                btns[i].classList.remove("selected");
                selectedBtn.classList.add("selected");
                rate.innerHTML=selectedBtn.innerHTML;
            }
            else{
                selectedBtn.classList.add("selected");
                rate.innerHTML=selectedBtn.innerHTML;
            }
        }
        submitBtn.addEventListener("click", ()=>{
            if(selectedBtn.classList.contains("selected")){
                rating.style.display="none";
                thankYou.style.display="flex";
            }
        })
    })
})
