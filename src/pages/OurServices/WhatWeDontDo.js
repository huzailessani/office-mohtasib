import BaseLayout from "@/components/BaseLayout";

const WhatWeDontDo = () => {
    return <BaseLayout>
        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="values-system-heading">What we don't do</h2>
                        <p className="values-system-para mt-2 pe-3">
                            We cannot help you if your complaint is about:
                        </p>
                        <li className="values-system-para mt-2 pe-3">
                            Matters that are sub-judice (i.e. already under consideration of any court of law)
                        </li>
                        <li className="values-system-para mt-2 pe-3">
                            Service matters (relating to the public agency in which the complainant is currently employed; however, we can and do take up complaints against delay or mis-interpretation in payment of retirement benefits or discrimination meted out to the employees)
                        </li>
                        <li className="values-system-para mt-2 pe-3">
                            External affairs
                        </li>
                        <li className="values-system-para mt-2 pe-3">
                            Defence matters
                        </li>
                    </div>
                </div>
            </div>
        </div>

    </BaseLayout>;
};

export default WhatWeDontDo;
