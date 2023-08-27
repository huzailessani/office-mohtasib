import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { SidebarContext } from "@/context/SidebarContext";

// Icons from react-icons library
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInsurance,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsPeople, BsSkipStartCircle, BsLink45Deg } from "react-icons/bs";
import { BiPhotoAlbum, BiMap } from "react-icons/bi";
import { SiOpenapiinitiative } from "react-icons/si";
import { TiContacts, FiMail } from "react-icons/ti";
import { GrSystem, GrServices, GrEmptyCircle, GrNotes, GrMultimedia } from "react-icons/gr";
import { GiSwordsPower } from "react-icons/gi";
import { FaPeopleGroup, FaChild, FaSitemap } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },

  {
    name: "Our Value System",
    href: "/OurValueSystem",
    icon: GrSystem,
  },
  // {
  //   name: "Our Services",
  //   href: "/OurServices/WhatWeDo", // Set the appropriate href for the "About" section
  //   icon: GrServices,
  //   subitems: [
  //     {
  //       name: "What We Do",
  //       href: "/OurServices/WhatWeDo", // Correct the href for the submenu
  //     },
  //     {
  //       name: "What We Dont Do",
  //       href: "/OurServices/WhatWeDontDo", // Correct the href for the submenu
  //     },
  //     {
  //       name: "How Can We Help You",
  //       href: "/OurServices/HowCanWeHelpYou", // Correct the href for the submenu
  //     },
  //   ],
  // },
  {
    name: "Our Service Charter",
    href: "/OurServiceCharter",
    icon: GiSwordsPower,
  },
  // {
  //   name: "Children Complaints Office",
  //   href: "/ChildrenComplaint/PressRelease", // Set the appropriate href for the "About" section
  //   icon: FaChild,
  //   subitems: [
  //     {
  //       name: "Press Release",
  //       href: "/ChildrenComplaint/PressRelease", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Events",
  //       href: "/ChildrenComplaint/Events", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Introduction CCO",
  //       href: "/ChildrenComplaint/IntroductionCCO", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Brochures",
  //       href: "/ChildrenComplaint/Brochures", // Correct the href for the submenu
  //     },
  //   ],
  // },
  // {
  //   name: "Make A Complaint",
  //   href: "/MakeAComplaint/MakingAComplaint", // Set the appropriate href for the "About" section
  //   icon: GrNotes,
  //   subitems: [
  //     {
  //       name: "Making A Complaint",
  //       href: "/MakeAComplaint/MakingAComplaint", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Complaint FAQs",
  //       href: "/MakeAComplaint/ComplaintFAQs", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Download Form",
  //       href: "/MakeAComplaint/DownloadForm", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Make A Complaint Online",
  //       href: "/MakeAComplaint/MakeAComplaintOnline", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Complain About Us",
  //       href: "/MakeAComplaint/ComplainAboutUs", // Correct the href for the submenu
  //     },
  //   ],
  // },
  {
    name: "What's New",
    href: "/WhatsNew",
    icon: BsSkipStartCircle,
  },
  // {
  //   name: "Media",
  //   href: "/Media/NewsLetter", // Set the appropriate href for the "About" section
  //   icon: GrMultimedia,
  //   subitems: [
  //     {
  //       name: "Newsletter",
  //       href: "/Media/NewsLetter", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Press Clippings",
  //       href: "/Media/PressClippings", // Correct the href for the submenu
  //     },
  //     {
  //       name: "Knowledge Products",
  //       href: "/Media/knowledgeProduct", // Correct the href for the submenu
  //     },
  //   ],
  // },
  // {
  //   name: "Special Initiatives",
  //   href: "/SpecialInitiatives/SPGRM", // Set the appropriate href for the "About" section
  //   icon: SiOpenapiinitiative,
  //   subitems: [
  //     {
  //       name: "SPGRM",
  //       href: "/SpecialInitiatives/SPGRM", // Correct the href for the submenu
  //     },
  //     {
  //       name: "REACH",
  //       href: "/SpecialInitiatives/REACH", // Correct the href for the submenu
  //     },
  //     {
  //       name: "AOA RETA",
  //       href: "/SpecialInitiatives/AOARETA", // Correct the href for the submenu
  //     },
  //   ],
  // },

  {
    name: "Vacancies",
    href: "/Vacancies",
    icon: GrEmptyCircle,
  },
  {
    name: "International Ombudsman Institute",
    href: "/InternationalOmbudsman",
    icon: SiOpenapiinitiative,
  },
  {
    name: "Tenders",
    href: "/Tenders",
    icon: AiOutlineProject,
  },
  {
    name: "Links",
    href: "/Links",
    icon: BsLink45Deg,
  },
  {
    name: "Photo Gallery",
    href: "/PhotoGallery",
    icon: BiPhotoAlbum,
  },

  {
    name: "Contact Us",
    href: "/contact",
    icon: TiContacts,
  },
  {
    name: "Site Map",
    href: "/SiteMap",
    icon: FaSitemap,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    // <div className="sidebar__wrapper">
    //   <button className="sidebar-button" onClick={toggleSidebarcollapse}>
    //     {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
    //   </button>
    //   <aside className="sidebar" data-collapse={isCollapsed}>
    //     <div className="sidebar__top">
    //       <Image
    //         width={80}
    //         height={80}
    //         className="sidebar__logo"
    //         src="/logo.png"
    //         alt="logo"
    //       />
    //       <div className="d-flex flex-column ms-3">
    //         <p className="sidebar__logo-name">Provincial Ombudsman </p>
    //         <span>(Mohtasib) Sindh</span>
    //       </div>
    //     </div>
    //     <ul className="sidebar__list">
    //       {sidebarItems.map(({ name, href, icon: Icon, subitems }) => (
    //         <li className="sidebar__item" key={name}>
    //           <Link
    //             className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""}`}
    //             href={href}
    //           >
    //             <span className="sidebar__icon">
    //               <Icon />
    //             </span>
    //             <span className="sidebar__name">{name}</span>
    //           </Link>
    //           {router.pathname === href && subitems && (
    //             <ul className={`sidebar__sublist ${router.pathname.startsWith(href) ? "sidebar__sublist--active" : ""}`}>
    //               {subitems.map(({ name, href, icon: SubIcon }) => (
    //                 <li className="sidebar__subitem" key={name}>
    //                   <Link
    //                     className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""}`}
    //                     href={href}
    //                   >
    //                     <span className="sidebar__icon">

    //                     </span>
    //                     <span className="sidebar__name">{name}</span>
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </aside>
    // </div>
    <div className="sidebar__wrapper">
      <button className="sidebar-button" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.png"
            alt="logo"
          />
          <div className="d-flex flex-column ms-3">
            <p className="sidebar__logo-name">Provincial Ombudsman </p>
            <span>(Mohtasib) Sindh</span>
          </div>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""
                    }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>

  );
};

export default Sidebar;