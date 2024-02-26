import {memo} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    className?: string;
    price: any
}

/* @figmaId 45:4 */
export const ThankYouPage: FC<Props> = memo(function GalileoDesign({price}: any) {

    const navigate = useNavigate()
    const { myId } = useParams()
    const onFinish = () => {
        navigate(`/myProcess/${myId}`)
    }

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}></div>
                        <div className={classes.depth3Frame1}>
                            <div className={classes.depth4Frame}>
                                <div className={classes.depth5Frame}>
                                    <div className={classes.paymentComplete}>!תשלום בוצע בהצלחה</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.depth3Frame2}>
                            <div className={classes.depth4Frame2}>
                                <div className={classes.depth5Frame2}>
                                    <div className={classes.depth6Frame}>
                                        <div className={classes.depth7Frame}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame3}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.youVeSuccessfullyPaid1000}>{`שולם ${price}₪`}</div>
                    </div>
                </div>
                <div className={classes.depth1Frame3}>
                    <div className={classes.depth2Frame4}>
                        <div style={{direction: "rtl"}} className={classes.goodJobYourTransactionHasBeenC}>
                            {"ביצענו את כל התשלומים שבחרת בשמך ובשבילך."}
                        </div>
                        <div style={{direction: "rtl"}} className={classes.goodJobYourTransactionHasBeenC}>
                            {"כעת ניתן לצאת."}
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame4}></div>
                <div className={classes.depth1Frame5}>
                    <button className={classes.depth2Frame5} onClick={onFinish}>
                        <div className={classes.depth3Frame4}>
                            <div className={classes.depth4Frame4}>
                                <div className={classes.done}>סיים</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame6}></div>
            </div>
        </div>
    );
}
)
;
