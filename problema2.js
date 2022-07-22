/* 
IASCODE 1 - problema 2 - determina si la secuencia es simétrica

Args:
    adn (string): String con secuencia genética

Returns:
    bool: Booleano True si la secuencia es simétrica y False si no es simétrica
*/
function isSymmetric(adn){
    let half = adn.length/2
    let string1 = adn.slice(0,half)
    let string2 = adn.slice(half,adn.length)
    console.log(string1,string2);
    return string2.split('').reverse().join('') === string1;
}

/* 
No tocar, este handler le entrega a isSymmetric los valores de entrada
*/
function handler(){
    // ¡No tocar!
    const result = isSymmetric(adnInput)
    return result

}
result = handler() // ¡No tocar!
console.log(result);