

const myPromise = (statusCode) =>{
    return new Promise((resolve, reject)=>{
                if(statusCode){
                    setInterval(()=>{
                        resolve('Data fetched suucessfully .')
                    }, 5000)
                }else{
                    setInterval(()=>{
                        reject('Data not found.')
                    }, 5000)
                   
                }
    })
}

const awaitFunction = async ()=>{
    const statusCode = false
    console.log('fetching data ...');
    const message = await myPromise(statusCode)
    console.log(message);
}


awaitFunction();




