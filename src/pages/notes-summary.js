// import Menu from "../inc/Menu";
import { Link } from "react-router-dom";
import "./home.css";
import { useNavigate } from "react-router-dom";
import TopNavbar2 from "../inc/TopNavbar2";
function NotesSummar() {
  return (
    <>
      {/* <Menu/> */}
      <div className="body1 body-viewport">
        <div className="b1">
          <div className="container1">
            <div className="top-header1">
              <div class="image1">
                <img src="images/logo.png" alt="" />
              </div>
            </div>
            <TopNavbar2 />
          </div>
        </div>

        <main className="notes-main-div">
          <p>Comming soon...</p>
        </main>

        <footer class="footer1 footer1-position">
          <div class="containerr">
            <a href="#">© 2023, All rights reserved</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default NotesSummar;
