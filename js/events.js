// $(document).ready(function() {
//     $("#shehacks").mouseover(function(){
//         $("#shehacks p").text("SheHacks Boston is");
//         $("#shehacks h1").text("");
//     });
//     $("#shehacks").mouseout(function() {
//         $("#shehacks h1").text("</SheHacks>");
//         $("#shehacks p").text("");
//     });
// });


function changeColors(div) {
    colors = ["#ed559c","#E2416F","#229EE0", "#1A6CA3","#f8ae6b"]
    div.style.backgroundColor = colors[Math.floor(Math.random()*3)]
  }
