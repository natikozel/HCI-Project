import {memo} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate} from "react-router-dom";

interface Props {
    className?: string;
}

/* @figmaId 69:161 */
export const FinishedAddressEdit: FC<Props> = memo(function GalileoDesign(props = {}) {

    const navigate = useNavigate();

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}>
                            <div className={classes.depth4Frame}>
                                <div className={classes.depth5Frame}>
                                    <div className={classes.vector}>
                                        <VectorIcon className={classes.icon}/>
                                    </div>
                                    <div className={classes.depth6Frame}></div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.depth3Frame1}>
                            <div className={classes.depth4Frame2}>
                                <div className={classes.depth5Frame2}>
                                    <div style={{direction: "rtl"}} className={classes.shippingAddress}>שינוי כתובת
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.depth3Frame2}>
                            <div className={classes.depth4Frame3}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div style={{direction: "rtl"}} className={classes.success}>בקשה נשלחה</div>
                    </div>
                </div>
                <div className={classes.depth1Frame3}>
                    {/*<div className={classes.depth2Frame4}>*/}
                    <h3 style={{direction: "rtl", textWrap: "wrap"}} className={classes.cfont}>
                        עיבדנו את הבקשה שלך לשינוי כתובת וכרגע היא בתהליכים מול הגורמים הרלוונטים.
                    </h3>
                    {/*</div>*/}
                </div>
                <br/><br/>
                <div className={classes.depth1Frame3}>
                    {/*<div className={classes.depth2Frame4}>*/}
                    <h3 style={{direction: "rtl", textWrap: "wrap"}} className={classes.cfont2}>נעדכן אותך במייל כאשר
                        יתקבלו פרטים נוספים.</h3>

                    {/*</div>*/}
                </div>

                <br/><br/><br/><br/><br/><br/><br/>
                <div className={classes.depth1Frame5}>
                    <button className={classes.depth2Frame5} onClick={() => navigate(-2)}>
                        <div className={classes.depth3Frame4}>
                            <div className={classes.depth4Frame5}>
                                <div className={classes.thankYou}>תודה</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame6}></div>
            </div>
        </div>
    );
});
