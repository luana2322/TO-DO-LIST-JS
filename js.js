var arraytodo=[];
const htmltodo = '';
getarray();
for (let i = 0; i < arraytodo.length; i++) {
    console.log(arraytodo[i]);
}
  rendertodo();
 
function delete1(){
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    let emptyDiv = document.createElement("div");
    ul.appendChild(emptyDiv);
    }
  
function addtodo() {
    var text = document.getElementById("text").value;
    if (text !== '') {
            arraytodo.push(text);

    delete1();
    
 rendertodo();
    var text = document.getElementById("text").value = '';
    savearray();
    }

}


function rendertodo() {
    for (let i = 0; i < arraytodo.length; i++) {
        const mydiv = document.createElement("div");
        mydiv.style.marginTop = '10px';
        // mydiv.setAttribute("id", length);
        // length += 1;
        const litodo = document.createElement("li");
        litodo.style.float = 'left';
        litodo.innerText = arraytodo[i];
   
        mydiv.appendChild(litodo);

        
        const button = document.createElement("button");
        button.className = "deletebutton";
        button.setAttribute("onclick",  `arraytodo.splice(${i},1); savearray();delete1();rendertodo();`);

        button.innerHTML = '<i class="fa-solid fa-trash">';
        mydiv.appendChild(button);
        document.getElementById("list").appendChild(mydiv);
    }
}


function savearray() {
    localStorage.clear();
    localStorage.setItem("arraytodo",JSON.stringify(arraytodo));
}
function getarray() {
    arraytodo = JSON.parse(localStorage.getItem("arraytodo"));
   
}



