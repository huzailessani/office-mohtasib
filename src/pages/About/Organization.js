import BaseLayout from "@/components/BaseLayout";

const OurCharter = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12  ">
                        <h2 className="values-system-heading">Organization</h2>

                    </div>
                </div>
            </div>
            <div className="our-value-system mt-5">
                <div className="center-container">
                    <div className="col-md-12 center-content">
                        <img src="/organization-chart.png" alt="" />
                    </div>
                </div>
            </div>



        </div>
    </BaseLayout>;
};

export default OurCharter;
