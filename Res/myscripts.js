// function myOpen() {
//     document.getElementById("main").style.marginLeft = "17%";
//     document.getElementById("mySidebar").style.width = "20%";
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("mySidebar").style.background = "#535F6B";
//     document.getElementById("openNav").style.display = 'none';
// }
// function myClose() {
//     document.getElementById("main").style.marginLeft = "0%";
//     document.getElementById("mySidebar").style.display = "none";
//     document.getElementById("openNav").style.display = "inline-block";
// }
function myOpen() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.width = "17%";
    document.getElementById("myOverlay").style.display = "block";
}
function myClose() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
function myShow() {
    document.getElementById("openNav").style.visibility = "visible";
    // document.getElementById("FirstPage").style.display = "none";
    document.getElementById("demo1").style.display = "block";
}