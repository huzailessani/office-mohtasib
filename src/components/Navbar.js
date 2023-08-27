import React from "react";
import Link from "next/link";


const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/About/WhoWeAre">Who We Are</Link></li>
                                    <li><Link class="dropdown-item" href="/About/OurCharter">Our Charter</Link></li>
                                    <li><Link class="dropdown-item" href="/About/TheSecratariat">The Secretariat</Link></li>
                                    <li><Link class="dropdown-item" href="/About/RegionalOffices">Regional offices</Link></li>
                                    <li><Link class="dropdown-item" href="/About/Organization">Organization</Link></li>
                                    <li><Link class="dropdown-item" href="/About/Profiles">Profiles</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href=" /OurServices/WhatWeDo">What We Do</Link></li>
                                    <li><Link class="dropdown-item" href="/OurServices/WhatWeDontDo">What We Don't Do</Link></li>
                                    <li><Link class="dropdown-item" href="/OurServices/HowCanWeHelpYou">How Can We Help You</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Children Complaints Office
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/PressRelease">Press Release</Link></li>
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/Events">Events</Link></li>
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/IntroductionCCO">Introduction CCO</Link></li>
                                    <li><Link class="dropdown-item" href="/ChildrenComplaint/Brochures">Brochures</Link></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Make A Complaint
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/MakingAComplaint">Making A Complaint</Link></li>
                                    <li><Link class="dropdown-item" href="//MakeAComplaint/ComplaintFAQs">Complaint FAQs</Link></li>
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/DownloadForm">Download Form</Link></li>
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/MakeAComplaintOnline">Make A Complaint Online</Link></li>
                                    <li><Link class="dropdown-item" href="/MakeAComplaint/ComplainAboutUs">Complain About Us</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="/Media/NewsLetter">Newsletter</Link></li>
                                    <li><Link class="dropdown-item" href="/Media/PressClippings">Press Clippings</Link></li>
                                    <li><Link class="dropdown-item" href=" /Media/knowledgeProduct">knowledgeProduct</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-white me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Special Initiatives
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><Link class="dropdown-item" href="/SpecialInitiatives/SPGRM">SPGRM</Link></li>
                                    <li><Link class="dropdown-item" href="/SpecialInitiatives/REACH">REACH</Link></li>
                                    <li><Link class="dropdown-item" href="/SpecialInitiatives/AOARETA">AOA RETA</Link></li>

                                </ul>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;