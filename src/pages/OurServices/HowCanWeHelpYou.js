import BaseLayout from "@/components/BaseLayout";

const HowCanWeHelp = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading">How can we help you</h2>
                        <p className="values-system-para mt-2 pe-3">
                            We aim to redress public grievances as fairly and as quickly as we can, after examining all facts. If we think the agency you are complaining about has treated you fairly, we will tell you.
                        </p>
                        <p className="values-system-para mt-2 pe-3">
                            If we determine that the agency has acted wrongly, we will recommend the agency to put things right for you. This can include recommending that the agency provide you relief sought, and to treat you fairly and in accordance with law.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>;
};

export default HowCanWeHelp;
