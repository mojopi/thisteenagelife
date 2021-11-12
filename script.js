function makeHeadshot4(d) {
    var headshot = document.createElement("div");
    var faces2 = document.getElementById("faces4")
    headshot.id = "headshotD" + d;
    faces2.appendChild(headshot);
    headshot.classList.add("headshot");

    var description = document.createElement("div");

    description.id = "descriptionD" + d;
    headshot.appendChild(description);
    description.classList.add("description-invisible");


    description.addEventListener("click", function() {
        description.classList.add("description-apparent");


    })

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })




    var name = document.createElement("div");
    document.getElementById("headshotD" + i).appendChild(name);
    name.classList.add("name");
    name.id = "nameD" + i;


}


for (i = 0; i < 8; i++) { makeHeadshot4(i)};

document.getElementById('nameD0').innerText = "Alexis";

document.getElementById('descriptionD0').innerHTML = "";

document.getElementById('nameD1').innerText = "Caylin";
document.getElementById('descriptionD1').innerHTML = "";

document.getElementById('nameD2').innerText = "Eva";
document.getElementById('descriptionD2').innerHTML = "";

document.getElementById('nameD3').innerText = "Jayden";
document.getElementById('descriptionD3').innerHTML = "";

document.getElementById('nameD4').innerText = "Lydia";
document.getElementById('descriptionD4').innerHTML = "";

document.getElementById('nameD5').innerText = "Stella";
document.getElementById('descriptionD5').innerHTML = "";

document.getElementById('nameD6').innerText = "Sophia";
document.getElementById('descriptionD5').innerHTML = "";

document.getElementById('nameD7').innerText = "Molly J.";
document.getElementById('descriptionD5').innerHTML = "";



function makeHeadshot3(d) {
    var headshot = document.createElement("div");
    var faces3 = document.getElementById("faces3")
    headshot.id = "headshotC" + d;
    faces3.appendChild(headshot);
    headshot.classList.add("headshot");

    var description = document.createElement("div");

    description.id = "descriptionC" + d;
    headshot.appendChild(description);
    description.classList.add("description-invisible");


    description.addEventListener("click", function() {
        description.classList.add("description-apparent");


    })

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })




    var name = document.createElement("div");
    document.getElementById("headshotC" + i).appendChild(name);
    name.classList.add("name");
    name.id = "nameC" + i;


}


for (i = 0; i < 9; i++) { makeHeadshot3(i)};

    document.getElementById('nameC0').innerText = "Aishwarya";

document.getElementById('descriptionC0').innerHTML = "";

document.getElementById('nameC1').innerText = "Artishta";

document.getElementById('descriptionC1').innerHTML = "";

document.getElementById('nameC2').innerText = "Bhargabi";
document.getElementById('descriptionC2').innerHTML = "'I was born in a zoo with the monkeys sans the kangaroos'";

document.getElementById('nameC3').innerText = "Divya ";
document.getElementById('descriptionC3').innerHTML = "";

document.getElementById('nameC4').innerText = "Kashika ";
document.getElementById('descriptionC4').innerHTML = "'There is no force more powerful than a woman determined to rise.'";

document.getElementById('nameC5').innerText = "Krithiga";
document.getElementById('descriptionC5').innerHTML = "";

document.getElementById('nameC6').innerText = "Maitreyi";
document.getElementById('descriptionC6').innerHTML = "'Dear old world, you are very lovely and I am glad to be alive in you.' — Anne Shirley (from Anne of Green Gables)";

document.getElementById('nameC7').innerText = "Saniya";
document.getElementById('descriptionC7').innerHTML = "";

document.getElementById('nameC8').innerText = "Yashasvi";
document.getElementById('descriptionC8').innerHTML = "'Work hard in silence. Let your success be your noise.'";


function makeHeadshot2(d) {
    var headshot = document.createElement("div");
    var faces2 = document.getElementById("faces2")
    headshot.id = "headshotB" + d;
    faces2.appendChild(headshot);
    headshot.classList.add("headshot");

    var description = document.createElement("div");

    description.id = "descriptionB" + d;
    headshot.appendChild(description);
    description.classList.add("description-invisible");


    description.addEventListener("click", function() {
        description.classList.add("description-apparent");


    })

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })




    var name = document.createElement("div");
    document.getElementById("headshotB" + i).appendChild(name);
    name.classList.add("name");
    name.id = "nameB" + i;


}


for (i = 0; i < 7; i++) { makeHeadshot2(i)};

document.getElementById('nameB0').innerText = "Cami";

document.getElementById('descriptionB0').innerHTML = "";

document.getElementById('nameB1').innerText = "Cloe";
document.getElementById('descriptionB1').innerHTML = "";

document.getElementById('nameB2').innerText = "Jade";
document.getElementById('descriptionB2').innerHTML = "";

document.getElementById('nameB3').innerText = "Molly Z.";
document.getElementById('descriptionB3').innerHTML = "";

document.getElementById('nameB4').innerText = "Olivia";
document.getElementById('descriptionB4').innerHTML = "";

document.getElementById('nameB5').innerText = "Shreena";
document.getElementById('descriptionB5').innerHTML = "";

document.getElementById('nameB6').innerText = "Taylor";
document.getElementById('descriptionB6').innerHTML = "";




function makeHeadshot1(d) {
    var headshot = document.createElement("div");
    var faces = document.getElementById("faces1")
    headshot.id = "headshot" + d;
    console.log(headshot.id);
    faces.appendChild(headshot);
    headshot.classList.add("headshot");

    var description = document.createElement("div");

    description.id = "description" + d;
    console.log(description.id);
    headshot.appendChild(description);
    description.classList.add("description-invisible");


    description.addEventListener("click", function() {
        console.log("hi");
        description.classList.add("description-apparent");


    })

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })




    var name = document.createElement("div");
    document.getElementById("headshot" + i).appendChild(name);
    name.classList.add("name");
    name.id = "name" + i;


}





for (i = 0; i < 39; i++) { makeHeadshot1(i) };


document.getElementById('name0').innerText = "Olivia";

document.getElementById('description0').innerHTML = "Olivia Ho is a 16 year old woman who enjoys crocheting, tea, and books. She can't wait to be a "+"<u>"+ "real"+"</u>"+" old woman.";

document.getElementById('name1').innerText = "Cloe";
document.getElementById('description1').innerHTML = "'No matter where you go, there you are.'" + "<br>" + "— Buckaroo Banzai";




document.getElementById('name2').innerText = "Molly Z.";
document.getElementById('description2').innerHTML = "Molly is 15 and a sophmore at HTH. She enjoys playing music and doesn't talk about anything other than her dog.";

document.getElementById('name3').innerText = "Tessa";

document.getElementById('description3').innerHTML = "Tessa Felice; all things nature, love you";

document.getElementById('name4').innerText = "Taylor";
document.getElementById('description4').innerHTML = "full-time coffee enthusiast";

document.getElementById('name5').innerText = "Shakara";

// var headshot5 = document.getElementById('headshot5');
// var heart = document.createElement('div');
// heart.id="heart"
// headshot5.appendChild(heart);

// headshot5.addEventListener('mouseenter', function() {
//     heart.style.opacity = "1";

// })
// headshot5.addEventListener('mouseout', function() {
//     heart.style.opacity = "0";
// })

document.getElementById('name6').innerText = "Isabella";
document.getElementById('description6').innerHTML = "I aspire to be Michelle Obama.";

document.getElementById('name7').innerText = "Kieran";
document.getElementById('description7').innerHTML = "My name is Kieran and I am a student at HTH.";

document.getElementById('name8').innerText = "Avery";
document.getElementById('description8').innerHTML = "I sold my soul to Azazoth Blind Idiot God of the Outer Rim to be able to hug as good as I do.";

document.getElementById('name9').innerText = "Penelope";
document.getElementById('description9').innerHTML = "Fav food: Mashed Potatoes" + "<br>"+"Fav animal: Penguin, b/c Gwenn is my middle name and pen-gwenn ha" + "<br>" +  "Fav color: sea foam green" + "<br>" + "Star sign: Pisces"+ "<br>" +  "These are all extremely important by the way";

document.getElementById('name10').innerText = "Molly J.";
document.getElementById('description10').innerHTML = "Grateful to be listening, laughing, and making this podcast with the rest of these people.";

document.getElementById('name11').innerText = "Ashlen";




document.getElementById('description11').innerHTML = "Ashlen is a Queer, latinX millenial who spends free time psychoanalyzing her friends & crushing her fitness goals.";

document.getElementById('name12').innerText = "Riley";
document.getElementById('description12').innerHTML = "Be happy with what you have. Be excited about what you want. 😂";
document.getElementById('name13').innerText = "Jireh";
document.getElementById('description13').innerHTML = "The world is yours" + "<br>" + "— Tony Montana, Scarface";

document.getElementById('name14').innerText = "Harlan";
document.getElementById('description14').innerHTML = "HARLAN [he/him]" + "<br>" + "AGE: UNKNOWN" + "<br>" + "BLOOD TYPE: UNKNOWN" + "<br>" + "Do I even have blood? Who Knows;).";

document.getElementById('name15').innerText = "Shreena";
document.getElementById('description15').innerHTML = "Shreena is a charismatic high schooler who loves to put a smile on everyone's face. ❤️" + "<br>" + "'Be a rainbow in someone elses cloud.'" + "<br>" + "—Maya Angelou";

document.getElementById('name16').innerText = "Katelynn";
document.getElementById('description16').innerHTML = "Life is a journey to be experienced, not a problem to be solved." + "<br>" + "— Winnie the Pooh";

document.getElementById('name17').innerText = "Sailor";
document.getElementById('description17').innerHTML = "A picture may be worth 1000 words, but 1000 words doesn't even begin to tell the whole story.";

document.getElementById('name18').innerText = "James";
document.getElementById('description18').innerHTML = "Age: 15.5" + "<br>" + "Fav color: Red" + "<br>" + "Fav #: 11" + "<br>" + "Fav animal: guinea pig"+ "<br>" + "Fav food: Lumpia & tempura"+ "<br>" + "Hobbies: video games";
var ding = document.getElementById('ding');
headshot18.addEventListener('mouseenter', function() {
    ding.play()
})

document.getElementById('name19').innerText = "Sasha";
document.getElementById('description19').innerHTML = "When one tugs at a single thing in nature, he finds it attached to the rest of the world. —John Muir" ;

document.getElementById('name20').innerText = "Christian";
document.getElementById('description20').innerHTML = "Hello my name is Christian and I enjoy hanging out with friends. I also like to make videos of my life." ;

document.getElementById('name21').innerText = "Jackson";

document.getElementById('name22').innerText = "Hayden";
document.getElementById('description22').innerHTML = "'Keep walking.'" ;

document.getElementById('name23').innerText = "Hannah";
document.getElementById('description23').innerHTML = "your only limit is you" ;

document.getElementById('name24').innerText = "Chloe";
document.getElementById('description24').innerHTML = "I've got to make like a banana and split." ;

document.getElementById('name25').innerText = "Aly";
document.getElementById('description25').innerHTML = "" ;

document.getElementById('name26').innerText = "Edgar";
document.getElementById('description26').innerHTML = "imagine a world like that" ;

document.getElementById('name27').innerText = "Emmalyhn";
document.getElementById('description27').innerHTML = "" ;

document.getElementById('name28').innerText = "Janea";
document.getElementById('description28').innerHTML = "How to get your hair to look like that??!!!!" + "<br>" +  "...Water" ;
headshot28.addEventListener("mouseenter", function(){headshot28.classList.add("ThreePhotos")});
headshot28.addEventListener("mouseout", function(){headshot28.classList.remove("ThreePhotos")});


document.getElementById('name29').innerText = "Cami";
document.getElementById('description29').innerHTML = "How tall are you?" + "<br>" +
"6 foot." + "<br>" +
"How the weather up there?" + "<br>" +
 "Fine thanks." + "<br>" +
"Why are you so tall?" + "<br>" +
"Well there something called genes and you’ll learn the rest in bio class."
+ "<br>" +
"Can you get that for me in the top shelf?" + "<br>" +
"Yeah, happy to help";
document.getElementById('description29').style.fontSize = "10px";

document.getElementById('name30').innerText = "Junaid";
document.getElementById('description30').innerHTML = "'A fake with more power than the real thing is more dangerous than the real thing.'"+ "<br>" +
"-Hitagi Senjougahara, 2009" ;

document.getElementById('name31').innerText = "Zora";
document.getElementById('description31').innerHTML = "'Recollect your thoughts, don't get caught up in the mix. —2pac" ;

document.getElementById('name32').innerText = "Brandon";
document.getElementById('description32').innerHTML = "" ;

document.getElementById('name33').innerText = "Niah";
document.getElementById('description33').innerHTML = "I'm Niah. I'm super nice." ;

document.getElementById('name34').innerText = "Keyana";
document.getElementById('description34').innerHTML = "Be careful who you trust and tell your problems to." ;
headshot34.addEventListener("mouseenter", function(){headshot34.classList.add("keyanaChange")});
headshot34.addEventListener("mouseout", function(){headshot34.classList.remove("keyanaChange")});


document.getElementById('name35').innerText = "Anjaneya";
document.getElementById('description35').innerHTML = "" ;

document.getElementById('name36').innerText = "Antalya";
document.getElementById('description36').innerHTML = "Face your life, it's pain, it's pleasure,leave no path untaken." ;

document.getElementById('name37').innerText = "Mara";
document.getElementById('description37').innerHTML = "beauty is not in the face; beauty is a light in the heart.";

document.getElementById('name38').innerText = "Jade";
document.getElementById('description38').innerHTML = "";

