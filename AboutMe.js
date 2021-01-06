class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.hobbiesIndent = this.width / 15;
        this.projectsIndent = this.width * 0.8;
        this.smallTextSize = this.width * 0.02;
        this.bigTextSize = this.width * 0.05;
        this.textSpacing = this.width * 0.01;
        this.posY = this.height / 2;
        this.posX = this.width / 2;
        this.radius = 20;
        this.speed = 12;
        this.inputX = 0;
        this.inputY = 0;
        this.movePlayer();
        this.drawText();
    }

    //Schimba pozitia in functie de input si viteza
    movePlayer() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawText();
        this.posY = this.posY + this.speed * this.inputY;
        this.posX = this.posX + this.speed * this.inputX;
        this.renderPlayer();
    }
    //Deseneaza cercul de la pozitia x si y
    renderPlayer() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, 40, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    //Verificare taste 
    getInput() {
        let detectKey = (e) => {
            e = e || window.event;

            if (e.keyCode == "38" && this.checkBorders()) {
                // up arrow
                this.inputY = -1;
            } else if (e.keyCode == "40" && this.checkBorders()) {
                // down arrow
                this.inputY = 1;
            } else if (e.keyCode == "37" && this.checkBorders()) {
                // left arrow
                this.inputX = -1;
            } else if (e.keyCode == "39" && this.checkBorders()) {
                // right arrow
                this.inputX = 1;
            }
            if (good_width) {
                this.movePlayer();
            }
            this.inputX = 0;
            this.inputY = 0;
        }
        document.onkeydown = detectKey;
    }

    //Returneaza true sau false in functie de pozitia cercului
    checkHobbies() {
        if (this.posX < this.width * 0.37 && this.posY < 150) {
            return true;
        }
        return false;
    }

    checkProjects() {
        if (this.posX > this.width * 0.67 && this.posY < 150) {
            return true;
        }
        return false;
    }

    drawText() {
        this.hobbiesIndent = this.width / 15;
        this.projectsIndent = this.width * 0.7;
        this.bigTextSize = this.width * 0.05;
        this.smallTextSize = this.width * 0.02;
        this.textSpacing = this.width * 0.03;
        this.ctx.font = `${this.bigTextSize}px Arial`;
        this.ctx.fillText("My hobbies", this.hobbiesIndent, 100);
        this.ctx.fillText("My projects", this.projectsIndent, 100);
        this.ctx.font = `${this.smallTextSize}px Arial`;
        this.ctx.fillText("Move the circle with the arrow keys, try moving over the text to reveal more!", this.width * 0.16, this.height - 250);
        if (this.checkHobbies()) {
            document.getElementById("MyHobbies").style.display = "inline";
        }
        else {
            document.getElementById("MyHobbies").style.display = "none";
        }
        if (this.checkProjects()) {
            document.getElementById("links").style.display = "inline";
        }
        else {
            document.getElementById("links").style.display = "none";
        }
    }
    //Verfica daca pozitia cercului este in pagina
    checkBorders() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        if (this.posY - this.speed < 0) {
            this.posY += this.speed;
            return false;
        }
        if (this.posY + this.speed > this.height - 220) {
            this.posY -= this.speed;
            return false;
        }
        if (this.posX + this.speed > this.width - 40) {
            this.posX -= this.speed;
            return false;
        }
        if (this.posX - this.speed < 0) {
            this.posX += this.speed;
            return false;
        }
        return true;
    }
}

let good_width = true;
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 180;
let ctx = canvas.getContext('2d');
let newPlayer = new Player(ctx);
newPlayer.getInput();

//Seteaza good_width true sau false in functie de latimea paginii
setInterval(function () {
    if (window.innerWidth >= 849) {
        good_width = true;
        document.getElementById("canvas-container").style.display = "block";
        document.getElementById("alternate-content").style.display = "none";
    }
    else {
        good_width = false;
        document.getElementById("canvas-container").style.display = "none";
        document.getElementById("alternate-content").style.display = "block";
    }
}, 10);

window.onresize = resize;
//Modifica marimea canvasului atunci cand fereastra este modificata
function resize() {
    newPlayer.width = window.innerWidth;
    newPlayer.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 180;
    newPlayer.movePlayer();
}



