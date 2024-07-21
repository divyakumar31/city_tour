import React from "react";
import "./Conservation.css";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";

const Conservation = () => {
    return (
        <>
            <div className="title title-font font">Conservation</div>
            <div className="super-parent-div">

                <div className="content-div">
                    <h4 className="content-title font text-center">Respecting Heritage</h4>
                    <div className="content-title font description">
                        We aim at preserving value, characteristics and culture continuing to
                        provide a sense of identity and continuity in this rapidly modernising
                        world.
                    </div>
                </div>

                <div className="main-div">
                    <div>
                        <img className="img" src={Image1} alt={"image"} />
                    </div>

                    <div>
                        <div>
                            <div className="font content-title text-center">Heritage Department</div>
                            <div className="font desc-content">
                                Heritage Cell within Amdavad Municipal Corporation was established in collaboration with CRUTA Foundation, an NGO, in July 1996 with the objective of initiating strategic interventions to conserve and promote the rich heritage of the city. It was the first heritage cell in India within an Urban Local Body (ULB). Now, the AMC has become a national leader in urban heritage conservation.
                                The heritage cell has now been upgraded and transformed into a full- fledged Heritage Department. These initiatives have led to inscription of Historic City of Ahmedabad on the World Heritage list by UNESCO.
                            </div>
                        </div>

                        <div>
                            <div className="font content-title text-pad">Function</div>
                            <div className="font desc-content">
                                Heritage Department acts as a catalyst to preserve the cultural heritage, both tangible & intangible heritage aspects of the city. It undertakes programs and projects such as heritage awareness creation and educational programs, identification and listing of heritage resources, conduction of heritage walk, organizing promotional programs, and heritage based lectures, seminars, conferences, painting competitions, exhibitions, besides physical conservation and restoration of heritage buildings and structures located in the city. Processing of heritage building Repair/ restoration application including obtaining recommendations of the Heritage Conservation Committee appointed by the Govt. of Gujarat on matters related to Heritage Conservation.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-div-2">
                    <div className="margin-right">
                        <div>
                            <div className="font content-title">Initiatives</div>
                            <div className="font desc-content-2">
                            After the establishment of Heritage Cell in 1996, Heritage Walk was launched in 1997. An MOU with French Government was signed for co-operation to revitalize the walled city. In the year 2001, a tentative list of heritage buildings in the walled city was prepared in 2001. A number of privately owned heritage buildings have been restored with the technical support of the heritage cell. Every year World Heritage Week and World Heritage days are being celebrated with various cultural heritage, educational and promotional programs, including organizing guided visits to the city museum and heritage sites for school children besides organizing, photography exhibition, painting competitions etc.
                            </div>
                        </div>

                        <div>
                            <div className="font content-title">Projects Undertaken</div>
                            <div className="font desc-content-2">
                            Apart from education and awareness programs a number of actual restoration and up gradation projects such as restoration of Tankshal- ni Haveli, Jamalpur Gate, Step well of Bapunagar, stepwell of Uttamnagar, Vadaj stepwell, upgradation of Kavi Dalpatram Chowk, upgradation of AkhaBhagat Chowk, Restoration of Dandi Pol besides the restoration of more than 20 old Chabutras, Bhadra Fort Revitalization Project, Restoration of 75% of Fort Walls, Restoration of Calico Dome Basement, Restoration of Kankaria Lake have been successfully completed.
                            Major restoration projects currently under progress include:

                            <ol style={{ listStyleType: 'decimal' }}>
                                <li>Restoration of Fortwalls</li>
                                <li>Restoration of Kankaria lake steps and embankments</li>
                                <li>Restoration of Raikhad Gate</li>
                                <li>Restoration of Chabutaras at different location of walled city. </li>
                                <li>Restoration of Calico Dome.</li>
                            </ol>

                            </div>
                        </div>
                    </div>

                    <div>
                        <img className="img" src={Image2} alt={"image"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Conservation;
