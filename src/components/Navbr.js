
import { Link} from 'react-scroll';

function Navbr() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="row">

          <div className="col-12">





            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon "></span>
                </button>
                <Link className="navbar-brand " spy={true} smooth={true} offset={50} duration={500}  to="/">Profession</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">

                    <li className="nav-item">
                      <Link className="nav-link  ms-md-3 active"  spy={true} smooth={true} offset={-100} duration={500} aria-current="page" to="bio">Bio</Link>
                    </li>

                    <li className="nav-item ms-md-3">
                      <Link className="nav-link"  spy={true} smooth={true} offset={10} duration={500} to="qualification">Qualification</Link>
                    </li>
                    <li className="nav-item ms-md-3">
                      <Link className="nav-link" spy={true} smooth={true} offset={10} duration={500}  to="Experience">Experience</Link>
                    </li>
                   
                    <li className="nav-item ms-md-3">
                      <Link className="nav-link" spy={true} smooth={true} offset={50} duration={500}  to="Award">Awards</Link>
                    </li>
                    <li className="nav-item ms-md-3">
                      <Link className="nav-link" spy={true} smooth={true} offset={50} duration={500}  to="ResearchandPublicatin">Research & Publication</Link>
                    </li>
                   
                    
                  </ul>
                  <button class="btn btn-outline-success ms-auto" type="submit" ><Link className="nav-link" spy={true} smooth={true} offset={5} duration={500}  to="Contact">Contact Me</Link>    </button>
                </div>
           
              </div>
            </nav>
          </div>


        </div>



      </div>
    </>
  );
}

export default Navbr;