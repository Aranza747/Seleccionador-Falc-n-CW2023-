window.onload= function(){
    let body = document.getElementById('body');
    let nombreFinal = document.querySelector('.pNombre');
    let imgSus = document.getElementById("imgSus");
    const audio = new Audio('./sus.mp3');
    let alumnos = ["Vicky", "Dulce Ioánnis", "José Manuel", "Saúl",
    "Rodrigo Ulises", "Isaac Arturo", "Ana Pamela", "Jesús Alejandro", "Bruno",
    "Erick Daniel", "Araní Karol", "Emma", "Karen", "Kendra Regina", "Mía",
    "Alexei", "Louis Emilio", "Citlali Abigail", "María Isabel", "Carlos", "Miriam",
    "Stephanie  Guadalupe", "Jorge Miyoshi", "Jorge Emiliano", "Jimena", "Pedro Emiliano",
    "Erick", "Jesús Macedo", "Renata Itzel", "Angélica Valeria", "Britzia Jael",
    "Mariana", "Ernesto Said", "Nelli Jazmín", "Francisco", "José Eduardo", "Regina",
    "Frida Eunice", "José Clemente", "André Ivan", "Nicholas Joseph", "Julio Cesar",
    "Fernanda Daniela", "Ángel David", "Luis Diego", "Emiliano", "Alem", "Daniel Salvador",
    "Luana Sofia", "Ada Damaris", "Ameyalli"];

    console.log(alumnos);
    let boton = document.getElementById("buscar");
    let nombrePantalla = document.getElementById("p_nombre");


    boton.addEventListener("mouseover", ()=>{
        console.log("OVER");
        imgSus.style.opacity = '100';
    })
    boton.addEventListener("mouseleave", ()=>{
        console.log("LEAVE");
        imgSus.style.opacity = '0';
    });


    boton.addEventListener("click", ()=>{
        audio.play();
        
        let numOriginal = Math.floor(Math.random() * (37-1) );
        console.log(numOriginal);
        let contadorNombres=0;
        new Promise((resolve, reject)=>{
            function nombreRandom(){
                let num_random = Math.floor(Math.random() * (37-1) );
                // console.log(alumnos[num_random]);
                nombrePantalla.innerHTML=alumnos[num_random];
                if(contadorNombres<36){
                    contadorNombres++
                    // console.log(contadorNombres);
                }else{
                    clearInterval(idInterval);
                }          
            }   
            let idInterval = setInterval(nombreRandom, 150);

            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    nombrePantalla.innerHTML = alumnos[numOriginal];
                    console.log("Hola");
                    nombreFinal.classList.add('animate__animated', 'animate__tada');                    
                }, 6200);
            })
           
        })

                 
       
        console.log(numOriginal);
        console.log(alumnos[numOriginal]);
        nombrePantalla.innerHTML = alumnos[numOriginal];
        nombreFinal.classList.remove('animate__animated', 'animate__tada');


        // body.style = ;

        // console.log(alumnos[num_random]);
    })
}