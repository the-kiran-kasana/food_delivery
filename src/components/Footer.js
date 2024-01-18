import React from "react";
import {Link} from "react-router-dom"

export default function Footer() {
  return (
      <>
      <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            font-family: 'Arial', sans-serif;\n        }\n\n        footer {\n            background-color: #1a9165;\n            color: #fff;\n            padding: 20px;\n            text-align: center;\n        }\n\n        footer p {\n            margin: 5px 0;\n        }\n\n        footer a {\n            color: #fff;\n            text-decoration: none;\n            font-weight: bold;\n        }\n\n        footer a:hover {\n            text-decoration: underline;\n        }\n\n        footer .social-icons {\n            margin-top: 10px;\n        }\n\n        footer .social-icons a {\n            display: inline-block;\n            margin: 0 10px;\n            color: #fff;\n        }\n\n        footer .copyright {\n            margin-top: 20px;\n        }\n    "
    }}
  />
  <>
  <footer className="enjoyfood-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Link className="navbar-brand fs-0 fst-italic " aria-current="page" to="/"> Enjoyfood </Link>

        </div>
        <div className="col-md-4">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li> <a href="#">Home</a> </li>
            <li>  <a href="#">About Us</a> </li>
            <li> <a href="#">Contact Us</a> </li>
            <li><a href="#">Order Now</a> </li>
          </ul>
        </div>



        <div className="col-md-4">
         <p className="css-of25nb">Social</p>
           <ul className="footer-links">
            <li>
            <a href="https://youtube.com/user/mongodb"target="_self"rel="noreferrer noopener"className=" css-16ay36s">
              <img src="https://webimages.mongodb.com/_com_assets/cms/kr6wsxwxsvrivp4q4-youtube.svg?auto=format%252Ccompress" alt="" className="css-1op5zr9"/>  YouTube 
            </a>
            </li>

            <li className="css-1w8osvb">
             <a href="https://facebook.com/mongodb" target="_self" rel="noreferrer noopener" className=" css-16ay36s" >
              <img src="https://webimages.mongodb.com/_com_assets/cms/kr6wtks9piclp67yr-facebook.svg?auto=format%252Ccompress"alt="" className="css-1op5zr9"/>     Facebook
             </a>
            </li>

            <li>
            <a href="https://www.instagram.com/YourAppInstagram" target="_blank"> 📸 Instagram </a>
            </li>
          </ul>
        </div>
      <p className="copyright"> <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a> </p>
      <div class="css-1km7ddl">© 2023 enjoyfood, Inc.</div>
      </div>
    </div>
  </footer>
</>

 </>

  );
}








