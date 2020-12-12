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

    movePlayer() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawText();
        this.posY = this.posY + this.speed * this.inputY;
        this.posX = this.posX + this.speed * this.inputX;
        this.renderPlayer();
    }

    renderPlayer() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, 40, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    getInput() {
        document.onkeydown = detectKey;
        const self = this;
        function detectKey(e) {
            e = e || window.event;

            if (e.keyCode == "38" && self.checkBorders()) {
                // up arrow
                self.inputY = -1;
            } else if (e.keyCode == "40" && self.checkBorders()) {
                // down arrow
                self.inputY = 1;
            } else if (e.keyCode == "37" && self.checkBorders()) {
                // left arrow
                self.inputX = -1;
            } else if (e.keyCode == "39" && self.checkBorders()) {
                // right arrow
                self.inputX = 1;
            }
            if (good_width) {
                self.movePlayer();
            }
            self.inputX = 0;
            self.inputY = 0;
        }
    }

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
            this.ctx.font = `${this.smallTextSize}px Arial`;
            this.ctx.fillText("Coding", this.hobbiesIndent, 100 + this.textSpacing);
            this.ctx.fillText("Reading", this.hobbiesIndent, 100 + this.textSpacing * 2);
            this.ctx.fillText("Gaming", this.hobbiesIndent, 100 + this.textSpacing * 3);
            this.ctx.fillText("Watching movies", this.hobbiesIndent, 100 + this.textSpacing * 4);
            this.ctx.fillText("Cooking", this.hobbiesIndent, 100 + this.textSpacing * 5);
            this.ctx.fillText("Travelling", this.hobbiesIndent, 100 + this.textSpacing * 6);
        }
        if (this.checkProjects()) {
            document.getElementById("links").style.display = "inline";
        }
        else {
            document.getElementById("links").style.display = "none";
        }
    }

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

function resize() {
    newPlayer.width = window.innerWidth;
    newPlayer.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 180;
    newPlayer.movePlayer();
}



