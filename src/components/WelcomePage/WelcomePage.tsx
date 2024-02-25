import {memo} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate} from "react-router-dom";

interface Props {
    className?: string;
}

/* @figmaId 3:2 */
export const WelcomePage: FC<Props> = memo(function GalileoDesign(props = {}) {

    const navigate = useNavigate();

    return (
        <div className={`${resets.flex}`}>
            <div className={`${resets.storybrainResets} ${classes.root}`}>
                <div className={classes.depthFrame}>
                    <div className={classes.depth1Frame}>
                        <div className={classes.depth2Frame}>
                            <div className={classes.depth3Frame}>
                                <div className={classes.depth4Frame}>
                                    <div className={classes.depth5Frame}>
                                        {/*<div className={classes.vector}>*/}
                                        {/*    <VectorIcon className={classes.icon}/>*/}
                                        {/*</div>*/}
                                        <div className={classes.depth6Frame}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.depth3Frame1}>
                                {/*<div className={classes.depth4Frame2}>*/}
                                {/*    <div className={classes.depth5Frame2}>*/}
                                        <h1
                                            className={classes.welcomeToYourHomeManagementApp}>
                                            ברוכים השבים לסוויפט הום!
                                        </h1>
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                            {/*<div className={classes.depth3Frame2}>*/}
                            {/*    <div className={classes.depth4Frame3}></div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={classes.depth1Frame1}>
                        <div className={classes.depth2Frame2}>
                            <div className={classes.whatWouldYouLikeToDoToday}>איך אפשר לעזור לך היום?</div>
                        </div>
                    </div>
                    <div className={classes.depth1Frame2}>
                        <div className={classes.depth2Frame3}>
                            <h4 className={classes.youCanCreateANewProcessOrConti}>
                                האם ברצונך להתחיל תהליך חדש או להמשיך תהליך קיים?
                            </h4>
                        </div>
                    </div>
                    <div className={classes.depth1Frame3}>
                        <div className={classes.depth2Frame4}>
                            <button className={classes.depth3Frame3} onClick={() => { navigate('/create')}}>
                                <div className={classes.depth4Frame4}>
                                    <div className={classes.depth5Frame3}>
                                        <div className={classes.depth6Frame2}>
                                            <div className={classes.createNewProcess}>
                                                צור תהליך חדש
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className={classes.depth3Frame12} onClick={() => { navigate('/continue')}}>
                                <div className={classes.depth4Frame5}>
                                    <div className={classes.depth5Frame4}>
                                        <div className={classes.depth6Frame3}>
                                            <div className={classes.continueExistingProcess}>
                                                המשך תהליך קיים
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={classes.depth1Frame4}></div>
                </div>
            </div>
        </div>
    );
});
