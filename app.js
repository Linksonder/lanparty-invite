let cube = document.querySelector('#cube');
let scene = document.querySelector('#scene');

const treshhold = 400;



function rotateCube(x, y)
{
    x = Math.round(calculateAngle(x));
    y = Math.round(calculateAngle(y));

    let style = `translateZ( -100px)  rotateY( ${-x}deg)  rotateX( ${y}deg)`;
    document.querySelector('#cube').style.transform = style;
}

function calculateAngle(percentage){
    return percentage * 90;
}


document.querySelector('#start').addEventListener('click', () => {



})

document.querySelector('body').addEventListener('mousemove', (e) => {
    let bounds =  document.querySelector('body').getBoundingClientRect();
    const x =  (Math.round(e.clientX / (bounds.width) * 100) - 50) / 50;
    const y =  (Math.round(e.clientY / (bounds.height) * 100) - 50) / 50;
    rotateCube(x, y);
})