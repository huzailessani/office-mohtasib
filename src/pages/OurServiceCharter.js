import BaseLayout from "@/components/BaseLayout";

const OurServiceCharter = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="values-system-heading">Our Service Charter</h2>
                        <p className="values-system-para mt-2">
                            We are committed to redress of public grievances in an efficient, effective and transparent manner. We constantly strive to improve our level of responsiveness to the public and have therefore instituted standards for services and performance, as given below:
                        </p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center justify-content-center d-flex">
                <div className="col-md-5  col-12 ">
                    <div className="vision ">
                        <div className="row">
                            <h2 className="values-system-heading">Productivity</h2>
                            <p className="values-system-para mt-2">Every Investigating Officer shall dispose of at least thirty five complaints per month.                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ms-md-5">
                    <div className="vision ">
                        <div className="row">
                            <h2 className="values-system-heading">Efficiency
                            </h2>

                            <p className="values-system-para mt-2">
                                Complaints shall be disposed of within three months of admission.

                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="our-value-system ">
                <div className="">
                    <div className="col-md-12">
                        <h2 className="values-system-heading">Registration Wing Standards</h2>
                        <h2 className="values-system-heading"> Efficiency</h2>
                        <p className="values-system-para mt-2">
                            A decision to either admit or reject a complaint shall be made within 24 hours of its receipt
                        </p>
                        <p className="values-system-para mt-2">
                            A complaint that has been admitted shall be forwarded to the relevant Investigating Officer within 24 hours of its admission.
                        </p>
                        <p className="values-system-para mt-2">
                            Acknowledgement or a letter of regret to the complainant shall be sent within 24 hours of the decision to admit or reject the complaint.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </BaseLayout>;
};

export default OurServiceCharter;
