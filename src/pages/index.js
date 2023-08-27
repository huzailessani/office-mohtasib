import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import Link from 'next/link';

import { GiInjustice } from "react-icons/gi";
import { GiSwordsPower } from "react-icons/gi";
import { MdStickyNote2, MdOutlineHowToVote } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

const Home = () => {
  return <BaseLayout>
    <section className="dashboard-section">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">

            <img src="/img-2.jpg" alt="" className="dashboard-slider-image" />
          </div>
          <div class="carousel-item">
            <img src="/img-3.jpg" alt="" className="dashboard-slider-image" />
          </div>
          <div class="carousel-item">
            <img src="/img-4.jpg" alt="" className="dashboard-slider-image" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section>
      <div className=" mt-5">
        <div className="d-flex cards flex-wrap align-items-center justify-content-center">
          <div className="card  col-md-2 col-sm-5 col-12 m-5">
            <GiSwordsPower className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">SERVICE CHARTER</Link>
            </div>
          </div>
          <div className="card col-md-2 col-sm-5 col-12 m-5">
            <MdStickyNote2 className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">MAKE A COMPLAINT</Link>
            </div>
          </div>
          <div className="card  col-md-2 col-sm-5 col-12 m-5">
            <MdOutlineHowToVote className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">HOW TO COMPLAINT</Link>
            </div>
          </div>
          <div className="card  col-md-2 col-sm-5 col-12 m-5">
            <AiFillQuestionCircle className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">COMPLAINTS FAQS</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section>
      <div className="container ombudsman-message">
        <div className="row ">
          <div className="col-md-3">
            <img src="/ombudsman-image.png" alt="" className="mb-5" />
          </div>
          <div className=" col-md-8">
            <p className="ombudsman-message-text mt-5 ms-md-5">
              It is my pleasure to welcome you to the website of the Office of the Ombudsman Sindh. This website has been developed to provide direct access to all masses – particularly, the citizens who are aggrieved by the actions of any functionary of the Government of Sindh, and all citizens in general.
            </p>
          </div>

        </div>
      </div>
    </section>
    {/* <section>
      <div className=" mt-5 d-flex container row" >
        <div className="cards flex-wrap align-items-center justify-content-center ">
          <div className="card2 col-md-2 col-sm-5 col-12 m-3 center-content">
            <GiSwordsPower className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">SERVICE CHARTER</Link>
            </div>
          </div>

          <div className="card2  col-md-2 col-sm-5 col-12 m-3 center-content">
            <MdOutlineHowToVote className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">HOW TO COMPLAINT</Link>
            </div>
          </div>
          <div className="card2  col-md-2 col-sm-5 col-12 m-3 mb-5 center-content">
            <AiFillQuestionCircle className="dashboard-card-icon" />
            <div className="card-text">
              <Link href="/about">COMPLAINTS FAQS</Link>
            </div>
          </div>
        </div>
        <div className="justice-portion">
          <GiInjustice className="justice-img" />
          <h3>Mandate</h3>
          <p>The Ombudsman Punjab has the mandate to protect the rights of the people, ensuring adherence to the rule of law, diagnosing, redressing and rectifying any injustice done to a person through maladministration and suppressing corrupt practices.</p>
        </div>
      </div>
    </section> */}

    <section>
      <div className="mt-5 container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <div className="cards d-flex flex-wrap align-items-center justify-content-center">
              <div className="card2 col-md-12 col-sm-6 col-12 m-3 center-content">
                <GiSwordsPower className="dashboard-card-icon" />
                <div className="card-text">
                  <Link href="/about">SERVICE CHARTER</Link>
                </div>
              </div>

              <div className="card2 col-md-12 col-sm-6 col-12 m-3 center-content">
                <MdOutlineHowToVote className="dashboard-card-icon" />
                <div className="card-text">
                  <Link href="/about">HOW TO COMPLAINT</Link>
                </div>
              </div>
              <div className="card2 col-md-12 col-sm-6 col-12 m-3 mb-5 center-content">
                <AiFillQuestionCircle className="dashboard-card-icon" />
                <div className="card-text">
                  <Link href="/about">COMPLAINTS FAQS</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-2 col-md-6 mt-2">
            <div className="justice-portion">
              <GiInjustice className="justice-img" />
              <h3>Mandate</h3>
              <p>The Ombudsman Sindh has the mandate to protect the rights of the people, ensuring adherence to the rule of law, diagnosing, redressing and rectifying any injustice done to a person through maladministration and suppressing corrupt practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  </BaseLayout>;
};

export default Home;
