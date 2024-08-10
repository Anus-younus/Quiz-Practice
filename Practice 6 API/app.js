const bodyEle = document.querySelector('body')
async function foodApi(){
    try {
        const responce = await fetch(' https://foodish-api.com/',{
            method: 'GET'
        })
        const result = await responce.text()
        bodyEle.innerHTML += result
        console.log(bodyEle);
        
        
    } catch (error) {
        console.error(error);
    }
}

foodApi()