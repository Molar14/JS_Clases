let a=0

function Saludo(nombre){
    if (nombre==undefined){
        console.log(`Hola amigo!`)
    }
    else{
        console.log(`Hola ${nombre}!`)
    }    
}
Saludo()
Saludo("Diablo")

function global(){
    a=a+1
    console.log(a)
}
global()
global()

function Prueba(numero){
    if(numero%2==0){
        console.log("Ese numero es par")
    }
    else{
        console.log("ese es inpar")
    }
}
Prueba(5)
Prueba(6)