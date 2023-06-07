const control = document.querySelector('#control-center');
const getBtn = document.querySelector('#getBtn');
const postBtn = document.querySelector('#postBtn');

const sendHttpRequest = (method,url,data)=>{
    const promise = new Promise((resolve,reject) =>{
       const xhr = new XMLHttpRequest();
       xhr.open(method,url);
       if(data){
        
         xhr.responseType = 'json'
       }
       xhr.setRequestHeader("Content-Type", "application/json");
       xhr.onload =()=>{
        if(xhr.status >= 400){
          reject(xhr.response)
        }else {

          resolve(xhr.response)
        }
       }
       xhr.onerror=()=>{
        reject('something went wrong')
       }
       xhr.send(JSON.stringify(data));
    })
    return promise;
}

const getData=()=>{
      // const xhr = new XMLHttpRequest();
      // xhr.open('GET','https://reqres.in/api/users')
      // xhr.onload=()=>{
      //   console.log(xhr.response);
      //   const data = JSON.parse(xhr.response)
      //   console.log(data  );
      // }
      // xhr.send();
      sendHttpRequest('GET','https://reqres.in/api/users')
      .then(response => console.log(response))

}
const sendData=()=>{
  sendHttpRequest('POST','https://reqres.in/api/register',{
    email:'test@test.com',
    password:'tested'
  })
  .then(response => console.log(response))
  .catch(err => console.error(err))

}   


getBtn.addEventListener('click',getData)
postBtn .addEventListener('click',sendData)

// alert('hellocontrol')