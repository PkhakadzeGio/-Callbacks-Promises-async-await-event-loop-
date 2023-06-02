function mySetTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }

async function makeToys(delay){
    await mySetTimeout(delay)
        if(Math.random() > 0.1){
            return "Undefected"
        }else{
            return "defected"
        }
}

async function sellToys(status){
    await mySetTimeout(1000)
        if(status === "Undefected"){
            if(Math.random() > 0.5){
                return "Toy has been sold"
            }else{
                return "Toy was unsuccesful"
            }
        }
}

async function deliverToys(deliver){
   await mySetTimeout(2000)
        if(deliver === "Toy has been sold"){
            if(Math.random() > 0.7){
            return "Toy has been delivered to customer"
        }else{
            return "Toy Lost:)"
        }
    }
}

async function info(){
    try {
        const status = await makeToys(3000)
        const result = await sellToys(status)
        const deliver = await deliverToys(result)
        console.log(deliver)
    } catch (error) {
        console.log(error)
    }
}

info()

