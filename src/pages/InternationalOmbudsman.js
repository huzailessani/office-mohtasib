import BaseLayout from "@/components/BaseLayout";
import Link from 'next/link';

const InternationalOmbudsman = () => {
    return <BaseLayout>

        <div className="container">
            <div className="our-value-system mt-5">
                <div className="row">
                    <div className="col-md-12 ms-md-5 pe-5">
                        <h2 className="values-system-heading mb-2">International Ombudsman Institute</h2>
                        <ul className="values-list">
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="https://www.theioi.org/ioi-news/current-news/asian-region-elects-two-new-directors-for-the-ioi-board-of-directors?pk_campaign=Newsletter-Ombudsman-News-34%2F2021&pk_source=newsletter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IOI | Asian Region elects two new Directors for the IOI Board of Directors
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="https://www.theioi.org/ioi-news/current-news/provincial-ombudsman-sindh-presents-annual-report-2020-to-chief-minister-sindh?pk_campaign=Newsletter-Ombudsman-News-40%2F2021&pk_source=newsletter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    PAKISTAN | Provincial Ombudsman Sindh presents Annual Report 2020 to Chief Minister Sindh
                                </a>
                            </li>
                            <li className="values-system-para mt-3">
                                <a className="underline"
                                    href="https://www.theioi.org/ioi-news/current-news/launching-ceremony-of-study-on-issues-of-girls-education-in-sindh?pk_campaign=Newsletter-Ombudsman-News-43%2F2021&pk_source=newsletter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    PAKISTAN | Launching ceremony of study on “Issues of girls education in Sindh”
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;

    </BaseLayout>;
};

export default InternationalOmbudsman;
