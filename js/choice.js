const restartBtn = document.getElementById("restart-btn");
const completeBtn = document.getElementById("complete-btn");
const msg = document.getElementById("press-msg");

var rCount = 0;

restartBtn.addEventListener("click", () => {
    rCount += 1;
    if(rCount < 2){
        msg.innerHTML = `<h3>Are you sure? Press again to confirm.</h3>`;
    }
    else {
        window.location.href = "../fields-of-polarity.html";
    }
});

completeBtn.addEventListener("click", () => {
    msg.innerHTML = `<h3>Congratulations cadet, that was the right choice.</h3>`;
    
    window.setTimeout(function(){
        window.location.href = "../sites/congrats.html";
    }, 2000);
});