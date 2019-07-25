const canvas = document.getElementById('splash-canvas')
const c = canvas.getContext('2d')

let mouseX
let mouseY

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const canvasWidth = canvas.width
const canvasHeight = canvas.height

const maxRadius = 45

canvas.onmousemove = function(e) {
    mouseX = e.clientX
    mouseY = e.clientY
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

function Circle(xCoordinate, yCoordinate, radius) {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomTrueOrFalse = Math.floor(Math.random() * 2)

    this.xCoordinate = xCoordinate
    this.yCoordinate = yCoordinate
    this.radius = radius
    this.color = colorArray[randomNumber]
    this.opacity = 0
    this.rgba = getRGBAColor(this.color, this.alpha)

    if (randomTrueOrFalse == 1) {
        this.xVelocity = -Math.random() * 1
    } else {
        this.xVelocity = Math.random() * 1
    }

    if (randomTrueOrFalse == 1) {
        this.yVelocity = -Math.random() * 1
    } else {
        this.yVelocity = Math.random() * 1
    }

    // As distance gets closer to 0, increase radius

    this.update = function() {
        this.xCoordinate += this.xVelocity
        const xDistance = mouseX - this.xCoordinate
        const yDistance = mouseY - this.yCoordinate
        const originalRadius = radius
        this.yCoordinate += this.yVelocity

        // Movement Functions
        if (
            this.xCoordinate + this.radius > canvasWidth ||
            this.xCoordinate - this.radius < 0
        ) {
            this.xVelocity = -this.xVelocity
        }
        if (
            this.yCoordinate + this.radius > canvasHeight ||
            this.yCoordinate - this.radius < 0
        ) {
            this.yVelocity = -this.yVelocity
        }

        // Radius Decrease Functions
        // When distance between circle center and mouse on horizontal axis is less than 50, increase radius until it is equal to 35
        var closeToMouse = xDistance < 60 && xDistance > -60 && yDistance < 60 &&
            yDistance > -60;
        if (closeToMouse && this.radius < maxRadius) {
            this.radius += 2
            this.opacity = Math.min(100, this.opacity + 10);
        } else if (originalRadius < this.radius && !closeToMouse) {
            this.radius -= 2
            this.opacity = Math.max(0, this.opacity - 5);
        } else if (!closeToMouse) {
            this.opacity = Math.max(0, this.opacity - 0.1);
        }
        this.rgba = getRGBAColor(this.color, this.opacity)
        this.draw()
    }

    this.draw = function() {
        c.beginPath()
        c.arc(
            this.xCoordinate,
            this.yCoordinate,
            Math.abs(this.radius),
            0,
            Math.PI * 2
        )
        c.fillStyle = this.rgba;
        c.fill()
    }
}

const colorArray = ['#59ABE3', '#ad7a99', '#50514F', '#d9f0ff']
const myCircle = new Circle(30, 80, 10)
let circleArray = []

for (let i = 0; i < 1400; i++) {
    const randomXCoordinate = Math.random() * canvasWidth
    const randomYCoordinate = Math.random() * canvasHeight
    const randomRadius = Math.floor(Math.random() * 13) + 8
    circleArray.push(
        new Circle(randomXCoordinate, randomYCoordinate, randomRadius)
    )
}

function updateAll() {
    c.clearRect(0, 0, canvasWidth, canvasHeight)
    myCircle.update()
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
    window.requestAnimationFrame(updateAll)
}


function getRGBAColor(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    o = opacity / 100;
    
    return 'rgb(' + r + ',' + g + ',' + b + ',' + o + ')';
}


updateAll();
