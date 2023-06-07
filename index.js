// const sendLogin =()=>{
//    ;
//     const user = document.getElementById('user').value
//     const pwd = document.getElementById('pwd').value
//     console.log(user,pwd)
// }

// const form =document.querySelector('#form')
// form.addEventListener('submit',sendLogin,false)
const sendLogin = async (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pwd = document.getElementById('pwd').value;
    console.log(user, pwd);
    try{
         const response = await fetch('http://localhost:3500/auth',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials:'include',
            body: JSON.stringify({user,pwd})
         })
         if(!response.ok){
              if(response.status === 400){
                 return await sendRefreshToken()
              }
              throw new Error(`${response.status} ${response.statusText}`);

         }
         return  await response.json()


    }catch(err){
        console.log(err)
    }
  };
  
  const form = document.getElementById('form'); 
  form.addEventListener('submit', sendLogin, false);

  
//   alert('You are now')
  