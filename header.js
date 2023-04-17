const root = window.location.origin;

const after_login = 
`
<div class="project">
        <div class="header">
            <h1 class="birds"><b>BIRDS BUDDY</b></h1>
            <ul>
                <li>
                    <a class="navlist" href="./index.html">Home</a>
                </li>
                <li>
                    <a class="navlist" href="./pages/about.html">About</a>
                </li>
                <li>
                    <a class="navlist" href="./pages/q1.html">Search</a>
                </li>
                <li>
                    <a class="navlist" href="./pages/explore.html">Explore</a>
                </li>
                <li>
                    <a class="guidance" href="./pages/guidance.html">Guidance</a>
                </li>
            </ul>
            <a href="./pages/profilepage.html"><i class="fa-regular fa-user"></i>
        </div>
        <div class="second-head">
       <button class="login-button"> <a href="./pages/login.html"><span>Login</span></button></a>
       <button class="signup-button"> <a href="./pages/resister.html"><span>Sign Up</span></button></a>
       </div>
        </div>
`
const  before_login =
`<div class="project">
<div class="header">
    <h1 class="birds"><b>BIRDS BUDDY</b></h1>
    <ul>
        <li>
            <a class="navlist" href="./index.html">Home</a>
        </li>
        <li>
            <a class="navlist" href="./pages/about.html">About</a>
        </li>
        <li>
            <a class="navlist" href="./pages/q1.html">Search</a>
        </li>
        <li>
            <a class="navlist" href="./pages/explore.html">Explore</a>
        </li>
        <li>
            <a class="guidance" href="./pages/guidance.html">Guidance</a>
        </li>
    </ul>
    <a href="./pages/profilepage.html"><i class="fa-regular fa-user"></i>
</div>
<div class="second-head">
<button class="login-button"> <a href="./pages/login.html"><span>Login</span></button></a>
<button class="signup-button"> <a href="./pages/resister.html"><span>Sign Up</span></button></a>
</div>
</div> 
`
let unique_id1 = JSON.parse(localStorage.getItem("unique"));
console.log(unique_id1);
if(unique_id1 ){
    document.body.insertAdjacentHTML("afterbegin",after_login);
    const logout = document.querySelector("#logout");
    logout?.addEventListener("click", () => {
        localStorage.removeItem("unique");
        document.body.innerHTML = before_login;
    });
}
else{
    document.body.insertAdjacentHTML("beforebegin",before_login);
    const logout = document.querySelector("#logout");
    logout?.removeEventListener("click", () =>
    document.body.innerHTML = after_login);
    localStorage.removeItem("unique");
};