 let submitbutton = document.getElementById("button-submit");
 const inputFeild = document.getElementById('input-type');
 




function addToDo(){
    const inputvalue = inputFeild.value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inputvalue));
    document.querySelector(".task-list").appendChild(li);
    
    
}

 submitbutton.addEventListener('click',function(e){
        e.preventDefault()
        addToDo();
        alert('task added succcesfully !');
        
        
     })