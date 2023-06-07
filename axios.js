// alert(11)
const control = document.querySelector('#control-center');
const getBtn = document.querySelector('#getBtn');
const postBtn = document.querySelector('#postBtn');


const getData= () => {
    axios.get('https://reqres.in/api/users')
        .then(res =>console.log(res))
}
const sendData = () => {
    axios.post('https://reqres.in/api/users',{
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then(res =>console.log(res.data))
    .catch(err => console.error(err,err.data))
}
getBtn.addEventListener('click',getData)
postBtn .addEventListener('click',sendData)