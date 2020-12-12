const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style> 
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
}

nav{
    background: #2A2B2A;
    height: 80px;
    width: 100%;
}

label.logo{
    color:#8BAAAD;
    font-size: 35px;
    line-height: 80px;
    padding: 0 100px;
    font-family:logofont;
}

nav ul{
    float: right;
    margin-right: 20px;
}

nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}

nav ul li a{
    color: #8BAAAD;
    font-size: 18px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}

a:hover{
    background: #F4FFF8;
    transition: .5s;
}

a:active{
    background: #F4FFF8;
    transition: .5s;
}

.checkbtn {
    font-size: 30px;
    color: #8BAAAD;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display:none;
}

#check{
    display: none;
}

@media (max-width: 952px){
    label.logo{
        font-size: 30px;
        padding-left:50px; 
    }
    nav ul li a{
        font-size: 16px;
    }
}

@media(max-width:850px){
    .checkbtn{
        display:block;
    }
    nav ul{
        position: fixed;
        width:100%;
        height: 100vh;
        background: #F4FFF8;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
        line-height: 30px;
    }
    nav ul li{
        display:block;
        margin: 50px 0;

    }
    nav ul li a{
        font-size: 20px;
    }
    a:hover, a.active{
        background:none;
        color:#2A2B2A;
    }
    #check:checked ~ ul{
        left:0;

    }
    @font-face{
        font-family: logofont;
        src: url("/Aquire-BW0ox.otf")
      }
}
</style>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<nav>
<input type="checkbox" id="check">
<label for="check" class="checkbtn">
    <i class="fa fa-bars"></i>
</label>
<label class="logo">Renate</label>
<ul>
    <li><a class="home" href="../pages/../Home/home.html">Home</a></li>
    <li><a class="myCv" href="../pages/../MyCV/MyCV.html">My Online CV</a></li>
    <li><a class="about" href="../pages/../AboutMe/AboutMe.html">About Me</a></li>
</ul>
</nav>
`;

class Header extends HTMLElement {

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}
customElements.define('header-component', Header);