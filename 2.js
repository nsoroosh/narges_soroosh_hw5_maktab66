function max(input) {
    let result=0n
    for(let i of arguments){
        let arry = []
        
        if(typeof arguments=='string'){
            arguments=BigInt(arguments)
            arry.push(arguments)
        }else if(arguments<= 9007199254740991n){
            arguments=BigInt(arguments)
        }else if(arguments.length===0){
            return 'null'
        }else if(typeof(arguments)===BigInt){
            
            for(let i in arguments){
                if(arguments[i]<arguments[i+1]){
                    result=arguments[i+1]
                }
            }
        }
    }
    return result
}
console.log(max(1n, 10n, 5n))
