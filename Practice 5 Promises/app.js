const emailEle = document.querySelector('#email');
const passwordEle = document.querySelector('#password');
const buttonEle = document.querySelector('#submit');

const users = [
    {
        name: "Anus",
        email: "anusyounus@gmail.com",
        password: "anus1234"
    },
    {
        name: "Owais",
        email: "owaisyounus@gmail.com",
        password: "owaiss1234"
    },
    {
        name: "Raza",
        email: "razayounus@gmail.com",
        password: "raza1234"
    },
    {
        name: "Hassan",
        email: "hassanyounus@gmail.com",
        password: "hassan1234"
    },
]

function userAuth(authEmail, authPassword) {
    return new Promise((resolve, reject) => {
        users.map(({name, email, password}) => {
            if(email === authEmail && password === authPassword){
                resolve("succesfuly Login")
            }else{
                reject("Invalied credentials")
            }
        })
    })
}

buttonEle.addEventListener('click', async () => {
    try {
        const responce = await userAuth(emailEle.value, passwordEle.value)
        console.log(responce)
    } catch (error) {
        console.log(error);
    }
})

// const user = new Promise((resolve, reject) => {
//     resolve()
//     reject()
// })