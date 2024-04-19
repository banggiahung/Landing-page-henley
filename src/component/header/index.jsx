function Header() {
  return (
    <>
    <div id="mobile-ctas">
        <a href="#" className="btn mobile-cta-btn" data-toggle="modal" data-target="#callback-modal">
            <img src="/images/call-back_nofill.svg" className="icon icon-call_back call-back white"/>
            Callback</a>
        <a href="#" className="btn mobile-cta-btn">
            <i className="icon-hg icon-hg-contact"></i> <span>Contact</span></a>
        <a href="tel:+41 44 266 22 22" className="btn mobile-cta-btn is-min">+41 44 266 22 22</a>
    </div>
    <div id="headers">
        <div id="contactBanner">
            <div className="align-items-center justify-content-end wrapper-padding">
                <a href="#" data-toggle="modal" data-target="#languagePicker-modal"><span>English</span><img
                        src="/images/arrow_dropdown.svg" width="16"/></a>
                <a href="#" data-toggle="modal" data-target="#callback-modal"><i
                        className="icon-hg icon-hg-call-back"></i><span>Callback</span></a>
                <a href="tel:+41 44 266 22 22"><i className="icon-hg icon-hg-call"></i><span>+41 44 266 22 22</span></a>
                <a href="/contact/worldwide-offices"><i className="icon-hg icon-hg-offices"></i><span>Worldwide
                        Offices</span></a>
                      <a href="#" data-toggle="modal" data-target="#languagePicker-modal">English<img src="/images/arrow_dropdown.svg" width="16"/></a>
            </div>
        </div>
        <header id="main-header" className="wrapper-padding">
            <div className="main-header-inner primary-nav">
                <a className="header-logo btn-style-none" href="/">
                    <img className="logo-full" src="/images/logo.svg" alt="Henley &amp; Partners en" width="214" height="29"/>
                    <img className="logo-small" src="/images/logo-small.svg" alt="Henley &amp; Partners" width="34"
                        height="21"/>
                </a>
                <div className="menus">
                    <nav className="main-nav">
                        <ul className="list-style-none nav-menu">
                            <li><a className="nav-links " href="/citizenship-investment">Citizenship</a></li>
                            <li><a className="nav-links " href="/residence-investment">Residence</a></li>
                            <li><a className="nav-links " href="/real-estate">Real Estate</a></li>
                            <li><a className="nav-links " href="/countries">Countries</a></li>
                            <li><a className="nav-links " href="/services">Services</a></li>
                            <li><a className="nav-links " href="/about">About</a></li>
                        </ul>
                    </nav>
                    <ul className="list-style-none d-md-none">
                        <li>
                            <a className="nav-links" href="#" data-toggle="modal"
                                data-target="#languagePicker-modal">English<img src="images/arrow_dropdown.svg"
                                    width="16"/></a>
                        </li>
                    </ul>
                    <div className="cta-btns full lang-en">
                        <a href="#"
                            className="btn cta-btn primary-btn primary-alt lang-btn"><i className="icon-hg icon-hg-contact"></i>
                            <span>Contact</span></a>
                    </div>
                    <button className="btn-style-none hamburger-menu trigger-header-menu">
                        <div className="lines"></div>
                    </button>
                </div>
            </div>
            <div className="main-header-inner sub-menu">
                <div className="bg-grey"></div>
                <div className="stacker-nav-container">
                    <nav id="stacker-nav-menu" className="stacker-nav"></nav>
                </div>

            </div>
        </header>
    </div>
    </>
  );
}


export default Header;