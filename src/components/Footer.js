// import React from "react";

// const Footer = () => {
//     return (
//         <footer>
//             <section classNameName="footer-container ">
//                 <img src="/Capture.png" alt="" classNameName="footer-img" />

//                 <div classNameName="footer-overlay"></div>
//             </section>
//         </footer>
//     );
// };

// export default Footer;


// import React from "react";
// import Link from 'next/link';
// const Footer = () => {
//     return (

//         <>
//             <div className="">

//                 <footer className="text-center text-lg-start text-dark footer">

//                     <section className="d-flex justify-content-between p-4 text-white footer-section">

//                         <div className="me-5 get-connected container">
//                             <span>Get connected with us on social networks:</span>
//                         </div>



//                         <div className="social-links">
//                             <a href="" className="text-white me-4">
//                                 <i className="fab fa-facebook-f"></i>
//                             </a>
//                             <a href="" className="text-white me-4">
//                                 <i className="fab fa-twitter"></i>
//                             </a>

//                         </div>

//                     </section>



//                     <section className="footer-links">
//                         <div className="container text-center text-md-start mt-5">

//                             <div className="row mt-3">

//                                 <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//                                     <h6 className="text-uppercase fw-bold">Company name</h6>
//                                     <hr className="mb-4 mt-0 d-inline-block mx-auto footer-hr" />
//                                     <p>
//                                         Here you can use rows and columns to organize your footer
//                                         content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                                         elit.
//                                     </p>
//                                 </div>




//                             </div>

//                         </div>
//                     </section>



//                     <div className="text-center p-3 footer-bottom">
//                         © 2020 Copyright:
//                         <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//                     </div>

//                 </footer>

//             </div>
//         </>

//     );
// };

// export default Footer;


import React from "react";
import Link from 'next/link';
const Footer = () => {
    return (

        <>
            <section className="deneb_cta">
                <div className="container">
                    <div className="cta_wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="cta_content">
                                    <h3>Have Any Complaint ?</h3>
                                    <p>We resolve complaints and provide relief to the public by carrying out independent investigations into complaints</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="button_box">
                                    <Link href="" className="btn btn-dark">Complain Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="deneb_footer">
                <div className="widget_wrapper" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="widget widegt_about">
                                    <div className="widget_title">
                                        <img src="assets/images/logo_1.png" className="img-fluid" alt="" />
                                    </div>
                                    <p>We resolve complaints and provide relief to the public by carrying out independent investigations into complaints about 'maladministration' in any Government of Sindh agency.</p>
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_link">
                                    <div className="widget_title">
                                        <h4>Links</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">What's new</a></li>
                                        <li><a href="#">Tenders</a></li>
                                        <li><a href="#">International Ombudsman</a></li>
                                        <li><a href="#">Our Value System</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_contact">
                                    <div className="widget_title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="contact_info">
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="tel:+919246147999">+92-21-99211026</a></p>
                                                <p><a href="tel:+92-21-99211031,25,28">+92-21-99211031,25,28</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="mailto:info@deneb.com">info@Ombudsman Sindh.com</a></p>
                                                <p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="info">
                                                <p><span>Karachi</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_area bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p className="text-white">Copyright &copy; 2009 Provincial Mohtasib (Ombudsman)'s Secretariat All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;
