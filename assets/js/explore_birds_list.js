/* <div class="birdstructure">
<div class="contentleft">
    <a href="../pages/peacock.html"><img
            src="https://media.istockphoto.com/id/1296527895/photo/various-dance-poses-of-an-indian-male-peacock.jpg?b=1&s=170667a&w=0&k=20&c=YTVAukYU4YGaXxNkyu4YLr_oyjRRtVYUMgOFThuyPUU="
            alt="peacoak"></a>
</div>
<div class="contentright">
    <p>
        Name: Peacock<br>
        Scientific Name: Pavo cristatus<br>
        Size : 85cm - 110cm
    </p>
<section class="tooltipsss">
    <div id="tooltip">
        <span id="tooltiptext">Forest</span>
        <span><img src="../assets/Images/big forest.png" alt="forest" height="80px"></Span>
    </div>
    <div id="tooltip">
    <span id="tooltiptext">Insects</span>
    <span><img src="../assets/Images/beetlepng-removebg-preview (1).png" alt="forest" height="80px"></span>
    </div>
    <div id="tooltip">
        <span id="tooltiptext">Fruits</span> 
        <img src="../assets/Images/cherryss-removebg-preview.png" alt="forest" height="80px"> 
    </div>      
    <div id="tooltip">
        <span id="tooltiptext">Plants</span> 
        <span><img src="../assets/Images/plant-removebg-preview.png" alt="forest" height="80px"></span>
    </div>
    <div id="tooltip">
        <span id="tooltiptext">Seeds</span> 
        <img src="../assets/Images/seesd-removebg-preview.png" alt="forest" height="80px">
    </div>
    </section> 

        <div>
            <a href="..//pages/peacock.html">
                <button class="click">Read more ...</button>
            </a>
        </div>
    </div>
</div> */

let div_birdstructure;
let div_contentleft;
let img_card;
let div_contentright;
let p_birds;
// let div_card_body;
// let h5_card_title;
// let p_card_text;

        div_birdstructure = document.createElement("div");
        div_birdstructure.setAttribute("class", "birdstructure");
        console.log("div_birdstructure");
       
        div_contentleft = document.createElement("div");
        div_contentleft.setAttribute("class", "contentleft");
        div_birdstructure.append(div_contentleft);

        img_card = document.createElement("img");
        img_card.setAttribute("src", "https://media.istockphoto.com/id/1296527895/photo/various-dance-poses-of-an-indian-male-peacock.jpg?b=1&s=170667a&w=0&k=20&c=YTVAukYU4YGaXxNkyu4YLr_oyjRRtVYUMgOFThuyPUU=");
        img_card.setAttribute("alt", "peacoak");
        div_contentleft.append(img_card);

        div_contentright = document.createElement("div");
        div_contentright.setAttribute("class", "contentright");
        img_card.append(div_contentleft);

        p_birds = document.createElement("p");
        p_birds.setAttribute("class", " p_birdsy");
        p_birds.innerText = card_text[0];
        div_contentright.append(p_birds);
        

        
        

       
      

