class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- main-footer -->
        <footer class="main-footer bg-color-2">
            <div class="footer-top">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget logo-widget">
                                <div class="support-box">
                                    <i class="far fa-envelope-open"></i>
                                    <h6>Free Consult</h6>
                                    <a class="text-lowercase text-break"
                                        href="mailto:info@smartawningsandcanopies.co.uk">info@smartawningsandcanopies.co.uk</a>
                                </div>
                                <div class="text">
                                    <p>We help customers create outdoor spaces that feel more comfortable and more usable. That can be instant shade from an Awning, a structured solution like Bioclimatic louvre pergolas, flexible all-weather cover with Retractable roof systems, or a bright sheltered area with Glass rooms.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget">
                                <div class="widget-title">
                                    <h5>Quick Links</h5>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">Company</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="contact.html">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget">
                                <div class="widget-title">
                                    <h5>Products</h5>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li><a href="retractable-roof-systems.html">Retractable Roof Systems</a></li>
                                        <li><a href="bioclimatic-louvre-pergolas.html">Bioclimatic Louvre Pergolas</a>
                                        </li>
                                        <li><a href="architectural-roof-solutions.html">Architectural Special Roof</a></li>
                                        <li><a href="awnings.html">Awnings</a></li>
                                        <li><a href="giant-umbrellas.html">Giant Umbrellas</a></li> 
                                        <li><a href="terrace-screens.html">Terrace Screens</a></li>
                                        <li><a href="glass-rooms.html">Glass Rooms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget post-widget">
                                <div class="widget-title">
                                    <h5>Get in Touch</h5>
                                </div>
                                <div class="post-inner">
                                    <div class="post">
                                        <span class="post-date">Address</span>
                                        <h6>45-47 Northumbria Drive Bristol, BS94PN</h6>
                                    </div>
                                    <div class="post">
                                        <span class="post-date">Email</span>
                                        <h6><a class="text-break text-lowercase"
                                                href="mailto:info@smartawningsandcanopies.co.uk">info@smartawningsandcanopies.co.uk</a>
                                        </h6>
                                    </div>
                                    <div class="post">
                                        <span class="post-date">Phone</span>
                                        <h6><a class="text-break text-lowercase" href="tel:07971 917 201">07971 917
                                                201</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="inner-box clearfix">
                        <div class="copyright pull-left">
                            <p>Copyright &copy; 2022 <a href="index.html">SMART</a>. All Rights Reserved.</p>
                        </div>
                        <ul class="footer-nav clearfix pull-right social-links">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- main-footer end -->
        `;
    }
}
customElements.define('app-footer', AppFooter);
