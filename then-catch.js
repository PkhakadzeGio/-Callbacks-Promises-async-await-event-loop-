function makeToys(delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1){
                resolve("Undefected")
            }else{
                reject("Defected")
            }
        },delay)
    })
}

function sellToys(status){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status === "Undefected"){
                if(Math.random() > 0.5){
                    resolve('Toys has been sold')
                } else{
                    reject('Toy was unsuccessful')
                }
            }  
        })
    })
}

function deliverToys(status){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status === "Toys has been sold" ){
                if(Math.random() > 0.7){
                    resolve('Toy has been delivered to customer')
                }else{
                    reject('Toy Lost:)')
                }
            }
        })
    })
}

makeToys(3000)
          .then(res => sellToys(res))
          .then(res => deliverToys(res))
          .then(res => console.log(res))
          .catch(err => console.log(err))