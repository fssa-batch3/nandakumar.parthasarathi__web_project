// function signUp(e) {
//     e.preventDefault();

//     let user_name = document.getElementById("user_name").value,
//         user_number = document.getElementById("user_number").value,
//         user_password = document.getElementById("user_password").value,
//         confirm_password = document.getElementById("confirm_password").value;


//     //User Register //

//     function checkpass() {
//         if (user_password != confirm_password) {
//             alert("Incorrect username or password")
//             document.getElementById('user_password').reset();
//         }
//     }
//     checkpass();

//     let user_list = JSON.parse(localStorage.getItem('user_list')) || [];

//     let exist = user_list.length &&
//         JSON.parse(localStorage.getItem('user_list')).some(data =>
//             data.user_name.toLowerCase() == user_name.toLowerCase() ||
//             data.user_number == user_number
//         );

//     if (!exist) {
//         user_list.push({
//             user_name,
//             user_number,
//             user_password,
//             confirm_password
//         });

//         localStorage.setItem('user_list', JSON.stringify(user_list));

//         console.log(localStorage.getItem('user_list'));

//         document.querySelector('form').reset();

//         document.getElementById('user_name').focus();
//         document.getElementById('user_number').focus();

//         alert('Account created Successfully');
//         location.href = "../pages/login.html";
//     } else {
//         alert('Sorry the User already Exist!! \n Try with different Phone number or name');
//         document.querySelector('form').reset();
//     }
// }

// document.getElementsByTagName("h1")[0].style.fontSize = "20px";


// //User Login //

// function signIn(e) {
//     e.preventDefault();

//     let user_name = document.getElementById('user_name').value,
//         user_password = document.getElementById('user_password').value;
//     user_number = document.getElementById('user_number').value;

//     let user_list = JSON.parse(localStorage.getItem('user_list'));

//     let exist = user_list.length &&
//         JSON.parse(localStorage.getItem('user_list')).some(data =>
//             data.user_name.toLowerCase() == user_name.toLowerCase() &&
//             data.user_password.toLowerCase() == user_password.toLowerCase() &&
//             data.user_number == user_number);


//     if (!exist) {
//         alert("Incorrect login credentials");
//     } else {
//         alert("Your login in successful");
//         localStorage.setItem("unique", user_number);
//         location.href = "../index.html";
//     }

// }

// document.getElementsByTagName("h1")[0].style.fontSize = "20px";

// //User Profile //

// let user_list = JSON.parse(localStorage.getItem('user_list'));
// let unique_id = JSON.parse(localStorage.getItem('unique'));

// function profile_data(e) {
//     return e.user_number == unique_id;
// }

// let user_data = user_list.find(profile_data);

// document.getElementById("user_name").value = user_data["user_name"];
// document.getElementById("user_number").value = user_data["user_number"];

// function update(e) {

//     let user_name = document.getElementById("user_name").value;
//     let user_number = document.getElementById("user_number").value;

//     user_data["user_name"] = user_name;
//     user_data["user_number"] = user_number;

//     localStorage.setItem("user_list", JSON.stringify(user_list));
//     alert("Your Data is Successfully Stored");
// }

// function del(e) {
//     if (confirm("Are you sure you want to delete your profile")) {
//         let users = JSON.parse(localStorage.getItem('user_list'));
//         let unique_id = JSON.parse(localStorage.getItem('unique'));

//         function login_data(e) {
//             return e.user_number == unique_id;
//         }

//         let user_data = users.find(login_data);
//         console.log(login_data)
//     }
// }

// function log_out(e) {
//     alert("are you sure you want to logout")
//     localStorage.removeItem("unique");
//     window.location.href = "../index.html";
// }


// //Create bird //

// const indian_birds_list = JSON.parse(localStorage.getItem("bird_info_details"))

// for (let i = 0; i < indian_birds_list.length; i++) {

//     //div_birdstructure
//     div_birdstructure = document.createElement("div");
//     div_birdstructure.setAttribute("class", "birdstructure");

//     //div_contentleft
//     div_contentleft = document.createElement("div");
//     div_contentleft.setAttribute("class", "contentleft");
//     div_birdstructure.append(div_contentleft);

//     //img_card
//     img_card = document.createElement("img");
//     img_card.setAttribute("src", indian_birds_list[i]["main_image"]);
//     img_card.setAttribute("alt", indian_birds_list[i]["bird_name"]);
//     div_contentleft.append(img_card);

//     //div_contentright
//     div_contentright = document.createElement("div");
//     div_contentright.setAttribute("class", "contentright");
//     div_birdstructure.append(div_contentright);

//     //p_birdpara
//     p_birdpara_1 = document.createElement("p");
//     p_birdpara_1.setAttribute("class", "birdpara");
//     p_birdpara_1.innerText = "Name: " + indian_birds_list[i]["bird_name"];
//     div_contentright.append(p_birdpara_1);

//     //p_birdpara
//     p_birdpara_2 = document.createElement("p");
//     p_birdpara_2.setAttribute("class", "birdpara");
//     p_birdpara_2.innerText = " Scientific Name: " + indian_birds_list[i]["scientific_name"];
//     div_contentright.append(p_birdpara_2);

//     //p_birdpara
//     p_birdpara_3 = document.createElement("p");
//     p_birdpara_3.setAttribute("class", "birdpara");
//     p_birdpara_3.innerText = "Size : " + indian_birds_list[i]["size"];
//     div_contentright.append(p_birdpara_3);

//     //div_tooltipsss
//     div_tooltipsss = document.createElement("div");
//     div_tooltipsss.setAttribute("class", "tooltipsss");
//     div_contentright.append(div_tooltipsss);

//     // div_readmore
//     div_readmore = document.createElement("div");
//     div_contentright.append(div_readmore);

//     // div_anchor
//     div_anchor = document.createElement("a")
//     div_anchor.setAttribute("href", "../../pages/form/birds.detailpage.html?bird_info_details_uuid=" +
//         indian_birds_list[i]["bird_info_details_uuid"])
//     div_readmore.append(div_anchor);

//     //read_button
//     read_button = document.createElement("button");
//     read_button.setAttribute("class", "click");
//     read_button.setAttribute("type", "button");
//     read_button.innerText = "Read more...";
//     div_anchor.append(read_button);

//     //edit_button
//     edit_button = document.createElement("a");
//     edit_button.setAttribute("class", "edit");
//     edit_button.setAttribute("href", `../form/update.html?birds_unique_id=${ indian_birds_list[i].bird_info_details_uuid}`)
//     edit_button.innerText = "Edit";
//     div_readmore.append(edit_button);

//     div_tooltip = document.createElement("div");
//     div_tooltip.setAttribute("id", "tooltip");
//     div_tooltipsss.append(div_tooltip);

//     img_card_1 = document.createElement("img");
//     img_card_1.setAttribute("src", indian_birds_list[i]["habitat"]);
//     img_card_1.setAttribute("alt", "forest");
//     img_card_1.setAttribute("height", "80px");
//     div_tooltip.append(img_card_1);

//     document.querySelector("section.detail_about_bird").append(div_birdstructure);
// }

// function readmore() {
//     window.location.href = "../../pages/form/birds.detailpage.html"
// }


// //bird form//

// document.getElementById('crete_bird_info').addEventListener("submit", function (e) {
//     e.preventDefault();
//     let mainimage = document.getElementById("mainimage").value;
//     let birdStage1 = document.getElementById("b_stage-1").value;
//     let birdStage2 = document.getElementById("b_stage-2").value;
//     let birdStage3 = document.getElementById("b_stage-3").value;
//     let birdStage4 = document.getElementById("b_stage-4").value;
//     let name = document.getElementById("birdname").value;
//     let scientific_Name = document.getElementById("scientificname").value;
//     let size = document.getElementById("size").value;
//     let habitat = document.getElementById("habitat").value;
//     let foodimage1 = document.getElementById("food1").value;
//     let foodimage2 = document.getElementById("food2").value;
//     let foodimage3 = document.getElementById("food3").value;
//     let foodimage4 = document.getElementById("food4").value;
//     let des1 = document.getElementById("des1").value;
//     let des2 = document.getElementById("des2").value;
//     let des3 = document.getElementById("des3").value;
//     let des4 = document.getElementById("des4").value;
//     let bird_info_details_uuid = uuidv4();

//     let bird_info_details = JSON.parse(localStorage.getItem('bird_info_details')) || [];

//     let exist = bird_info_details.some(data =>
//         data.birdStage1 == birdStage1 &&
//         data.birdStage2 == birdStage2 &&
//         data.birdStage3 == birdStage3 &&
//         data.birdStage4 == birdStage4 &&
//         data.name == data.name &&
//         data.scientific_Name == data.scientific_Name &&
//         data.size == data.size &&
//         data.habitat == data.habitat &&
//         data.foodimage1 == data.foodimage1 &&
//         data.foodimage2 == data.foodimage2 &&
//         data.foodimage3 == data.foodimage3 &&
//         data.foodimage4 == data.foodimage4 &&
//         data.des1 == data.des1 &&
//         data.des2 == data.des2 &&
//         data.des3 == data.des3 &&
//         data.des4 == data.des4 &&
//         data.bird_info_details_uuid == bird_info_details_uuid
//     );

//     if (!exist) {
//         bird_info_details.push({
//             "main_image": mainimage,
//             "birds_stages": {
//                 "birdStage1": birdStage1,
//                 "birdStage2": birdStage2,
//                 "birdStage3": birdStage3,
//                 "birdStage4": birdStage4
//             },
//             "bird_name": name,
//             "scientific_name": scientific_Name,
//             "size": size,
//             "habitat": habitat,
//             "food types": {
//                 "foodimage1": foodimage1,
//                 "foodimage2": foodimage2,
//                 "foodimage3": foodimage3,
//                 "foodimage4": foodimage4
//             },
//             "description1": des1,
//             "description2": des2,
//             "description3": des3,
//             "description4": des4,
//             "bird_info_details_uuid": bird_info_details_uuid

//         });
//         localStorage.setItem('bird_info_details', JSON.stringify(bird_info_details));

//         alert("Bird Details Created!");
//         window.location.href = "../../pages/explore.html";
//     }
// })


// //update and bird //



// // Get the query string from the current URL
// const queryString = window.location.search;

// // Create a new URL object with the query string
// const url = new URL(`https://example.com${queryString}`); // Replace 'https://example.com' with your actual domain name

// // Retrieve the value of the 'birds_unique_id' query parameter
// const birdsUniqueId = url.searchParams.get('birds_unique_id');

// let bird_info_details = JSON.parse(localStorage.getItem('bird_info_details'));

// let all_birds_data = bird_info_details.find(e => e.bird_info_details_uuid === birdsUniqueId);
// let all_birds_data_index = bird_info_details.indexOf(all_birds_data);

// document.getElementById("mainimage").value = all_birds_data["main_image"];
// document.getElementById("b_stage-1").value = all_birds_data["birds_stages"]["birdStage1"];
// document.getElementById("b_stage-2").value = all_birds_data["birds_stages"]["birdStage2"];
// document.getElementById("b_stage-3").value = all_birds_data["birds_stages"]["birdStage3"];
// document.getElementById("b_stage-4").value = all_birds_data["birds_stages"]["birdStage4"];
// document.getElementById("birdname").value = all_birds_data["bird_name"];
// document.getElementById("scientificname").value = all_birds_data["scientific_name"];
// document.getElementById("size").value = all_birds_data["size"];
// document.getElementById("habitat").value = all_birds_data["habitat"];
// document.getElementById("food1").value = all_birds_data["food types"]["foodimage1"];
// document.getElementById("food2").value = all_birds_data["food types"]["foodimage2"];
// document.getElementById("food3").value = all_birds_data["food types"]["foodimage3"];
// document.getElementById("food4").value = all_birds_data["food types"]["foodimage4"];
// document.getElementById("des1").value = all_birds_data["description1"];
// document.getElementById("des2").value = all_birds_data["description2"];
// document.getElementById("des3").value = all_birds_data["description3"];
// document.getElementById("des4").value = all_birds_data["description4"];


// function update() {
//     all_birds_data["mainimage"] = document.getElementById("mainimage").value;
//     all_birds_data["birds_stages"]["birdStage1"] = document.getElementById("b_stage-1").value;
//     all_birds_data["birds_stages"]["birdStage2"] = document.getElementById("b_stage-2").value;
//     all_birds_data["birds_stages"]["birdStage3"] = document.getElementById("b_stage-3").value;
//     all_birds_data["birds_stages"]["birdStage4"] = document.getElementById("b_stage-4").value;
//     all_birds_data["bird_name"] = document.getElementById("birdname").value;
//     all_birds_data["scientific_name"] = document.getElementById("scientificname").value;
//     all_birds_data["size"] = document.getElementById("size").value;
//     all_birds_data["habitat"] = document.getElementById("habitat").value;
//     all_birds_data["food types"]["foodimage1"] = document.getElementById("food1").value;
//     all_birds_data["food types"]["foodimage2"] = document.getElementById("food2").value;
//     all_birds_data["food types"]["foodimage3"] = document.getElementById("food3").value;
//     all_birds_data["food types"]["foodimage4"] = document.getElementById("food4").value;
//     all_birds_data["description1"] = document.getElementById("des1").value;
//     all_birds_data["description2"] = document.getElementById("des2").value;
//     all_birds_data["description3"] = document.getElementById("des3").value;
//     all_birds_data["description4"] = document.getElementById("des4").value;

//     localStorage.setItem("bird_info_details", JSON.stringify(bird_info_details));
//     alert("Your Birds Data is Successfully Updated");
// }

// document.getElementById("save_details_of_birds").addEventListener("click", update)

// function deleteBird() {
//     if (confirm("Are you want to delete bird details")) {
//         bird_info_details.splice(all_birds_data_index, 1);
//         localStorage.setItem("bird_info_details", JSON.stringify(bird_info_details));
//         window.location.href = "../form/create_bird.html";
//     }
// }

// document.getElementById("cancel").addEventListener("click", deleteBird);



// // Scroll Indicator//

// // When the user scrolls the page, execute myFunction 
// window.onscroll = function () {
//     myFunction()
// };

// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";
// }

// const cursor = document.querySelector(".cursor");
// var timeout;

// //follow coursor on mousemove
// document.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";

//     //cursor effect when mouse stopped
//     function mouseStopped() {
//         cursor.style.display = "none";
//     }
//     clearTimeout(timeout);
//     timeout = setTimeout(mouseStopped, 5000);
// });

// //cursor effects when mouseout
// document.addEventListener("mouseout", () => {
//     cursor.style.display = "none";

// });

// //Search bar//


// const search = () => {
//     const searchbar = document.getElementById("searchbar").value.toLowerCase();
//     const all_birds = document.getElementById("all_birds");
//     const birdstructure = document.querySelectorAll(".birdstructure"); // Added dot before "birdstructure" to denote class name
//     const birds = document.getElementsByTagName("p");
//     for (var i = 0; i < bird_info_details.length; i++) {
//         let match = birdstructure[i].getElementsByTagName('p')[0]; // Changed "box" to "birdstructure" to match the variable name
//         if (match) {
//             let textvalue = match.textContent || match.innerHTML;
//             if (textvalue.toLowerCase().indexOf(searchbar) > -1) { // Changed "searchbox" to "searchbar" to match the variable name
//                 birdstructure[i].style.display = ""; // Changed "box" to "birdstructure" to match the variable name
//             } else {
//                 birdstructure[i].style.display = "none"; // Changed "box" to "birdstructure" to match the variable name
//             }
//         }
//     }
// }








// let bird_info_details = JSON.parse(localStorage.getItem("bird_info_details")) || [];

// for (let i = 0; i < bird_info_details.length; i++) {

//     //div_birdstructure
//     div_birdstructure = document.createElement("div");
//     div_birdstructure.setAttribute("class", "birdstructure");
//     // console.log(div_birdstructure);

//     //div_contentleft
//     div_contentleft = document.createElement("div");
//     div_contentleft.setAttribute("class", "contentleft");
//     div_birdstructure.append(div_contentleft);

//     //img_card
//     img_card = document.createElement("img");
//     img_card.setAttribute("src", bird_info_details[i]["main_image"]);
//     // img_card.setAttribute("alt", bird_info_details[i]["image"]);
//     div_contentleft.append(img_card);

//     //div_contentright
//     div_contentright = document.createElement("div");
//     div_contentright.setAttribute("class", "contentright");
//     div_birdstructure.append(div_contentright);

//     //p_birdpara
//     p_birdpara = document.createElement("p");
//     p_birdpara.setAttribute("class", "birdpara");
//     p_birdpara.innerText = "Name: " + bird_info_details[i]["bird_name"];
//     div_contentright.append(p_birdpara);

//     //p_birdpara
//     p_birdpara = document.createElement("p");
//     p_birdpara.setAttribute("class", "birdpara");
//     p_birdpara.innerText = " Scientific Name: " + bird_info_details[i]["scientific_name"];
//     div_contentright.append(p_birdpara);

//     //p_birdpara
//     p_birdpara = document.createElement("p");
//     p_birdpara.setAttribute("class", "birdpara");
//     p_birdpara.innerText = "Size : " + bird_info_details[i]["size"];
//     div_contentright.append(p_birdpara);

//     //div_tooltipsss
//     div_tooltipsss = document.createElement("div");
//     div_tooltipsss.setAttribute("class", "tooltipsss");
//     div_contentright.append(div_tooltipsss);

//     // div_readmore
//     div_readmore = document.createElement("div");
//     div_contentright.append(div_readmore);

//     //read_button
//     read_button = document.createElement("a");
//     read_button.setAttribute("class", "click");
//     p_birdpara.innerText = "Read more..."
//     read_button.setAttribute("href", "../pages/read.html?bird_id=" + bird_info_details[i]["bird_info_details_uuid"]);
//     read_button.innerText = "Read more...";
//     div_readmore.append(read_button);

//     div_tooltip = document.createElement("div");
//     div_tooltip.setAttribute("id", "tooltip");
//     div_tooltipsss.append(div_tooltip);

//     span_tooltiptext = document.createElement("span");
//     span_tooltiptext.setAttribute("id", "tooltiptext");
//     span_tooltiptext.innerText = "Forest";
//     div_tooltip.append(span_tooltiptext);

//     img_card_1 = document.createElement("img");
//     img_card_1.setAttribute("src", bird_info_details[i]["habitat"]);
//     img_card_1.setAttribute("height", "80px");
//     div_tooltip.append(img_card_1);

//     document.querySelector("section.detail_about_bird").append(div_birdstructure);

// }



// function click_readmore() {
//     location.href = "../pages/form/birds.detailpage.html"
// }


const bird_info_details = JSON.parse(localStorage.getItem("bird_info_details"));

if (!bird_info_details) {
    localStorage.setItem("bird_info_details", JSON.stringify(
        [{
            bird_info_details_uuid: "6ed763ff-7c81-40b6-97b7-23ce59f11c15",
            bird_name: "Wood peacker",

            birds_stages: {
                birdStage1: "https://iili.io/HvI3GX1.jpg",
                birdStage2: "https://iili.io/HvI3th7.jpg",
                birdStage3: "https://iili.io/HvIF2pV.jpg",
                birdStage4: "https://iili.io/HvIFfQ1.jpg"
            },
            description1: "About bird : \"Woodpeckers scientific name is Picinea which is a part of the family Picidae. The subfamily Picinea has a variety of 180 birds including Woodpeckers. As the name suggests, it is famous for pecking into the woods. Most of the time they are found on the trunk of a tree, striking into the woods to find insects. They also peck dead woods to make nest holes where they can live. Woodpeckers are commonly found worldwide except in a few places. These excluded areas are New Zealand, New Guinea, Australia, and polar regions. These stunning birds are amply found in Southeast Asian and South American countries. They mostly like to live in forests and woodland areas where they can get enough trees. However, only some species like the Gila Woodpecker survive in rocky or desert areas. Some Woodpeckers don't peck wood at all. They survive in the ground by making holes through the grounds to form their nests. Also, they pick up insects from the ground for a living. These Woodpeckers are found in rocky and grassy mountains located in South Africa.\"\"\n",
            description2: "General Characteristics : \"Woodpecker information may vary as there are multiple types. The size of Woodpeckers starts from 7cm in length. Also, some Woodpeckers are 50cm long! This means some Woodpeckers may weigh around 0.25 oz while other types may have a weight of around 20 oz. The colors of Woodpeckers are diverse. Some are multicolored while some have black bodies tinted with olive and brown. The common Woodpeckers in Southern Asia have black bodies with white spots and yellow shades along with red feathers on the head. These color combinations are important for camouflage. Except for some, most Woodpeckers have short legs with zygodactyl feet. While two toes face forward, the other two are bent backward. This toe arrangement helps them to get a good grip of the trunk and move vertically up to the tree. Woodpeckers have sharp and strong beaks for effective drilling into the trunk. The long sticky tongue helps them grasp insects. To prevent brain damage due to repeated drilling and pecking, Woodpeckers have certain features. Woodpeckers have a flexible and small brain. Its subdural cavity is narrow with minimal CSF which controls and restricts the movement of the brain inside the skull preventing severe brain damage. The CSF also monitors brain orientation with the skull allowing short contact. The skull has soft and flexible bones covering the forehead and the backside of the skull. Another special feature is the hyoid bone. This bone supports the skull as well as the spinal cord. It goes around the braincase going through both sides of the spinal cord and ends at the right nostril cavity. This bone safeguards the brain.\n",
            description3: "Life styes :Lifestyles are different for different species. Some Woodpeckers live solitary lives while some prefer to live in a group. Their common behaviors include head shaking and sharp vocalization. They are also known for heavily drilling and pecking through the woods. Woodpeckers roam in the daylight and rest in their nest at night. Drumming is a common characteristic of the Woodpecker bird. They peck into the wood vigorously and repeatedly. They take breaks and start drumming again. Male Woodpeckers do this more often than female Woodpeckers. This works like a territorial call. This is a sign to other Woodpecker mates and various drumming patterns have different meanings that the species understand. Their voice is high-pitched and different Woodpeckers have diverse ways of calling. Some Woodpeckers make rattling sounds while the other species whistle. Some species wail and scream. Some other Woodpeckers make nasal churrs. However, each type of calling pattern carries a message to the fellow Woodpeckers. Some calls denote danger while some calls indicate a call for food. Woodcutter birds often make low-pitched sounds as well. Woodpecker couples usually make low-pitched sounds when they are in the nest. The interval between each call also carries a message to the other Woodpeckers.\n",
            description4: "Breeding pattern : The main features of Woodpecker include making holes in the barks and making nests inside the holes. They mostly choose rotten or dead woods to make such nests. In places where there are inadequate trees, they make nests in large cacti. Some Woodpeckers fully rely on the ground making holes under the earth and live there. Some Woodpeckers also make nests in the bamboo forests. Some occupy the nests of termites and ants. In urban areas, they choose wooden utility poles to make their nests. However, wrynecks are unable to make their own nests. They need to find a premade nest to settle. Woodpeckers usually collect wood pieces to make the nest. They make flooring with these wood pieces inside the hole. Premade holes are often occupied by other Woodpeckers and thus there remains a constant competition to make a nest. Even other birds like sparrows may start breeding the holes and in such situations, Woodpeckers need to fight violently to take over the place. Most Woodpeckers are monogamous while only a few species are polygamous. In rare cases, a group of Woodpeckers may take care of the young. Researchers say that group breeding is more successful than individual breeding. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit qui voluptates voluptatum cumque voluptate est doloribus velit, quod obcaecati sed dolorem vel iste recusandae atque quae porro nobis nemo.\n",

            food_types: {
                foodimage1: "https://iili.io/HvIqS9f.png",
                foodimage2: "https://iili.io/HvIV9kb.png",
                foodimage3: "https://iili.io/HvIWFAG.png",
                foodimage4: "https://iili.io/HvIWFAG.png"
            },
            habitat: "https://iili.io/HvInD9s.png",
            main_image: "https://iili.io/HvIF2pV.jpg",
            scientific_name: "Picinea",
            size: "23cm"
        },
        {
            bird_info_details_uuid: "6ed763ff-7c81-40b6-97b7-23ce59f11c15",
            bird_name: "Wood peacker",

            birds_stages: {
                birdStage1: "https://iili.io/HvI3GX1.jpg",
                birdStage2: "https://iili.io/HvI3th7.jpg",
                birdStage3: "https://iili.io/HvIF2pV.jpg",
                birdStage4: "https://iili.io/HvIFfQ1.jpg"
            },
            description1: "About bird : \"Woodpeckers scientific name is Picinea which is a part of the family Picidae. The subfamily Picinea has a variety of 180 birds including Woodpeckers. As the name suggests, it is famous for pecking into the woods. Most of the time they are found on the trunk of a tree, striking into the woods to find insects. They also peck dead woods to make nest holes where they can live. Woodpeckers are commonly found worldwide except in a few places. These excluded areas are New Zealand, New Guinea, Australia, and polar regions. These stunning birds are amply found in Southeast Asian and South American countries. They mostly like to live in forests and woodland areas where they can get enough trees. However, only some species like the Gila Woodpecker survive in rocky or desert areas. Some Woodpeckers don't peck wood at all. They survive in the ground by making holes through the grounds to form their nests. Also, they pick up insects from the ground for a living. These Woodpeckers are found in rocky and grassy mountains located in South Africa.\"\"\n",
            description2: "General Characteristics : \"Woodpecker information may vary as there are multiple types. The size of Woodpeckers starts from 7cm in length. Also, some Woodpeckers are 50cm long! This means some Woodpeckers may weigh around 0.25 oz while other types may have a weight of around 20 oz. The colors of Woodpeckers are diverse. Some are multicolored while some have black bodies tinted with olive and brown. The common Woodpeckers in Southern Asia have black bodies with white spots and yellow shades along with red feathers on the head. These color combinations are important for camouflage. Except for some, most Woodpeckers have short legs with zygodactyl feet. While two toes face forward, the other two are bent backward. This toe arrangement helps them to get a good grip of the trunk and move vertically up to the tree. Woodpeckers have sharp and strong beaks for effective drilling into the trunk. The long sticky tongue helps them grasp insects. To prevent brain damage due to repeated drilling and pecking, Woodpeckers have certain features. Woodpeckers have a flexible and small brain. Its subdural cavity is narrow with minimal CSF which controls and restricts the movement of the brain inside the skull preventing severe brain damage. The CSF also monitors brain orientation with the skull allowing short contact. The skull has soft and flexible bones covering the forehead and the backside of the skull. Another special feature is the hyoid bone. This bone supports the skull as well as the spinal cord. It goes around the braincase going through both sides of the spinal cord and ends at the right nostril cavity. This bone safeguards the brain.\n",
            description3: "Life styes :Lifestyles are different for different species. Some Woodpeckers live solitary lives while some prefer to live in a group. Their common behaviors include head shaking and sharp vocalization. They are also known for heavily drilling and pecking through the woods. Woodpeckers roam in the daylight and rest in their nest at night. Drumming is a common characteristic of the Woodpecker bird. They peck into the wood vigorously and repeatedly. They take breaks and start drumming again. Male Woodpeckers do this more often than female Woodpeckers. This works like a territorial call. This is a sign to other Woodpecker mates and various drumming patterns have different meanings that the species understand. Their voice is high-pitched and different Woodpeckers have diverse ways of calling. Some Woodpeckers make rattling sounds while the other species whistle. Some species wail and scream. Some other Woodpeckers make nasal churrs. However, each type of calling pattern carries a message to the fellow Woodpeckers. Some calls denote danger while some calls indicate a call for food. Woodcutter birds often make low-pitched sounds as well. Woodpecker couples usually make low-pitched sounds when they are in the nest. The interval between each call also carries a message to the other Woodpeckers.\n",
            description4: "Breeding pattern : The main features of Woodpecker include making holes in the barks and making nests inside the holes. They mostly choose rotten or dead woods to make such nests. In places where there are inadequate trees, they make nests in large cacti. Some Woodpeckers fully rely on the ground making holes under the earth and live there. Some Woodpeckers also make nests in the bamboo forests. Some occupy the nests of termites and ants. In urban areas, they choose wooden utility poles to make their nests. However, wrynecks are unable to make their own nests. They need to find a premade nest to settle. Woodpeckers usually collect wood pieces to make the nest. They make flooring with these wood pieces inside the hole. Premade holes are often occupied by other Woodpeckers and thus there remains a constant competition to make a nest. Even other birds like sparrows may start breeding the holes and in such situations, Woodpeckers need to fight violently to take over the place. Most Woodpeckers are monogamous while only a few species are polygamous. In rare cases, a group of Woodpeckers may take care of the young. Researchers say that group breeding is more successful than individual breeding. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit qui voluptates voluptatum cumque voluptate est doloribus velit, quod obcaecati sed dolorem vel iste recusandae atque quae porro nobis nemo.\n",

            food_types: {
                foodimage1: "https://iili.io/HvIqS9f.png",
                foodimage2: "https://iili.io/HvIV9kb.png",
                foodimage3: "https://iili.io/HvIWFAG.png",
                foodimage4: "https://iili.io/HvIWFAG.png"
            },
            habitat: "https://iili.io/HvInD9s.png",
            main_image: "https://iili.io/HvIF2pV.jpg",
            scientific_name: "Picinea",
            size: "23cm"
        },
        {
            bird_info_details_uuid: "3a100265-0b55-4f35-aa5c-3d9eda1bf59e",
            bird_name: "Baya Weaver"            ,

            birds_stages: {
                birdStage1: "https://freeimage.host/i/HUw6eCG",                
                birdStage2: "https://freeimage.host/i/HUwP3MJ",
                birdStage3: "https://freeimage.host/i/HUwPMMb",                
                birdStage4: "https://freeimage.host/i/HUwidRS"
            },
            description1: "About bird : The Baya weaver (Ploceus philippinus) is a weaverbird best known for the elaborately woven nests constructed by the males. These birds spend their time in flocks and build their nest near water or place them hanging over water where predators cannot reach easily.\n",
            description2:"General Characteristics : Majority of weaver birds (plumages commonly) are yellow, but there are some in red, black or brown varieties while females are often dull brown colours. They are often known for their construction of embellished nests. A weaverbird is a small bird from the family Ploceidae.\n",
            description3: "Life styes : Baya weavers are social and gregarious birds. They forage during the day in flocks, both on the plants and on the ground. Flocks fly in close formations, often performing complicated maneuvers. They roost in reedbeds bordering waterbodies. Baya weavers may also sometimes descend to the ground and indulge in dust bathing. Their calls are a continuous ‘chit-chit-...’ sometimes ending in a wheezy ‘cheee-eee-ee’ that is produced by males in a chorus. A lower-intensity call is produced in the non-breeding season.\n",
            description4: "Breeding pattern :  Baya weavers are polygynous and don’t form pairs; males build many partial nests and begin courting females. The breeding season takes place during the monsoons. Baya weavers nest in colonies typically of up to 20-30 individuals, close to the source of food, nesting material, and water. Males build pendulous nests that are retort-shaped, with a central nesting chamber and a long vertical tube that leads to a side entrance to the chamber. The nests are woven with long strips of paddy leaves, rough grasses, and long strips torn from palm fronds. Each strip can be between 20 and 60 cm (7.9 and 23.6 in) in length. To complete a nest a male takes about 18 days and makes up to 500 trips. The birds use their strong beaks to strip and collect the strands and to weave and knot them while building their nests. The nests are often built hanging over water from palm trees and often suspended from thorny Acacias and in some cases from telephone wires. The females inspect the nest and signal their acceptance of a male; after that, the male goes on to complete the nest by adding the entrance tunnel. Females may modify the interiors or add blobs of mud. The female lays about 2-4 white eggs and incubates them for about 14 to 17 days. Males may sometimes assist in feeding the chicks. The chicks leave the nest after about 17 days. After mating with a female the male typically court other females at other partially constructed nests. Young birds leave the nest in juvenile plumage which is replaced in their first molt after about 4-6 months. The young usually disperse to new locations not far from their nest. Females start to breed after a year while males take half a year longer.\n",

            food_types: {
                foodimage1: "https://freeimage.host/i/HUwiv72",                
                foodimage2: "",
                foodimage3: "",
                foodimage4: ""
            },
            habitat: "https://freeimage.host/i/HUwiE5N",            
            main_image: "https://freeimage.host/i/HUw4Mbe",            
            scientific_name: "Ploceus philippinus",
            size: "15cm"
        }
    ])


    )
}