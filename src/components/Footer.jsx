import Contact from "./Contact";


function Footer() {
    return (<>
        <div className=" container-fluid footer-p p-md-5" >
        <Contact></Contact>
        
            <div className="row d-flex justify-content-end">
            
                <div className="col-md-6">
                    <div className="row d-flex justify-conten-evenly">
                        <div className="col-sm-4">Useful Links</div>
                        <div className="col-sm-4"> Contact Me   </div>
                        <div className="col-sm-4">Follow Me</div>
                        <div className="col-sm-4">Awards</div>
                        <div className="col-sm-4">+92 346 48571221</div>
                        <div className="col-sm-4"><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className="col-sm-4">Experience</div>
                        <div className="col-sm-4">asadullah@kiu.edu.pk</div>
                        <div className="col-sm-4"><ion-icon  name="logo-linkedin"></ion-icon></div>
                        <hr />
                        <div className="col">All rights are reserved.</div>
                    </div>


                </div>
            </div>


        </div>


    </>);
}

export default Footer;