let numeroDeTareas = 0;


function remove(element) {
    const tarea = document.getElementById("list");

    let elementParent = element.parentElement;
    let grandfather = elementParent.parentElement;

    tarea.removeChild(grandfather);
}

function add () {

    let texto = document.getElementById("input").value;
    document.getElementById("input").value = ""; 

    let añadir = document.getElementById("list");

    
    let node = document.createElement("div");
    node.className= "row";
    node.id = "task " + añadir.childElementCount;
    
    
    node.innerHTML = "<div class=\"col-12\"><br></div><div class=col-1></div><div class=\"col-1\"><button class=\"btn btn-danger tam-boton\" onclick=\"remove(this)\"\"> Elimnar</button></div><div class=\"col-9 ml-3 border border-dark\"><p class=text-center style=\"word-break: break-all\";>" + texto + "</p></div>"
    
    añadir.appendChild(node);
    
    console.log(añadir);
}