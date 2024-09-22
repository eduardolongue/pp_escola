let button = document.getElementById("submit");
 
button.onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    console.log(email, password, name);
 
 
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let results = regexEmail.test(email);
    console.log(results);
   

    let data = {name, email, password };
    console.log(data)

    const response = await fetch('http://localhost:3005/api/user/create', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
        swal({
            title: "Parabéns!",
            text: "Você foi cadastrado com sucesso!",
            icon: "success",
        });
    } else {
        swal({
            title: "Email já cadastrado",
            icon: "error",
        });
    }
}
