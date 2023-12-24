let users=[]

const add=()=>
{
    
    let temp=JSON.parse(localStorage.getItem("list"))

    let Name=document.getElementById("nm").value
    let Email=document.getElementById("em").value
    let Pass=document.getElementById("ps").value
    let Conpass=document.getElementById("cps").value

    let user={Name,Email,Pass,Conpass}

    if(Pass!==Conpass)
    {
        alert("Password and confirmation password do not match");
        return;
    }
    else{
        users=temp;
        users=[...users,user]
    }
    localStorage.setItem("list", JSON.stringify(users))
    
    document.getElementById('nm').value="";
    document.getElementById('em').value="";
    document.getElementById('ps').value="";
    document.getElementById('cps').value="";

    location.href="login1.html"

}

