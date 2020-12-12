const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<style>
footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-top: 10px;
}

.footer-icons ul li {
    display: inline-block;
  }
  
  .footer-icons ul li a {
    border: 1px solid #444;
    color: #444;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 38px;
    margin-right: 5px;
    text-align: center;
    width: 40px;
    border-radius: 50%;
  }
  
  .footer-icons {
    text-align: center;
  }
  
  .footer-contacts p span {
    color: #3EC1D5;
    font-weight: 700;
  }
  
  .popular-tag ul li {
    display: inline-block;
  }
  
  .footer-content {
    display: block;
    overflow: hidden;
  }
  
  .popular-tag ul li a:hover, 
  .footer-icons ul li a:hover {
    background: #3EC1D5;
    border: 1px solid #3EC1D5;
    color: #fff;
  }
  
  .popular-tag ul li a {
    border: 1px solid #444;
    border-radius: 30px;
    color: #444;
    display: block;
    font-size: 13px;
    font-weight: 600;
    margin: 5px 3px;
    padding: 5px 10px;
    position: relative;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.4s ease 0s;
    width: 70px;
    text-align: center;
  }
  
  .footer-area-bottom {
    background: #f1f1f1 none repeat scroll 0 0;
    padding: 15px 0;
  }

</style>
<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<footer>
        <div class="footer-area-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="footer-icons">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100011597628881">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/renate-libich/">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                    <li>
                                    <a href="https://github.com/libichrenate">
                                        <i class="fa fa-github"></i>
                                    </a>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">

                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);