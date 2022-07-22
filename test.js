/* 
IASCODE 1 - problema 1 - encuentra las coordenadas del ICBM

Args:
    coordinates (array[number]): Array de números flotantes con las coordenadas 
    targetSum (number): Valor flotante con suma objetiva 

Returns:
    array[number]: Array con dos números flotantes representando las coordenadas del ICBM
*/
// function calculateCoordinates(coordinates, targetSum){
//     let s = new Set();
//     for (let i = 0; i < coordinates.length; i++) 
//     {
//         let temp = targetSum - coordinates[i];
//         if (s.has(temp)) {
//             console.log(temp+coordinates[i]);
//         }
//         s.add(coordinates[i]);
//     }
// }
function calculateCoordinates(coordinates, targetSum){
    let s = new Set();
    
    for (let i = 0; i < coordinates.length; ++i) 
    {
        let temp = targetSum - coordinates[i];
        if (s.has(parseFloat(temp.toFixed(5)))) {
            console.log(coordinates[i],temp);
            return [coordinates[i],parseFloat(temp.toFixed(5))]
        }
        s.add(coordinates[i]);
    }
}

/* 
No tocar, este handler le entrega a calculateCoordinates los valores de entrada
*/
function handler(){
    
    coordinates=[ -0.9778, 25.63445, 93.46104, -39.04896 ]
    targetSum= -40.02676
    // ¡No tocar!
    const result = calculateCoordinates(coordinates, targetSum)
    // if(result[0] > result[1]){
    //     return [result[0], result[1]]
    // } 

    // return [result[1], result[0]]
}
result = handler() // ¡No tocar!
console.log(result);