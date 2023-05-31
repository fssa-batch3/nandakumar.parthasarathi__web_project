const origin = window.location.origin;
const logo_path = "/index.html";
const about = "/pages/about.html";
const identify = "/pages/q1.html";
const explore = "/pages/explore.html";
const guidance = "/pages/guidance.html";
const signup = "/pages/resister.html";
const login = "/pages/login.html";
const profile = "/pages/profilepage.html";
console.log("raj")
const before_login = `
        <div class="header">
            <h1 class="birds"> <a href="./index.html"><b>BIRDS BUDDY</b></h1></a>  
            <ul>
                <li>
                    <a class="navlist" href="${logo_path}">Home</a>
                </li>
                <li>
                    <a class="navlist" href="${about}">About</a>
                </li>
                <li>
                    <a class="navlist" href="${identify}">Identify Bird</a>
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
       <button class="login-button"> <a href="${signup}"><span>Login</span></button></a>
       <button class="signup-button"> <a href="${login}"><span>Sign Up</span></button></a>
       </div>
          
`;


const after_login = `  
    
<div class="header">
    <h1 class="birds"> <a href="${logo_path}"><b>BIRDS BUDDY</b></h1></a>  
    <ul>
        <li>
            <a class="navlist" href="${logo_path}">Home</a>
        </li>
        <li>
            <a class="navlist" href="${about}">About</a>
        </li>
        <li>
            <a class="navlist" href="${identify}">Identify Bird</a>
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
    
</div>
`;

// function headerPage() {
//     const userId = JSON.parse(localStorage.getItem('unique'));
//     const userlogin = document.getElementById('userlogin');

//     if (!userId) {
//         userlogin.innerHTML = before_login;
//     } else {
//         userlogin.innerHTML = after_login;

//     }
// }
const userId = JSON.parse(localStorage.getItem('unique'));
if(userId){
    document.body.insertAdjacentHTML("afterbegin",after_login )
}
else{
    document.body.insertAdjacentHTML("afterbegin",before_login)
}

