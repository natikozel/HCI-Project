import {memo} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "universal-cookie";
import {GoBackIcon} from "./GoBackIcon";

interface Props {
    className?: string;
}

/* @figmaId 59:2 */
export const ProfilePage: FC<Props> = memo(function GalileoDesign(props = {}) {

    const cookies = new Cookies();
    const navigate = useNavigate();
    const {myId}: any = useParams();
    const myUser = cookies.get(myId);

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}>
                            <div className={classes.depth4Frame}>
                                <div className={classes.depth5Frame}>
                                    <div className={classes.depth6Frame}>
                                        <div className={classes.depth7Frame}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.depth3Frame1}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame2}>
                            <div className={classes.depth4Frame2}>


                                <div className={classes.depth5Frame2}>
                                    <input style={{opacity: "0"}} type="file" accept={"image/*"}/>
                                </div>




                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    <div className={classes.depth6Frame2}>
                                        <div className={classes.allisonW}>{myUser.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={classes.but} onClick={() => navigate('editpersonal')} >
                            <div className={classes.depth4Frame3}>
                                <div className={classes.depth5Frame4}>
                                    <div className={classes.depth6Frame4}>
                                        <div className={classes.depth7Frame2}>
                                            <div className={classes.editProfile}>ערוך פרופיל</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                {/*<div style={{marginBottom: "10px", width: "100%", justifyContent: "center", display: "flex", alignItems: "flex-end", alignContent: "center"}}>*/}
                {/*    <h1 style={{direction: "rtl", fontSize: "17.5px"}}>*/}
                {/*        {"בחר באחת מהפעולות הבאות"}*/}
                {/*    </h1>*/}
                {/*    <br/>*/}
                {/*</div>*/}
                <button className={classes.depth1Frame2} onClick={() => navigate('myList')}>
                    <div className={classes.depth3Frame13}>
                        <div className={classes.depth4Frame5}>
                            <div className={classes.depth5Frame5}>
                                <div className={classes.depth6Frame5}>
                                    <div className={classes.depth7Frame3}>
                                        <div className={classes.vector2}>
                                            <GoBackIcon className={classes.icon2}/>
                                        </div>
                                        <div className={classes.depth8Frame}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div className={classes.payTaxes}>שלם מיסים</div>
                            </div>
                        </div>
                    </div>
                </button>
                <button className={classes.depth1Frame4} onClick={() => navigate('editaddress')}>
                    <div className={classes.depth3Frame13}>
                        <div className={classes.depth4Frame5}>
                            <div className={classes.depth5Frame5}>
                                <div className={classes.depth6Frame5}>
                                    <div className={classes.depth7Frame3}>
                                        <div className={classes.vector2}>
                                            <GoBackIcon className={classes.icon2}/>
                                        </div>
                                        <div className={classes.depth8Frame}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div className={classes.payTaxes}>שנה כתובת</div>
                            </div>
                        </div>
                    </div>
                </button>
                <div className={classes.depth1Frame5}></div>
                <button className={classes.depth1Frame6} onClick={() => navigate('/')}>
                    <div className={classes.depth2Frame5}>
                        <div className={classes.depth3Frame5}>
                            <div className={classes.depth4Frame8}>
                                <div className={classes.logOut}>התנתק</div>
                            </div>
                        </div>
                    </div>
                </button>
                <div className={classes.depth1Frame7}></div>
            </div>
        </div>
    );
});
