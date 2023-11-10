function displayNumeros()
{
    const input = parseInt(document.getElementById("input").value);
    const evenNumeros = document.getElementById("numeros");
    const somaEven = document.getElementById("soma");

    if (isNaN(input))
    {
        alert("Insira um valor válido.");
        return
    }

    let numeros = [];
    let soma = 0;

    for (let i = 2; i <= input; i += 2) {
        numeros.push(i);
        soma += i;
    }

    evenNumeros.textContent = numeros.join(", ");
    somaEven.textContent = soma;
}

function conversor()
{
const temp = parseFloat(document.getElementById("input2").value);
const tipoTemp = document.getElementById("tipo").value;
const totalTemp = document.getElementById("total");

var total = 0;


if (isNaN(temp)) {
    alert("Insira um valor válido para a temperatura.")
    return;
}

switch (tipoTemp)
    {
    case "Celsius":
        {
        total = temp * 1.8 + 32;

        totalTemp.textContent = total.toFixed(2) + "°F";
        break
        }        

    case "Fahrenheit":
        {
        total = (temp - 32) / 1.8;

        totalTemp.textContent = total.toFixed(2) + "°C";
        break;
        }
    }
}

function produtos()
{
   const val1 = parseFloat(document.getElementById("valor1").value);
   const val2 = parseFloat(document.getElementById("valor2").value);
   const val3 = parseFloat(document.getElementById("valor3").value);
   const quant1 = parseInt(document.getElementById("quantidade1").value);
   const quant2 = parseInt(document.getElementById("quantidade2").value);
   const quant3 = parseInt(document.getElementById("quantidade3").value);

    
   if (isNaN(val1, val2, val3) || isNaN(quant1, quant2, quant3)) {
    alert("Insira valores válidos para o valor e a quantidade dos produtos.")
    return;
}

   const result = (val1 * quant1) + (val2 * quant2) + (val3 * quant3);

   document.getElementById("total").textContent = result.toFixed(2);
}  

function veiculos()
{
    const dist = parseFloat(document.getElementById("distancia").value);
    const valor = parseFloat(document.getElementById("preco"). value);
    var consumo = 8;

    
    if (isNaN(dist) || isNaN(valor)) {
        alert("Insira valores válidos para a distância e o valor do combustível.")
        return;
    }

    var gasto = (dist/consumo) * valor;

    document.getElementById("total").textContent = gasto.toFixed(2);
} 

function piso()
{
    const comp = parseFloat(document.getElementById("comprimento").value);
    const larg = parseFloat(document.getElementById("largura").value);

    const preco = 36;

    if (isNaN(comp) || isNaN(larg)) {
        alert("Insira valores válidos para o comprimento e a largura.")
        return;
    }

    var area = comp * larg

    var valPiso = area * preco

    document.getElementById("total").textContent = valPiso.toFixed(2);

}

function imc()
{
    const alt = parseFloat(document.getElementById("altura").value);
    const genero = document.getElementById("gen").value;

    var imc = 0

    
    if (isNaN(alt)) {
        alert("Insira um valor válido para a altura.")
        return;
    }

    switch (genero)
    {
        case "Homem":

        total = (72.7 * alt) - 58

        document.getElementById("total").textContent = total.toFixed(2) + "kg";
        break;

        case "Mulher":

        total = (62.1 * alt) - 44.7;

        document.getElementById("total").textContent = total.toFixed(2) + "kg";
        break;

    }
}

//#region Atividade 7

const numeros = [];

function adicionar() {
    const numInput = document.getElementById("numero");
    const num = parseFloat(numInput.value);

    if (!isNaN(num) && numInput.value.trim() !== "") {
        numeros.push(num);
        numInput.value = "";
    } else {
        alert("Insira um valor válido.");
    }
}

function todos() {
    document.getElementById("todos").textContent = numeros.join(", ");
}

function maior() {
    if (numeros.length > 0) {
        const maiorvalor = Math.max(...numeros);
        document.getElementById("maior").textContent = maiorvalor;
    } else {
        alert("Nenhum valor inserido.");
    }
}

function menor() {
    if (numeros.length > 0) {
        const menorvalor = Math.min(...numeros);
        document.getElementById("menor").textContent = menorvalor;
    } else {
        alert("Nenhum valor inserido.");
    }
}

function reset()
{
    numeros.length = 0;
    document.getElementById("numero").value = "";
    document.getElementById("todos").textContent = "";
    document.getElementById("maior").textContent = "";
    document.getElementById("menor").textContent = ""; 
}
//#endregion


//Navbar
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.03}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();




//#region JOGO

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const score = document.querySelector(".score--value")
const finalScore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")

const audio = new Audio('../assets/assets_audio.mp3')

const size = 30

const initialPosition =  [{x: 270, y: 240}]

let snake = [{ x: 270, y: 240}]


const incrementScore = () => {
    score.innerHTML = +score.innerHTML + 10
}

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomPosition = () => {
    const number = randomNumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
}

const randomColor = () => {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
}

const food = {
    x: randomPosition(),
    y: randomPosition(),
    color: randomColor()
}

let direction, loopId

const drawFood = () => {

    const {x, y, color} = food
    ctx.shadowColor = color
    ctx.shadowBlur = 8
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
}

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    snake.forEach((position, index) => {

        if (index == snake.length - 1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const moveSnake = () => {
    if (!direction) return

    const head = snake[snake.length - 1]

    if (direction == "right") {
        snake.push({x: head.x + size, y: head.y })
    }

    if (direction == "left") {
        snake.push({x: head.x - size, y: head.y })
    }

    if (direction == "up") {
        snake.push({x: head.x, y: head.y - size})
    }

    if (direction == "down") {
        snake.push({x: head.x, y: head.y + size})
    }

    snake.shift()

}

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }
}

const checkEat= () => {
    const head = snake[snake.length - 1]

    if (head.x == food.x && head.y == food.y) {
        incrementScore()
        snake.push(head)
        audio.play()

        let x = randomPosition()
        let y = randomPosition()

        while (snake.find((position) => position.x == x && position.y == y)) {
            x = randomPosition()
            y = randomPosition()
        }

        food.x = x
        food.y = y
        food.color = randomColor()
    }
}

const checkCollision = () => {
    const head = snake[snake.length - 1]
    const canvasLimit = canvas.width - size
    const neckIndex = snake.length -2
    const wallCollision = 
    head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit

    const selfCollision = snake.find((position, index) => {
        return index < neckIndex && position.x == head.x && position.y == head.y
    })

    if (wallCollision || selfCollision) {
        gameOver();
    }

}

const gameOver = () => {
    direction = undefined

    menu.style.display = "flex"
    finalScore.innerHTML = score.innerHTML
    canvas.style.filter = "blur(2px)"
}

const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0, 0, 600, 600)

    drawGrid()
    drawFood()
    moveSnake()
    drawSnake()
    checkEat()
    checkCollision()

    loopId = setTimeout(() => {
        gameLoop()
    }, 200) 
}

gameLoop()

document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowRight" && direction != "left") {
        direction = "right"
    }

    if (key == "ArrowLeft" && direction != "right") {
        direction = "left"
    }

    if (key == "ArrowUp" && direction != "down") {
        direction = "up"
    }

    if (key == "ArrowDown" && direction != "up") {
        direction = "down"
    }
})

buttonPlay.addEventListener("click", () => {
    score.innerHTML = "00";
    menu.style.display = "none";
    canvas.style.filter = "none";
    snake = []; 
    snake.push({ x: 270, y: 240 });
    direction = "right";
    gameLoop(); 
});

//#endregion