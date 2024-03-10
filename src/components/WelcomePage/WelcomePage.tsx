import {memo, useState} from 'react';
import type {FC} from 'react';
import 'animate.css';
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate} from "react-router-dom";

interface Props {
    className?: string;
}

/* @figmaId 50:2 */
export const WelcomePage: FC<Props> = memo(function WelcomePage(props = {}) {

    const navigate = useNavigate();
    const [animation, setAnimation]: any = useState();
    const swipeRight = `${classes.depth4Frame12} ${animation?.includes('Right') ? animation : null}`;
    const swipeLeft = `${classes.depth4Frame4} ${animation?.includes('Left') ? animation : null}`;

    const payTaxes = () => {
        // setTimeout(() => navigate('/login/myList'), 700);
        navigate('/login/myList')
        // setAnimation("animate__animated animate__slideOutRight");
    };

    const changeAddress = () => {
        // setTimeout(() => navigate('/login/editaddress'), 700);
        navigate('/login/editaddress')
        // setAnimation("animate__animated animate__slideOutLeft");
    };


    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame2}>
                            <div className={classes.depth4Frame2}>
                                <div className={classes.depth5Frame2}>
                                    <div className={classes.depth6Frame2}>
                                        <br/><br/><br/><br/>
                                        <div className={classes.depth7Frame2}>
                                            <div style={{direction: "rtl"}}
                                                 className={classes.payYourRentBillsAndMoreWithACr}>
                                                {`שלם את מיסי הבית שלך בלחיצת כפתור`}
                                                {/*Pay your bills within one click*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.depth6Frame1}>
                                        <div className={classes.depth7Frame3}>
                                            <br/>
                                            <div className={classes.earnPointsOrMilesOnYourRentAnd}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame3}>
                                <div className={classes.depth5Frame3}>
                                    <div className={classes.depth6Frame3}>
                                        <div style={{direction: "rtl"}} className={classes.getTheMostOutOfYourHome}>
                                            {"סוויפט-הום הופכת את טרחת תשלום המיסים לעניין של שניות!"}
                                            {/*SwiftHome makes your bills payment chore to a matter of seconds*/}
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.depth5Frame1}>
                                    {/*<div className={classes.depth6Frame4}>*/}
                                    <div style={{direction: "rtl"}} className={classes.subtitle}>
                                        {"לא רשום עדיין ?"}
                                    </div>
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className={classes.depth4Frame1}>
                                <button className={classes.depth5Frame4} onClick={() => navigate('/create')}>
                                    <div className={classes.depth6Frame5}>
                                        <div className={classes.depth7Frame4}>
                                            <div className={classes.depth8Frame2}>
                                                <div style={{direction: "rtl"}} className={classes.signUp}>הירשם</div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div className={classes.helper}>
                            <div className={classes.subtitle}>
                                {"משתמש קיים ?"}
                            </div>
                        </div>
                        <div className={classes.depth4Frame1}>
                            <button className={classes.depth5Frame4} onClick={() => navigate('/login')}>
                                <div className={classes.depth6Frame5}>
                                    <div className={classes.depth7Frame4}>
                                        <div className={classes.depth8Frame2}>
                                            <div style={{direction: "rtl"}} className={classes.signUp}>התחבר</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <br/>
                        <div className={classes.depth3Frame12}>
                            <button className={swipeLeft} onClick={changeAddress}>
                                <div className={classes.depth5Frame12}>
                                    {/*<div className={classes.depth6Frame7}>*/}
                                        <div style={{direction: "rtl"}} className={classes.payRent}>שנה כתובת מגורים</div>
                                    {/*</div>*/}
                                </div>
                                <div className={classes.depth5Frame5}>
                                    <div className={classes.depth6Frame6}></div>
                                </div>
                            </button>
                            <button className={swipeRight} onClick={payTaxes}>
                                <div className={classes.depth5Frame13}>
                                    {/*<div className={classes.depth6Frame9}>*/}
                                        <div style={{direction: "rtl"}} className={classes.payBills}>שלם מיסים</div>
                                    {/*</div>*/}
                                </div>
                                <div className={classes.depth5Frame6}>
                                    <div className={classes.depth6Frame8}></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame4}></div>
            </div>
        </div>
    );
});
