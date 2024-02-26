const button = document.getElementById("button");

button.addEventListener("click", () => {
    
    const host = document.getElementById("host").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const database = document.getElementById("database").value;
    const url = "http://localhost:3030/conexion";

    fetch(url, {
        method: "post",
        body: JSON.stringify({
            host,
            user,
            pass,
            database
        }), 
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(mensaje => {
      document.querySelector("div").innerHTML = mensaje;
    });

});