let baris = $("p");
let lirik = [
    "Oh maaf maafkan diriku",
    "Yang telah membuat hatimu terluka",
    "Hanya kau cintaku", "Ku tak pernah pikir tuk pergi darimu",
    "Walau hanya sekejap saja",
];
let panjang = [];
for(var i = 0; i < lirik.length; i++) {
    panjang.push(lirik[i].length);
}
let playing = false;
$(document).ready(function () {
    $("#button").click(function () {
        $("#load").addClass("playing");
        if(playing == false) {
            $("#play").animate({
                opacity: 0
            }, 500)
            $("#stop").animate({
                opacity: 1
            }, 500)
            playing = true;
            setTimeout(() => {
                playing = false;
                $("#play").animate({
                    opacity: 1
                }, 500)
                $("#stop").animate({
                    opacity: 0
                }, 500)
                $("#load").removeClass("playing");
            }, 32000);
            for(let i = 0; i < 5; i++) {
                baris[i].textContent = "";
            }
            const audio = $("#lagu")[0];
            setTimeout(() => {
                playLine();
            }, 600);
            audio.play();
            function playLine() {
                let total = 0;
                for(let i = 0; i < lirik.length; i++) {
                    if(i == 3) {
                        total -= 1000;
                    }
                    else if(i == 4) {
                        total -= 1500;
                    }
                    setTimeout(() => {
                        play(i, 175);
                    }, total);
                    total += panjang[i] * 250;
                }
            }
        }
    })
})
function play(index, speed) {
    let count = 0;
    let playChar = setInterval(function () {
        if(count == lirik[index].length) {
            clearInterval(playChar);
        }
        baris[index].textContent += lirik[index].charAt(count);
        count++;
    }, speed);
}