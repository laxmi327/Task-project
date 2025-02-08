

const input = document.querySelector("#input")
const listorder = document.querySelector("#listorder")
const button = document.querySelector("#button")


input.addEventListener("keyup",function(event){
// console.log(event.key);
if(event.key === "Enter"){
  todo(this.value)
    this.value=""
}
})



function todo(input){
const listitem = document.createElement('li')
listitem.innerHTML =
` ${input}
<span class="material-symbols-outlined">
delete
</span>`




listitem.addEventListener("click",function(){
  this.classList.toggle("mark");
}
 )
 

listitem.querySelector("span").addEventListener("click",()=>{
    listitem.remove();
}
 )


 listorder.appendChild(listitem);
}

