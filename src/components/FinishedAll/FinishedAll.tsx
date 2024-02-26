import {memo} from 'react';
import type {FC} from 'react';
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {useNavigate} from "react-router-dom";


interface Props {
    className?: string;
}

/* @figmaId 49:8 */
export const FinishedAll: FC<Props> = memo(function GalileoDesign(props = {}) {

    const navigate = useNavigate();

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}></div>
                        <div className={classes.depth3Frame1}>
                            <div className={classes.depth4Frame}>
                                <div className={classes.depth5Frame}>
                                    <div style={{direction: "rtl"}} className={classes.allTasksFinished}>
                                        {`כל התשלומים הוסדרו!`}
                                    </div>
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
                            <div className={classes.depth4Frame3}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div style={{direction: "rtl"}} className={classes.wellDoneYouVeCompletedAllYourT}>
                            {`תודה רבה, נתראה בחודש הבא.`}
                        </div>
                    </div>
                </div>
                <br/>
                <div className={classes.depth1Frame3}>
                    <button className={classes.depth2Frame4} onClick={() => navigate('/myProcess')}>
                        <div className={classes.depth3Frame4}>
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.goBack}>חזור לפרופיל</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame4}></div>
            </div>
        </div>
    );
});
