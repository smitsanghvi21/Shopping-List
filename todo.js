var item=document.getElementById("first");
var quantity=document.getElementById("second");
var button=document.getElementsByClassName("btn btn-primary")[0];
var ul=document.querySelector("ul");

//this fun will count length of item
function nameLength(){
    return item.value.length;
}

//this fun will count length of quantity
function quantityLength(){
    return quantity.value.length;
}

//for toggle
function forToggle(){
    li.classList.toggle("done");
}

//this fun will create new  li and span tags then add it to existing bootstrap list and span tags
function createListElement(){
    var li=document.createElement("li");
    var span=document.createElement("span");
    li.appendChild(document.createTextNode(item.value));
    //used classname of li tag
    li.className="list-group-item d-flex justify-content-between align-items-center";
    span.appendChild(document.createTextNode(quantity.value));
    //used classname of span tag
    span.className="badge badge-primary badge-pill";
    //span will be added to li so it appears in same line
    li.appendChild(span);
    //after that li is added to unordered list
    ul.appendChild(li);
    //this both are set blank because has to reset after adding new values
    item.value="";
    quantity.value="";

    

    
}

//if length of item and quantity if more than 0 then will execute createListElement fun onClick
function addListAfterClick(){
    if(nameLength()>0 && quantityLength()>0){
        createListElement();
    }
}

//for enter key
function addListAfterKeypress(event){
    if((nameLength>0 && quantityLength>0) && event.keyCode==13){
        createListElement();
    }
}
//added click event to button
button.addEventListener("click",addListAfterClick);

//added event for enter key
item.addEventListener("keypress", addListAfterKeypress);
quantity.addEventListener("keypress",addListAfterKeypress);

forToggle();