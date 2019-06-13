let game = new Game();

console.log(game);


$(document).ready(() => {
    $(".cell").click((e) => {
        let target = e.target;

        let x = target.getAttribute("x");
        let y = target.getAttribute("y");

        alert(`I clicked the cell ${x},${y}`)
    });
});