document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let array=[];
let drop= document.getElementById("dropdown");
let li_element;
let ul_element;

let icon_listener;
let elements

//button submit listener
document.getElementById("todo").addEventListener("click",function(){
  
    if (document.getElementById("task").value==''){
        document.getElementById("task").required;
    }
    else{
          create_array(create_obj())
          
          console.log('array',array.length,'\n',array)
          create_li()

        // add_listener()
          
     document.getElementById("input1").value='';
     document.getElementById("task").value='';
}})

//creat object
function create_obj(){
 
   x={   
        checkbox:`<input type="checkbox" id="myCheck" value=""  onclick="make_inline_text()">`,
        title:document.getElementById("task").value,
        deadline:document.getElementById("input1").value,
        priority:drop[drop.selectedIndex].text  ,    
        icon:`<i class="fa fa-trash" id="bin" aria-hidden="true"></i>`
    }
    
  return x
}

//creat  array of object
function create_array(x){
array.push(x)
}

//create list items

function create_li(){
  ul_element = document.getElementById("list");

  //clear the old ul and display the new array
  ul_element.innerHTML="";
for(let i=0;i<array.length;i++){

    li_element = document.createElement("li");li_element.innerHTML=`${array[i].checkbox}
                   <h3>${array[i].title}</h3>
                   <p>${array[i].deadline}</p>
                   <p>${array[i].priority}</p>
                      ${array[i].icon}`

  ul_element.appendChild(li_element);
  
//ul_element.children[4]
  //add listener
   {
     console.log(" index of item in array is:",i)
     icon_listener=li_element.children[4];
     icon_listener.addEventListener("click",function(){
     console.log("***index obj in array",i)
     delete_task(i)
});
}

}
}
//update the page
function create_li_update(){
  ul_element = document.getElementById("list");

  //clear the old ul and display the new array
  ul_element.innerHTML="";
for(let i=0;i<array.length;i++){

    li_element = document.createElement("li");li_element.innerHTML=`${array[i].checkbox}
                           <h3>${array[i].title}</h3>
                           <p>${array[i].deadline}</p>
                           <p>${array[i].priority}</p>
                             ${array[i].icon}`

  ul_element.appendChild(li_element);
  }}
// delete task from array

function delete_task(i){
   console.log("removed", array.splice(i,1)) ;
    console.log(array)
   create_li_update()
}



/* //add listener fot icon depend on dom
function add_listener(){
  elements=document.querySelectorAll("#bin");
          console.log("elements",elements)
         for(let i=0;i<elements.length;i++){
             console.log(elements[i].children[3])
elements[i].children[3].addEventListener("click",function(){
     console.log("***index obj in array",i)
     delete_task(i)
})
}}
*/

//checkbox
function make_inline_text(){
     checkbox=document.querySelectorAll("#myCheck");
     for(let i=0;i<checkbox.length;i++){
       if(checkbox[i].checked==true){
           checkbox[i].value=checkbox[i].checked;
           console.log(checkbox[i].value);
           parent= checkbox[i].parentElement;
           header=parent.children[1];
           header.style.textDecoration= "line-through";
    
   }
      else {
           checkbox[i].value=checkbox[i].checked;
           console.log(checkbox[i].value);
           parent= checkbox[i].parentElement;
           header=parent.children[1];
           header.style.textDecoration= "none";
       }
     }}