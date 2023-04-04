const inputBox=document.getElementById('input-box');
const listContainer= document.getElementById('list-container');

function addTask() {
 if(inputBox.value===""){
   alert("enter your todo!");
 }
  else{
    const newtask = document.createElement('li');
    newtask.innerHTML=inputBox.value;
    listContainer.appendChild(newtask);
    let icon = document.createElement('span');
    icon.innerHTML=  "\u00d7";
    newtask.appendChild(icon);
  }
  inputBox.value="";
  saveData();
};
listContainer.addEventListener("click" ,function(e){
    if(e.target.tagName==='LI'){
      e.target.classList.toggle('checked');
      saveData();
      
    }
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  saveData();

}
},false)
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
  
}
function showTask(){
  listContainer.innerHTML=localStorage.getItem('data');
}
  showTask();
 