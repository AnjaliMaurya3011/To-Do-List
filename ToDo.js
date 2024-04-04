// Create Checkbox & Label using JS
//  let inputElement =document.createElement('input')
//  inputElement.type ="checkbox"
//  inputElement.id ="hello"
//  document.body.appendChild(inputElement)

//  let label =document.createElement('label')
//  //We can use htmlfor or setAttribute() method 
//  //label.htmlFor ="hello"
//  label.setAttribute("for","hello")
//  label.textContent ="Marks"
//  document.body.appendChild(label)

let todoItems = document.getElementById("todoItemsContainer")
let addto =document.getElementById("addTodoButton")

let todoList = [
    {
        text: "Learn Html",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JS",
        uniqueNo: 3
    },
    {
        text: "Learn Bootstrap",
        uniqueNo: 4
    }
];

let todocount =todoList.length;

function onTodoStatusChange(checkboxId,labelid){
    let checkboxElement =document.getElementById(checkboxId);
   // console.log(checkboxElement.checked);
    let labelElement =document.getElementById(labelid);
    // labelElement.classList.toggle("checked");
    if(checkboxElement.checked ===true){
        labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }
}

function deleteItems(todoId){
    let todoElement =document.getElementById(todoId);
    todoItems.removeChild(todoElement);
}

function createAndAppendToDo(todo) {
    let todoId ="todo" + todo.uniqueNo;
    let checkboxId ="checkbox" + todo.uniqueNo;
    let labelid ="label" + todo.uniqueNo;
    
    let todoElement = document.createElement('li');
    todoElement.classList.add("todo-item-container");
    todoElement.id=todoId;
    todoItems.appendChild(todoElement);

    let inputElement = document.createElement('input');
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick =function(){
        onTodoStatusChange(checkboxId,labelid);
    };
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container");
    todoElement.appendChild(labelContainer);

    let labels = document.createElement('label');
    labels.setAttribute("for", "checkboxId");
    labels.id =labelid;
    labels.classList.add("checkbox-label");
    labels.textContent = todo.text;
    labelContainer.appendChild(labels);

    let deleteContainer = document.createElement('div');
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let DeleteIcon = document.createElement('i');
    DeleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    DeleteIcon.onclick=function (){
        deleteItems(todoId);
    }
    deleteContainer.appendChild(DeleteIcon);
}

for (let eachTodo of todoList){
    createAndAppendToDo(eachTodo);
}


 function onAdd(){
    let inputElement = document.getElementById("todoUserInput");
    let inputElementValue =inputElement.value;
    if(inputElementValue ===""){
        alert("Enter Valid Text!!!");
        return;
    }
    todocount =todocount+1;
    let newtodo={
        text: inputElementValue,
        uniqueNo: todocount
    }
    createAndAppendToDo(newtodo)
    inputElement.value ="";
}

addto.onclick =function(){
    onAdd();
}