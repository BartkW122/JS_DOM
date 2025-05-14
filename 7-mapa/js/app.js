let map=document.querySelector(".map")

cities.forEach(item=>{
   let a = document.createElement("a");
   a.setAttribute("href",item.href)
   a.classList.add("map-marker")
   a.setAttribute("data-name",item.name)
   a.setAttribute("data-population",item.population)
   a.style.left=item.map_x+"px"
   a.style.top=item.map_y+"px"
   a.innerHTML=item.name
   map.appendChild(a)
})

let map_marker=document.querySelectorAll(".map-marker");
let map_tooltip=document.querySelector(".map-tooltip");

map_marker.forEach(item=>{
   
   let result=window.getComputedStyle(item)
   let left_p=parseInt(result.getPropertyValue('left'))
   let top_p=parseInt(result.getPropertyValue('top'))

   let h2=document.createElement("h2");
   let div=document.createElement("div");
   let strong=document.createElement("strong");
   item.addEventListener('mouseover',()=>{
      
      h2.innerHTML=item.getAttribute('data-name');
      
      div.innerHTML="Population:";
      strong.innerHTML=item.getAttribute('data-population')
      
      div.appendChild(strong)

      map_tooltip.appendChild(h2)
      map_tooltip.appendChild(div)

      let left=left_p+30;
      item.style.left=left+"px";
      let top=top_p+30;
      item.style.top=top+"px";

     
      console.log(map_tooltip)
      item.addEventListener('mousemove',()=>{
         let result2=window.getComputedStyle(map_tooltip)
         let left2=parseInt(result.getPropertyValue('left'))+30;
         map_tooltip.style.left=left2+"px";
      
         let top2=parseInt(result.getPropertyValue('top'))+30;
         map_tooltip.style.top=top2+"px";
      })
   })
   item.addEventListener('mouseout',()=>{
      item.style.left=left_p+"px";
      item.style.top=top_p+"px";

      div.removeChild(strong)
      map_tooltip.removeChild(div)
      map_tooltip.removeChild(h2)
     

      map_tooltip.style.left="-9999px";
      map_tooltip.style.top="-9999px";
   })
   
})
