import { Link } from "@mui/material";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find Me</h4>
                                <span>XXX Ha Noi, Viet Nam</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call Me</h4>
                                <span><Link href={'mailto:nguyenanh1812zxc@gmail.com'} style={{color: 'inherit', textDecoration: 'none' }} >+0399 606 xxx</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail</h4>
                                <span><Link href={'mailto:nguyenanh1812zxc@gmail.com'} style={{color: 'inherit', textDecoration: 'none' }} >nguyenanh1812zxc@gmail.com</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link href={'#'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYC9LcqAM00Z_IBelVJfJNGaV6uzTTQW2mw&usqp=CAU" className="img-fluid" alt="logo" /></Link>
                            </div>
                            <div className="footer-text">
                                <p>Movies Web project</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow Me</span>
                                <Link href={"https://www.facebook.com/anhnguyen.1814"}><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link href={'#'}><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link href={'#'}><i className="fab fa-google-plus-g google-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link href={'#'}>Home</Link></li>
                                <li><Link href={'#'}>about</Link></li>
                                <li><Link href={'#'}>services</Link></li>
                                <li><Link href={'#'}>portfolio</Link></li>
                                <li><Link href={'#'}>Contact</Link></li>
                                <li><Link href={'#'}>About us</Link></li>
                                <li><Link href={'#'}>Our Services</Link></li>
                                <li><Link href={'#'}>Expert Team</Link></li>
                                <li><Link href={'#'}>Contact us</Link></li>
                                <li><Link href={'#'}>Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action={'#'}>
                                    <input type="text" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <Link to="mailto:nguyenanh1812zxc@gmail.com">anhnt</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to={'#'}>Home</Link></li>
                                <li><Link to={'#'}>Terms</Link></li>
                                <li><Link to={'#'}>Privacy</Link></li>
                                <li><Link to={'#'}>Policy</Link></li>
                                <li><Link to={'#'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}
