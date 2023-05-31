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


// const bird_info_details = JSON.parse(localStorage.getItem("bird_info_details"));

// if (!bird_info_details) {
//     localStorage.setItem("bird_info_details", JSON.stringify(
//         [{
//             bird_info_details_uuid: "6ed763ff-7c81-40b6-97b7-23ce59f11c15",
//             bird_name: "Wood peacker",

//             birds_stages: {
//                 birdStage1: "https://iili.io/HvI3GX1.jpg",
//                 birdStage2: "https://iili.io/HvI3th7.jpg",
//                 birdStage3: "https://iili.io/HvIF2pV.jpg",
//                 birdStage4: "https://iili.io/HvIFfQ1.jpg"
//             },
//             description1: "About bird : \"Woodpeckers scientific name is Picinea which is a part of the family Picidae. The subfamily Picinea has a variety of 180 birds including Woodpeckers. As the name suggests, it is famous for pecking into the woods. Most of the time they are found on the trunk of a tree, striking into the woods to find insects. They also peck dead woods to make nest holes where they can live. Woodpeckers are commonly found worldwide except in a few places. These excluded areas are New Zealand, New Guinea, Australia, and polar regions. These stunning birds are amply found in Southeast Asian and South American countries. They mostly like to live in forests and woodland areas where they can get enough trees. However, only some species like the Gila Woodpecker survive in rocky or desert areas. Some Woodpeckers don't peck wood at all. They survive in the ground by making holes through the grounds to form their nests. Also, they pick up insects from the ground for a living. These Woodpeckers are found in rocky and grassy mountains located in South Africa.\"\"\n",
//             description2: "General Characteristics : \"Woodpecker information may vary as there are multiple types. The size of Woodpeckers starts from 7cm in length. Also, some Woodpeckers are 50cm long! This means some Woodpeckers may weigh around 0.25 oz while other types may have a weight of around 20 oz. The colors of Woodpeckers are diverse. Some are multicolored while some have black bodies tinted with olive and brown. The common Woodpeckers in Southern Asia have black bodies with white spots and yellow shades along with red feathers on the head. These color combinations are important for camouflage. Except for some, most Woodpeckers have short legs with zygodactyl feet. While two toes face forward, the other two are bent backward. This toe arrangement helps them to get a good grip of the trunk and move vertically up to the tree. Woodpeckers have sharp and strong beaks for effective drilling into the trunk. The long sticky tongue helps them grasp insects. To prevent brain damage due to repeated drilling and pecking, Woodpeckers have certain features. Woodpeckers have a flexible and small brain. Its subdural cavity is narrow with minimal CSF which controls and restricts the movement of the brain inside the skull preventing severe brain damage. The CSF also monitors brain orientation with the skull allowing short contact. The skull has soft and flexible bones covering the forehead and the backside of the skull. Another special feature is the hyoid bone. This bone supports the skull as well as the spinal cord. It goes around the braincase going through both sides of the spinal cord and ends at the right nostril cavity. This bone safeguards the brain.\n",
//             description3: "Life styes :Lifestyles are different for different species. Some Woodpeckers live solitary lives while some prefer to live in a group. Their common behaviors include head shaking and sharp vocalization. They are also known for heavily drilling and pecking through the woods. Woodpeckers roam in the daylight and rest in their nest at night. Drumming is a common characteristic of the Woodpecker bird. They peck into the wood vigorously and repeatedly. They take breaks and start drumming again. Male Woodpeckers do this more often than female Woodpeckers. This works like a territorial call. This is a sign to other Woodpecker mates and various drumming patterns have different meanings that the species understand. Their voice is high-pitched and different Woodpeckers have diverse ways of calling. Some Woodpeckers make rattling sounds while the other species whistle. Some species wail and scream. Some other Woodpeckers make nasal churrs. However, each type of calling pattern carries a message to the fellow Woodpeckers. Some calls denote danger while some calls indicate a call for food. Woodcutter birds often make low-pitched sounds as well. Woodpecker couples usually make low-pitched sounds when they are in the nest. The interval between each call also carries a message to the other Woodpeckers.\n",
//             description4: "Breeding pattern : The main features of Woodpecker include making holes in the barks and making nests inside the holes. They mostly choose rotten or dead woods to make such nests. In places where there are inadequate trees, they make nests in large cacti. Some Woodpeckers fully rely on the ground making holes under the earth and live there. Some Woodpeckers also make nests in the bamboo forests. Some occupy the nests of termites and ants. In urban areas, they choose wooden utility poles to make their nests. However, wrynecks are unable to make their own nests. They need to find a premade nest to settle. Woodpeckers usually collect wood pieces to make the nest. They make flooring with these wood pieces inside the hole. Premade holes are often occupied by other Woodpeckers and thus there remains a constant competition to make a nest. Even other birds like sparrows may start breeding the holes and in such situations, Woodpeckers need to fight violently to take over the place. Most Woodpeckers are monogamous while only a few species are polygamous. In rare cases, a group of Woodpeckers may take care of the young. Researchers say that group breeding is more successful than individual breeding. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit qui voluptates voluptatum cumque voluptate est doloribus velit, quod obcaecati sed dolorem vel iste recusandae atque quae porro nobis nemo.\n",

//             food_types: {
//                 foodimage1: "https://iili.io/HvIqS9f.png",
//                 foodimage2: "https://iili.io/HvIV9kb.png",
//                 foodimage3: "https://iili.io/HvIWFAG.png",
//                 foodimage4: "https://iili.io/HvIWFAG.png"
//             },
//             habitat: "https://iili.io/HvInD9s.png",
//             main_image: "https://iili.io/HvIF2pV.jpg",
//             scientific_name: "Picinea",
//             size: "23cm"
//         },
//         {
//             bird_info_details_uuid: "93b0ce38-a8bc-45aa-bb49-e1a9c58bc667",
//             bird_name: "Cattle Egret",

//             birds_stages: {
//                 birdStage1: "https://iili.io/HvIDA79.jpg",                
//                 birdStage2: "https://iili.io/HvImi0l.jpg",                
//                 birdStage3: "https://iili.io/HvTHnLu.jpg",                
//                 birdStage4: "https://iili.io/HvT2nLX.jpg"
//             },
//             description1: "About bird : \"The cattle egret (Bubulcus ibis ) is a cosmopolitan species of heron (family Ardeidae) found in the tropics, subtropics, and warm-temperate zones. It is the only member of the monotypic genus Bubulcus, although some authorities regard its two subspecies as full species, the western cattle egret and the eastern cattle egret. Despite the similarities in plumage to the egrets of the genus Egretta, it is more closely related to the herons of Ardea. Originally native to parts of Asia, Africa, and Europe, it has undergone a rapid expansion in its distribution and successfully colonised much of the rest of the world in the last century.\n\nIt is a white bird adorned with buff plumes in the breeding season. It nests in colonies, usually near bodies of water and often with other wading birds. The nest is a platform of sticks in trees or shrubs. Cattle egrets exploit drier and open habitats more than other heron species. Their feeding habitats include seasonally inundated grasslands, pastures, farmlands, wetlands, and rice paddies. They often accompany cattle or other large mammals, catching insect and small vertebrate prey disturbed by these animals. Some populations are migratory and others show postbreeding dispersal.\n\nThe adult cattle egret has few predators, but birds or mammals may raid its nests, and chicks may be lost to starvation, calcium deficiency, or disturbance from other large birds. This species maintains a special relationship with cattle, which extends to other large grazing mammals; wider human farming is believed to be a major cause of their suddenly expanded range. The cattle egret removes ticks and flies from cattle and consumes them. This benefits both species, but it has been implicated in the spread of tick-borne animal diseases.\"\n",
//             description2: "\n\nGeneral Characteristics : \" The cattle egret is a medium sized bird, measuring 45 to 55 cm in length and weighing 250 to 500 grams. The wingspan is 90 to 95 cm. The egret has a hunched posture. The non breeding birds have complete white plumage with yellow bill and yellow-grey legs.\"\n",
//             description3: "Life styes :The cattle egret (Bubulcus ibis) is a very common resident bird that loves to stay in croplands and ponds. Yellow beaks, dark legs, in-breeding plumage, orange or buff heads are the common identification marks of the birds. The male and female look alike. They are a cosmopolitan species of herons.\n",
//             description4: "Breeding pattern : The cattle egret nests in colonies, which are often found around bodies of water. The colonies are usually found in woodlands near lakes or rivers, in swamps, or on small inland or coastal islands, and are sometimes shared with other wetland birds, such as herons, egrets, ibises, and cormorants.Adult Cattle Egrets are all white with a yellow bill and legs. In breeding plumage they have golden plumes on their head, chest, and back. Juveniles have dark legs and bill. Cattle Egrets stalk insects and other small animals on the ground in grassy fields.\n",

//             food_types: {
//                 foodimage1: "https://iili.io/HvInD9s.png",                
//                 foodimage2: "",
//                 foodimage3: "",
//                 foodimage4: ""
//             },
//             habitat: "https://iili.io/HvTqE5G.png",            
//             main_image: "https://iili.io/HvILmx4.jpg",
//             scientific_name: "Bubulcus ibis",
//             size: "50cm"
//         },
//         {
//             bird_info_details_uuid: "0e87d8e6-2b2f-46fc-a6bd-c4111487d50c",            
//             bird_name: "Eagle",

//             birds_stages: {
//                 birdStage1: "https://iili.io/HvTyqJV.jpg",                
//                 birdStage2: "https://iili.io/HvTpmRS.jpg",                
//                 birdStage3: "https://iili.io/HvTHnLu.jpg",                
//                 birdStage4: "https://iili.io/HvTyV1f.jpg"
//             },
//             description1: "About bird : \"In general, an eagle is any bird of prey more powerful than a buteo. An eagle may resemble a vulture in\nbuild and flight characteristics but has a fully feathered (often crested) head and strong feet equipped\nwith great curved talons. A further difference is in foraging habits: eagles subsist mainly on live\nprey.\"",
//             description2: "\nGeneral Characteristics : \"1. Eagles Have Vision\nIf you ever happen to see an eagle sitting high above the tree or cliff of a stiff mountain, watch closely and see how attentive the bird is. The body sits still and the head will be tilted side to side to observed what is happening below, around and above it. Even if its flying close by, you can observe how keen its eyes are looking for its prey. Eagles have a keen vision. Their eyes are specially designed for long distance focus and clarity. They can spot another eagle soaring from 50 miles away.\n\nDoes this characteristic ring a bell in your mind? I am sure it does. Look at great leaders of this world who have come and gone. There are many great leaders that came and went but one characteristic that is common in all is \"Vision\". Vision is a successful leadership characteristic\nYou must have a vision that guides and leads your team towards the organization's or societal goals. The vision must be big and focused. A big, focused vision will produce big results.\n\n2. Eagles are fearless\nAn eagle will never surrender to the size or strength of its prey. It will always give a fight to win its prey or regain its territory.\nTry and watch the video on how the Golden Eagle displays remarkable hunting strategy, preying on goats much larger than itself by throwing them off the cliff face.\nNo matter what the size of that person or what weapon they maybe holding, you would attack them without thought or regard for yourself. It wouldn’t even dawn on you to be afraid because your instinct is to protect that which you love and cherish.\nSuccessful leaders are fearless. They face problems head on.\n\n3. Eagles are Tenacious\nWatch an eagle when a storm comes. When other birds fly away from the storm with fear, an eagle spreads its mighty wings and uses the current to soar to greater heights. The eagle takes advantage of the very storm that lesser birds fear and head for cover.\nChallenges in the life of a leader are many. These are the storm we must face as leaders to rise to greater heights. Like an eagle, a leader can only rise to greater heights if he takes up the challenges head on without running away from it. This is yet another leadership characteristic.\n\n4. Eagles are High Flyers\nEagles can fly up to an altitude of 10,000 feet, but they are able to swiftly land on the ground. At 10, 000 feet, you will never find another bird. If you find another bird, it has to be an eagle.\nAn eagle doesn't mingle around with the pigeons. It was Dr. Myles Munroe who said that. Pigeons scavenge on the ground and grumble and complain all day long. Eagles are not. They fly and make less noise waiting for opportunities to strike their next prey or glide with the current of the storm.\nGreat leaders are problem solvers. They don't complain like the pigeons do. They love to take challenges as the eagle does when the storm comes.\n\n5. Eagles Never Eat Dead Meat\nAn eagle never eats dead meat. In other words, an eagle does not scavenge. It only eats the meat from the prey it kills itself. Eagles eat raw and fresh meat What a great act of true leadership.\nA true leader spends time with people who are vibrant and liberal in thinking. You have to be with people who can think, make informed decisions and take actions. These are the people who bring changes to the society. They are lively and active people. Go out and look for them.\nAccording to Tony Buzan, a proponent of the techniques of Mind Mapping and mental literacy, these type of people are called change thinkers and change makers.\nThere is a saying that goes like this: \"People you hang around with and the books you read eventually determines the person you become.\"\n\n6. Eagles posses Vitality\nEagles are full of life and are visionary but they find time to look back at their life and re-energize themselves. This happens at about the age of 30. What happens is that when the eagles reach the age of 30, their physical body condition deteriorates fast making it difficult for them to survive.\nWhat is really interesting is that the eagle never gives up living, instead it retreats to a mountaintop and over a five month period goes through a metamorphosis. It knocks off its own beak by banging it against a rock, plucks out its talons and then feathers. Each stage produces a re-growth of the removed body parts, allowing the eagle to live for another 30 - 40 years.\n\nThere are times in your life as a leader that you must look back and take stock of your life. The good and the bad experiences you have been through as a leader. Are you keeping in trend with the current knowledge trend? Do you need to improve your certain areas in your life as a leader?\nGreat leaders are the ones that always do \"check and balance\"of their personal and professional lives and make an effort to learn things every day.\n\n7. Eagles Nurture their younger ones\n\nBelieve this or not. Eagles are known for their aggression. They are absolutely ferocious aren't they? Any one who doesn't have a total knowledge of this great bird will say yes. What is more astonishing with this bird is their ability to nurture their young ones. Research has shown that no member of the bird family is more gentle and attentive to its young ones than the eagles.\n\nThis is how it happens. When the mother eagle sees that time has come for it to teach the eaglets to fly, she gathers an eaglet onto her back, and spreading her wings, flies high. Suddenly she swoops out from under the eaglet and allows it to fall. As it falls, it gradually learns what its wings are for until the mother catches it once again. The process is repeated. If the young is slow to learn or cowardly, she returns it to the nest, and begins to tear it apart, until there is nothing left for the eaglet to cling to. Then she nudges him off the cliff.\n\n",
//             description3: "Life styes :The cattle egret (Bubulcus ibis) is a very common resident bird that loves to stay in croplands and ponds. Yellow beaks, dark legs, in-breeding plumage, orange or buff heads are the common identification marks of the birds. The male and female look alike. They are a cosmopolitan species of herons.\n",
//             description4: "Breeding pattern : The female generally lays two eggs 3-4 days apart in March, and incubates them for 43-45 days. Incubation starts with the first egg, and the chicks hatch a few days apart. The first chick to hatch is dominant over the younger one, which has only a 20 per cent chance of surviving the crucial first weeks.\n\nThe female does most of the brooding and feeding of the young, while the male provides the female and the young with all the food, especially in the early stages. She broods the chicks almost continuously for the first two weeks. After this, she will regularly leave the nest and share the hunting with the male. \n\nThe young will fledge when they are 65-70 days old, and will become independent after a further 90-100 days. Juveniles occasionally stay with their parents until November or December but are usually driven away by October. The young birds will breed for the first time at 3-4 years of age, when they can expect a lifespan of around 14 years. It is thought that 75 per cent of young birds die before reaching maturity. The oldest known golden eagle was more than 32 years old.\n\n",


//             food_types: {
//                 foodimage1: "https://iili.io/HvTy67V.png",                
//                 foodimage2: "",
//                 foodimage3: "",
//                 foodimage4: ""
//             },
//             habitat: "https://iili.io/HvTyeI9.png",           
//             main_image: "https://iili.io/HvTpgRI.jpg",
//             scientific_name: "Aquila",
//             size: "85cm - 90cm"
//         },
        
//     ])


//     )
// }