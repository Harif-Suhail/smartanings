class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- main header -->
        <header class="main-header">
            <!-- header-top -->
            <div class="header-top">
                <div class="auto-container">
                    <div class="top-inner clearfix">
                        <div class="text left-column pull-left">
                            <h6><i class="comment-icon fas fa-comments"></i>Looking for a Service?&nbsp;&nbsp;<a
                                    href="#"><i class="link-icon flaticon-right-arrow"></i>&nbsp;&nbsp;Book Now</a></h6>
                        </div>
                        <div class="right-column pull-right clearfix">

                            <ul class="social-links clearfix">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-lower -->
            <div class="header-lower">
                <div class="auto-container">
                    <div class="outer-box clearfix">
                        <div class="menu-area pull-left clearfix">
                            <div class="logo-box pull-left">
                                <figure class="logo"><a href="index.html"><img
                                            src="assets/images/smart_awnings_and_canopies_logo.png" alt=""></a></figure>
                            </div>
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About us</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Our Services</a>
                                        </li>
                                        <li class="dropdown"><a href="#">Products</a>
                                            <ul>
                                                <li><a href="retractable-roof-systems.html">Retractable Roof Systems</a></li>
                                                <li><a href="bioclimatic-louvre-pergolas.html">Bioclimatic Louvre
                                                        Pergolas</a></li>
                                                <li><a href="architectural-roof-solutions.html">Architectural Special Roof</a></li>
                                                <li><a href="awnings.html">Awnings</a></li>
                                                <li><a href="giant-umbrellas.html">Giant Umbrellas</a></li> 
                                                <li><a href="terrace-screens.html">Terrace Screens</a></li>
                                                <li><a href="glass-rooms.html">Glass Rooms</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="nav-right pull-right clearfix">
                            <div class="support-box">
                                <h5><i class="fas fa-headphones"></i>Call: <span>07971 917 201</span></h5>
                                <ul class="info-box">
                                    <li>
                                        <i class="far fa-map"></i>
                                        <h6>Address</h6>
                                        <span>45-47 Northumbria Drive Bristol, BS94PN</span>
                                    </li>
                                    <li>
                                        <i class="far fa-envelope-open"></i>
                                        <h6>Email</h6>
                                        <span><a
                                                href="mailto:info@smartawningsandcanopies.co.uk">info@smartawningsandcanopies.co.uk</a></span>
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i>
                                        <h6>Off. Hrs</h6>
                                        <span>Mon - Sat: 9 to 6.30</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="menu-area pull-left clearfix">
                            <div class="logo-box pull-left">
                                <figure class="logo"><a href="index.html"><img
                                            src="assets/images/smart_awnings_and_canopies_logo.png" alt=""></a></figure>
                            </div>
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                        <div class="nav-right pull-right clearfix">
                            <div class="support-box">
                                <h5><i class="fas fa-headphones"></i>Call: <span>07971 917 201</span></h5>
                                <ul class="info-box">
                                    <li>
                                        <i class="far fa-map"></i>
                                        <h6>Address</h6>
                                        <span>45-47 Northumbria Drive Bristol, BS94PN</span>
                                    </li>
                                    <li>
                                        <i class="far fa-envelope-open"></i>
                                        <h6>Email</h6>
                                        <span><a
                                                href="mailto:info@smartawningsandcanopies.co.uk">info@smartawningsandcanopies.co.uk</a></span>
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i>
                                        <h6>Off. Hrs</h6>
                                        <span>Mon - Sat: 9 to 6.30</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- main-header end -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>

            <nav class="menu-box">
                <div class="nav-logo"><a href="index.html"><img src="assets/images/smart_awnings_and_canopies_logo.png" alt=""
                            title=""></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
                <div class="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>45-47 Northumbria Drive Bristol, BS94PN</li>
                        <li><a href="tel:07971917201">07971 917 201</a></li>
                        <li><a href="mailto:info@smartawningsandcanopies.co.uk">info@smartawningsandcanopies.co.uk</a>
                        </li>
                    </ul>
                </div>
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div><!-- End Mobile Menu -->
        `;
    }
}
customElements.define('app-header', AppHeader);
