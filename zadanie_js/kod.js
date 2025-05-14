let check=document.querySelectorAll("input");
//console.log(check)
let img;
check.forEach(item=>{
   item.addEventListener('input',()=>{
        if(item.checked==true){
            if(item.id=="audi"){
                img=document.querySelector("#a");
                console.log(img)
                img.style.visibility="visible";
            }
            if(item.id=="merc"){
                img=document.querySelector("#m");
                console.log(img)
                img.style.visibility="visible";
            }
            if(item.id=="bmw"){
                img=document.querySelector("#b");
                console.log(img)
                img.style.visibility="visible";
            }
        }

        if(item.checked==false){
            if(item.id=="audi"){
                img=document.querySelector("#a");
                console.log(img)
                img.style.visibility="hidden";
            }
            if(item.id=="merc"){
                img=document.querySelector("#m");
                console.log(img)
                img.style.visibility="hidden";
            }
            if(item.id=="bmw"){
                img=document.querySelector("#b");
                console.log(img)
                img.style.visibility="hidden";
            }
        }
   })
})

let liczba=0;
function btn_l(){
    let aktywne_zdj=document.querySelector("#Aktywne_zdj");
    
        liczba=liczba-1;
    
    if(liczba<1){
        liczba=3
    }
    aktywne_zdj.setAttribute("src",`${liczba}.jpg`);
    console.log(liczba);
}

function btn_r(){
    let aktywne_zdj=document.querySelector("#Aktywne_zdj");
    
    liczba=liczba+1;
    if(liczba>3){
        liczba=1;
    }
    aktywne_zdj.setAttribute("src",`${liczba}.jpg`);
    console.log(liczba);
}