import {memo, useState} from 'react';
import type {FC} from 'react';
import Cookies from "universal-cookie";
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon2} from './VectorIcon2';
import {VectorIcon3} from './VectorIcon3';
import {VectorIcon} from './VectorIcon';
import {useNavigate, useParams} from "react-router-dom";
import {CreditCardForm} from "../CreditCardForm/CreditCardForm";
import {FinishedAll} from "../FinishedAll/FinishedAll"

interface Props {
    className?: string;
}

/* @figmaId 29:2 */
export const MyProcessList: FC<Props> = memo(function GalileoDesign(props = {}) {

    const navigate = useNavigate();
    const {myId}: any = useParams();
    const cookies = new Cookies();
    const myProgress = cookies.get(myId);
    const [isActive, setIsActive] = useState(myProgress.payment);
    const blueBarPerTax = 350 / myProgress.taxes.length;
    let blueBarWidth = 0;

    myProgress.taxes.forEach((tax: any) => {
        if (tax.paid)
            blueBarWidth += blueBarPerTax;
    });
    const alrPaid = myProgress.taxes.filter((tax: any) => tax.paid);
    const finishedAll = useState(blueBarWidth === 350);

    // if (finishedAll)
    //     return <FinishedAll/>;

    if (!isActive)
        return <CreditCardForm onSubmit={setIsActive}/>;
    else
        return (
            <div className={`${resets.storybrainResets} ${classes.root}`}>
                <div className={classes.depthFrame}>
                    <div className={classes.depth1Frame}>
                        <div className={classes.depth2Frame}>
                            <button className={classes.depth3Frame} onClick={() => navigate("/continue")}>
                                <div className={classes.depth4Frame}>
                                    <div className={classes.depth5Frame}>
                                        <div className={classes.vector}>
                                            <VectorIcon className={classes.icon}/>
                                        </div>
                                        <div className={classes.depth6Frame}></div>
                                    </div>
                                </div>
                            </button>
                            <div className={classes.depth3Frame1}>
                                <div className={classes.depth4Frame2}>
                                    <div className={classes.depth5Frame2}>
                                        <div className={classes.transferAccount}>התהליך שלך</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={classes.depth4Frame3}></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.depth1Frame1}>
                        <div className={classes.depth2Frame2}>
                            <div className={classes.depth3Frame3}>
                                <div className={classes.yourProgress}>הקצב שלך</div>
                            </div>
                        </div>
                    </div>
                    <button className={classes.depth1Frame2} onClick={() => navigate('mytaxes')}>
                        <div className={classes.depth2Frame3}>
                            <div className={classes.depth3Frame4}>
                                <div className={classes.depth4Frame3}>
                                    <div className={classes.depth5Frame3}>
                                        <div className={classes.vector2}>
                                            <VectorIcon2 className={classes.icon2}/>
                                        </div>
                                        <div className={classes.depth6Frame2}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.depth3Frame12}>
                                <div className={classes.depth4Frame4}>
                                    <div className={classes.depth5Frame4}>
                                        <div className={classes.taxReturn}>תשלומי מיסים</div>
                                    </div>
                                </div>
                                <div className={classes.depth4Frame1}>
                                    <div className={classes.depth5Frame5}>
                                        <div style={{direction: "rtl"}} className={classes._35Completed}>
                                            {/*{`${alrPaid.length}/${myProgress.taxes.length} שולמו`}*/}
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.depth4Frame22}>
                                    <div className={classes.depth5Frame6}>
                                        <div className={classes._2TasksDueTomorrow}>
                                            {`${myProgress.taxes.length - alrPaid.length} נותרו · עד מחר`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <div className={classes.depth1Frame3}>
                        <div className={classes.depth2Frame4}>
                            <div style={
                                {
                                    width: `${350 - (blueBarPerTax * alrPaid.length)}px`,
                                    height: "8px",
                                    flexDirection: "column",
                                    borderRadius: "4px",
                                    backgroundColor: "#d1d1e8",
                                }
                            }>
                            </div>
                            <div style={
                                {
                                    width: `${blueBarPerTax * alrPaid.length}px`,
                                    height: "8px",
                                    flexDirection: "column",
                                    borderRadius: "4px",
                                    backgroundColor: "#1a1ae5",
                                }
                            }></div>
                        </div>
                        <div className={classes.depth2Frame1}>
                            <div className={classes.depth3Frame6}>
                                <div className={classes._35TasksCompleted}>
                                    {`${alrPaid.length}/${myProgress.taxes.length} תשלומים הושלמו`}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className={classes.depth1Frame4}>*/}
                    {/*    <div className={classes.depth2Frame5}>*/}
                    {/*        <div className={classes.depth3Frame7}>*/}
                    {/*            <div className={classes.depth4Frame5}>*/}
                    {/*                <div className={classes.depth5Frame7}>*/}
                    {/*                    <div className={classes.vector3}>*/}
                    {/*                        <VectorIcon3 className={classes.icon3}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={classes.depth6Frame3}></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.depth3Frame14}>*/}
                    {/*            <div className={classes.depth4Frame6}>*/}
                    {/*                <div className={classes.depth5Frame8}>*/}
                    {/*                    <div className={classes.qualityCheck}>Quality check</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame12}>*/}
                    {/*                <div className={classes.depth5Frame9}>*/}
                    {/*                    <div className={classes._2Completed}>0/2 completed</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame23}>*/}
                    {/*                <div className={classes.depth5Frame10}>*/}
                    {/*                    <div className={classes._1TaskDueIn4Days}>1 task · Due in 4 days</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame5}>*/}
                    {/*    <div className={classes.depth2Frame6}>*/}
                    {/*        <div className={classes.depth3Frame8}></div>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.depth2Frame12}>*/}
                    {/*        <div className={classes.depth3Frame9}>*/}
                    {/*            <div className={classes._2TasksCompleted}>0/2 tasks completed</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame6}></div>*/}
                    {/*<div className={classes.depth1Frame7}>*/}
                    {/*    <div className={classes.depth2Frame7}>*/}
                    {/*        <div className={classes.depth3Frame10}>*/}
                    {/*            <div className={classes.depth4Frame7}>*/}
                    {/*                <div className={classes.createAProcess}>Create a process</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame8}></div>*/}
                </div>
            </div>
        );
});
