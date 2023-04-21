let origin = window.location.origin;
let logo_path = origin + "/index.html";
let home = origin + "/index.html";
let about = origin + "/pages/about.html";
let search = origin + "/pages/q1.html";
let explore = origin + "/pages/explore.html";
let guidance = origin + "/pages/guidance.html";
let signup = origin + "/pages/resister.html";
let login = origin + "/pages/login.html";
let profile = origin + "/pages/profilepage.html";


let before_login =
    `

<div class="project">
        <div class="header">
            <h1 class="birds"> <a href="./index.html"><b>BIRDS BUDDY</b></h1></a>  
            <ul>
                <li>
                    <a class="navlist" href="${home}">Home</a>
                </li>
                <li>
                    <a class="navlist" href="${about}">About</a>
                </li>
                <li>
                    <a class="navlist" href="${search}">Search</a>
                </li>
                <li>
                    <a class="navlist" href="${explore}">Explore</a>
                </li>
                <li>
                    <a class="guidance" href="${guidance}">Guidance</a>
                </li>
            </ul>
            <a href="${profile}"><i class="fa-regular fa-user"></i>
        </div>
        <div class="second-head">
       <button class="login-button"> <a href="./pages/login.html"><span>Login</span></button></a>
       <button class="signup-button"> <a href="./pages/resister.html"><span>Sign Up</span></button></a>
       </div>
        </div>
        
`
let after_login =

    `
    
    <div class="project">
<div class="header">
    <h1 class="birds"> <a href="${logo_path}"><b>BIRDS BUDDY</b></h1></a>  
    <ul>
        <li>
            <a class="navlist" href="${home}">Home</a>
        </li>
        <li>
            <a class="navlist" href="${about}">About</a>
        </li>
        <li>
            <a class="navlist" href="${search}">Search</a>
        </li>
        <li>
            <a class="navlist" href="${explore}">Explore</a>
        </li>
        <li>
            <a class="guidance" href="${guidance}">Guidance</a>
        </li>
        <li> <span class="login-button" onclick = "logout()"> Log out</span></li>
    </ul>
    <a href="${profile}"><i class="fa-regular fa-user"></i>
</div>

</div> 

`

function header() {
    let userId = JSON.parse(localStorage.getItem("unique"));
    let userlogin = document.getElementById("userlogin");

    if (!userId){
        userlogin.innerHTML = before_login;
    }
    else{
        userlogin.innerHTML = after_login;
    }
}


function logout(){
    if(confirm("Are you sure to log out?")){
        localStorage.removeItem("unique");
        window.location.href = "/index.html"
    }
}