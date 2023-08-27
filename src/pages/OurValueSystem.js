import BaseLayout from "@/components/BaseLayout";

const OurCharter = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading">Our Value System</h2>
                        <p className="values-system-para mt-2">
                            The values system is a shared vision of the institution, developed by our officers. It is hoped that it will shape our strategic direction, serve as the overarching standards for our work and reflect our principles, work ethics and organizational culture.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center d-flex">
                <div className="col-md-5 col-12 ">
                    <div className="vision ">
                        <div className="row">
                            <h2 className="values-system-heading">Our Vision</h2>

                            <p className="values-system-para mt-2">
                                To promote high standards of governance, accountability and efficiency through administrative justice services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ">
                    <div className="vision ">
                        <div className="row">
                            <h2 className="values-system-heading">Our Mission</h2>

                            <p className="values-system-para mt-2">
                                To redress public grievances in a fair, prompt and transparent manner.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container our-values col-md-6">
                <div className="">
                    <ul className="values-list">
                        <li className="values-heading">Our Values</li>
                        <li>Fairness</li>
                        <li>Integrity</li>
                        <li>Continuous Improvement</li>
                        <li>Transparency</li>
                        <li>Independence</li>
                        <li>promptness</li>
                        <li>Confidentiality</li>
                        <li>Accessibility</li>
                        <li>Informality</li>
                        <li>Client Friendliness</li>
                    </ul>
                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default OurCharter;
