async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    localStorage

    const data = {
        email,
        password
    };

    const response = await fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();
    console.log(result);
    if (result.success) {
        window.location.href = "./SiteEscola.html"
    } else {
        alert(result.message);
    }
}