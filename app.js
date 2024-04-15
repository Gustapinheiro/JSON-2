
function dados(){
 const ds = [
       
    {id:1,login:"paul",senha:"1234",email:"paul@gmail.com"},
      
    {id:2,login:"Self",senha:"4321",email:"self@gmail.com"},
       
    {id:3,login:"jota",senha:"2341",email:"eojota@gmail.com"},
    
]


    return ds
}
function addAll (){
         const ds = dados()
         const da = JSON.stringify(ds)
 localStorage.setItem("banco", da)


          alert("adicionado com sucesso!")
}


function addUser(){
           const ds = JSON.parse(localStorage.getItem("banco"))
    localStorage.removeItem("banco")

        let lg = document.querySelector("#login").value
        let sn = document.querySelector("#senha").value
         let em = document.querySelector("#email").value

               let n =  {id:Date.now(),login:lg,senha:sn,email:em}

    ds.push(n)

            const json = JSON.stringify(ds)

     localStorage.setItem("banco", json)
}

function selectUser(){
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
}

    for(let i=0;i<ds.length;i++){
        if(lg == ds[i].login){
            document.getElementById("id").value = ds[i].id
            document.getElementById("login").value = ds[i].login
            document.getElementById("senha").value = ds[i].senha
            document.getElementById("email").value = ds[i].email
    }
}