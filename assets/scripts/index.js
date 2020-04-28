let numeroDeTareas = 0;

let todo = {
    list: []
}

window.addEventListener('load', function () {
    listaAntigua();
})


function listaAntigua() {

    todo = JSON.parse(localStorage.getItem("todo"));
    if (todo != null) {
        for (let i = 0; i < todo.list.length; i++) {
            let añadir = document.getElementById("list");
            
            let node = document.createElement("div");
            añadir.appendChild(node);
            node.outerHTML = todo.list[i];
        }
    }

}

function remove(element) {
    const tarea = document.getElementById("list");

    let elementParent = element.parentElement;
    let grandfather = elementParent.parentElement;

    for (let i = 0; i < todo.list.length; i++) {
        if (grandfather.outerHTML === todo.list[i]) {
            todo.list = todo.list.filter((outer) => {
                return outer !== grandfather.outerHTML;
            })

            localStorage.setItem("todo", JSON.stringify(todo))
        }
    }

    tarea.removeChild(grandfather);
}

function add () {

    let texto = document.getElementById("input").value;

    if (texto === "") {
        alert("No ha escrito nada.");
    } else {
        texto = document.getElementById("input").value;
        document.getElementById("input").value = ""; 
    
        let añadir = document.getElementById("list");
    
        
        let node = document.createElement("div");
        node.className= "row";
        node.id = "task " + añadir.childElementCount;
        
        
        node.innerHTML = "<div class=\"col-12\"><br></div><div class=col-md-1></div><div class=\"col-md-2 col-lg-1 pr-0\"><button class=\"btn btn-danger tam-boton\" onclick=\"remove(this)\"\"> Elimnar</button></div><div class=\"col-md-8 col-lg-9 ml-3 border border-dark\"><p class=text-center style=\"word-break: break-all\";>" + texto + "</p></div>"

        if (todo === null) {
            todo = {
                list: [node.outerHTML]
            }
            localStorage.setItem("todo", JSON.stringify(todo));
        } else {
            todo.list.push(node.outerHTML);
            localStorage.setItem("todo", JSON.stringify(todo));
        }
        
        añadir.appendChild(node);
    }
}