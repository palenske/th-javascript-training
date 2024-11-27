function catAndMouse(){
    
    const mouse = 10;
    const cat1 = 3;
    const cat2 = 8;

    const distancia1 = Math.abs (cat1 - mouse);
    const distancia2 = Math.abs (cat2 - mouse);
    
    if(distancia1 < distancia2){
        return "o gato1, que corresponde a posição " + cat1 + " está mais próximo do rato";
    } else {
        return "o gato 2, que corresponde a posição " + cat2 + " está mais próximo do rato";
    }
}

console.log(catAndMouse());