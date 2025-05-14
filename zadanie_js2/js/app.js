let li=document.querySelectorAll("li");
let a=document.querySelectorAll("a");

a.forEach(item=>{
    item.addEventListener('click',()=>{
        //console.log(item.hash.slice(1,item.hash.length))
        let szukane_id=item.hash.slice(1,item.hash.length);
        let szukany_element=document.querySelector(`#${szukane_id}`);
        szukany_element.scrollIntoView()
        let parent=item.parentNode;
        console.log(parent)
        li.forEach(item2=>{
            if(item2.classList.contains('nav-el-active')){
                item2.classList.remove('nav-el-active')
            }
        })
        parent.classList.add('nav-el-active');
    })
})
