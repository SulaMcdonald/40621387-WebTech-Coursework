var win = 0;

function clickCup(id){

    var redCup = document.getElementById(id);
    var  temp = window.getComputedStyle(redCup).getPropertyValue("opacity");
        
    if(temp == 1){
        win = parseInt(win) + 1;

        redCup.style.opacity = 0;

         if(win==8){
        location.href = '../TextPages/afterClickGame.html'
        }
        
    }
}