let game = new Game();


$(document).ready(() => {
    $(".cell").click((e) => {
        let target = e.target;

        let x = target.getAttribute("x");
        let y = target.getAttribute("y");

        let currentSign = game.setSignOnBoard(x, y);

        if (currentSign) {
            target.innerHTML = currentSign;
        }
    });
});