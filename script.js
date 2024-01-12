// script.js

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
        sidemenu.style.right = "0";
    } else {
        console.error("Error: sidemenu element not found.");
    }
}

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
        sidemenu.style.right = "-150px"; // Use the same value as openmenu
    } else {
        console.error("Error: sidemenu element not found.");
    }
}
