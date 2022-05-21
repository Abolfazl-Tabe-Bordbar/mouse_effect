let father = document.getElementById("father");
let MyText = document.getElementById("MyText");
let full = 300;
father.addEventListener("mousemove", function (e) {
    const {
        offsetWidth: width,
        offsetHeight: height
    } = father;
    let {
        offsetX: x,
        offsetY: y
    } = e;
    x += e.target.offsetLeft;
    y += e.target.offsetTop;

    const xWalk = Math.round((x / width * full) - (full / 2));
    const yWalk =  Math.round((y / height * full) - (full / 2));

    MyText.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(238 ,82,83,.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(52 ,31,151,.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(243 ,104,224,.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(254 ,202,87,.7)
    `;

})