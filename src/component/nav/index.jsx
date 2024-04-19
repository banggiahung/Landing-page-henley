

function Nav() {
  return (
 <>
 <div id="header-menu-popup">
        <div className="container">
            <div className="row row-1-links popover-row">
                <div className="col-md-2 offset-md-2">
                    <ul className="header-popup-menu">
                        <li><a className="btn popup-menu-link lead" href="/citizenship-investment">Citizenship by
                                Investment</a></li>
                        <li><a className="btn popup-menu-link lead" href="/residence-investment">Residence by Investment</a>
                        </li>
                        <li><a className="btn popup-menu-link lead" href="/real-estate">Real Estate</a></li>
                        <li><a className="btn popup-menu-link lead" href="/countries">Countries</a></li>
                        <li><a className="btn popup-menu-link lead" href="/services">Services</a></li>
                    </ul>
                </div>
                <div className="col-md-2 offset-md-1">
                    <ul className="header-popup-menu">
                        <li><a className="btn popup-menu-link lead" href="#">About</a></li>
                        <li><a className="btn popup-menu-link lead" href="/contact/worldwide-offices">Worldwide Offices</a>
                        </li>
                        <li><a className="btn popup-menu-link lead" href="/publications">Publications and Reports</a></li>
                        <li><a className="btn popup-menu-link lead" href="/newsroom/online-articles">Newsroom</a></li>
                        <li><a className="btn popup-menu-link lead" href="/events/upcoming-events">Events</a></li>
                        <li><a className="btn popup-menu-link lead"
                                href="/philanthropy/corporate-social-responsibility">Philanthropy</a></li>
                    </ul>
                </div>
                <div className="col-md-3 offset-md-1 col-cta-links">
                    <ul className="header-popup-menu last">
                        <li><a className="btn popup-menu-link lead" href="/passport-index">Henley Passport Index</a></li>
                        <li><a className="btn popup-menu-link lead" href="/passport-power">Henley Passport Power Index</a>
                        </li>
                        <li><a className="btn popup-menu-link lead" href="/ultimate-portfolio">Henley Ultimate Portfolio</a>
                        </li>
                        <li><a className="btn popup-menu-link lead"
                                href="/publications/henley-private-wealth-migration-dashboard">Henley Wealth Migration
                                Dashboard</a></li>
                        <li><a className="btn popup-menu-link lead" href="/publications/residence-program-index-2024">Henley
                                Residence Program Index</a></li>
                        <li><a className="btn popup-menu-link lead"
                                href="/publications/citizenship-program-index-2024">Henley Citizenship Program Index</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 offset-md-2 contact-button">
                    <a href="#" className="btn text-white" data-toggle="modal" data-target="#callback-modal">
                        <i className="icon-hg icon-hg-call-back"></i> <span>Callback</span></a>
                </div>
                <div className="col-sm-4 col-md-3 contact-button">
                    <a href="/contact" className="btn text-white">
                        <i className="icon-hg icon-hg-contact"></i> <span>Enquiry</span></a>
                </div>
                <div className="col-sm-4 col-md-3 contact-button">
                    <a href="tel:+41 44 266 22 22" className="btn text-white">+41 44 266 22 22</a>
                </div>
            </div>

            <div className="row row-2 popover-row">
                <div className="col-md-6 offset-md-2">
                    <span className="h2title white">The Global Leader in<br/>Residence and Citizenship by Investment</span>
                </div>
                <div className="col-md-4 col-social-icons">
                    <a href="/subscribe">
                        <img src="/images/email.svg" className="icon icon-email white" alt="email"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src="/images/facebook.svg" className="icon icon-facebook white" alt="facebook"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src="/images/x.svg" className="icon icon-twitter white" alt="x"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src="/images/linkedin.svg" className="icon icon-linkedin white" alt="linkedin"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src="/images/youtube.svg" className="icon icon-youtube white" alt="youtube"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src="/images/instagram.svg" className="icon icon-instagram white" alt="instagram"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src="/images/pinterest.svg" className="icon icon-pinterest white" alt="instagram"/>
                    </a>
                </div>
            </div>
        </div>
    </div></>
  );
}

export default Nav;