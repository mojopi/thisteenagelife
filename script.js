function makeHeadshot(d) {
    var headshot = document.createElement("div");
    var faces = document.getElementById("faces")
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





for (i = 0; i < 28; i++) { makeHeadshot(i) };


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
