const queryAPi = ()=>{
    fetch('https://dog.ceo/api/breeds/list/all')
        .then( response => response.json()) //tipo de dato que espero
        .then( result =>{ console.log(result);}) //resultado de la consulta
        .catch( error => console.log("Error:", error)) //error en la consulta
        .finally(()=>{ console.log('fin de consulta')}) //una acción que se ejecuta al final de la consulta
}

// queryAPi();








async function DogApi() {
    try {
        const respuesta = await fetch("https://dog.ceo/api/breeds/list/all");
        const data =  await respuesta.json()
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("fin de consulta");
    }
}

DogApi();