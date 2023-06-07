const control = document.querySelector('#control-center');
const getBtn = document.querySelector('#getBtn');
const postBtn = document.querySelector('#postBtn');

const sendHttpRequest =(method,url,data)=>{
        return  fetch(url,{
            method: method,
            body: JSON.stringify(data),
            headers: data ?{"Content-Type": "application/json"} : {}
        })
        .then(res =>{
            if(res.status >= 400){
                 return res.json()
                 .then(errResData =>{
                     const error = new Error('something went wrong')
                     error.data = errResData
                     throw error;     
                 })
            }
             return res.json()}
             )
        
}

const getData = () => {
    sendHttpRequest('GET','https://reqres.in/api/users')
    .then(res => console.log(res))
   
}
const sendData = () => {
    sendHttpRequest('POST','https://reqres.in/api/register',{
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}


getBtn.addEventListener('click',getData)
postBtn .addEventListener('click',sendData)
// alert(12)