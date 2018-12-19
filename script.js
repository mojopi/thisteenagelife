function makeHeadshot(d) {
    var headshot = document.createElement("div");
    var team = document.getElementById("team")
    headshot.id = "headshot" + d;
    console.log(headshot.id);
    team.appendChild(headshot);
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





for (i = 0; i < 12; i++) { makeHeadshot(i)};


document.getElementById('name0').innerText = "Olivia";
document.getElementById('name1').innerText = "Cloe";
document.getElementById('name2').innerText = "Molly Z.";
document.getElementById('name3').innerText = "Tessa";
document.getElementById('name4').innerText = "Taylor";
document.getElementById('name5').innerText = "Shakara";
document.getElementById('name6').innerText = "Isabella";
document.getElementById('name7').innerText = "Kieran";
document.getElementById('name8').innerText = "Avery";
document.getElementById('name9').innerText = "Penelope";
document.getElementById('name10').innerText = "Molly J.";

// document.getElementById('description0').innerHTML = "hello";
