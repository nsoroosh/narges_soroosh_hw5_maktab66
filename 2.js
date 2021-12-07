
function max(input) {
    let arry = []
    for(let i of arguments){
        arry.push(i)
    }
    let result = 0n
    
    if(arry.length ===0){
        throw 'null'
    }
    
    try {
        for (let j = 0; j < arry.length; j++) {
            if(typeof arry[j]!== BigInt && arry[j]>9007199254740991){
                throw 'big error'
            }else if (typeof arry[j]=== 'string' ||arry[j]<= 9007199254740991n){
                arry[j]=BigInt(arry[j])
            }
        }
     } catch (error) {
        
         throw 'big error'
         
         
     }
    for (let u = 0; u < arry.length; u++) {
        if(arry[u]>result){
            result = arry[u]
        }    
        
    }
    console.log(result)
}
 
max("") 
