import {memo, useState} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon2} from './VectorIcon2';
import {VectorIcon} from './VectorIcon';
import {useNavigate} from "react-router-dom";

interface Props {
    className?: string;
}


/* @figmaId 18:320 */
export const NewProcess: FC<Props> = memo(function GalileoDesign(props = {}) {

    const navigate = useNavigate();
    const [status, setStatus] = useState("דייר יוצא");
    const [dateTitle, setDateTitle] = useState("תאריך יציאה");


    const onStatusChange = (e: any) => {
        setStatus(e.target.childNodes[0].data);
        setDateTitle(e.target.childNodes[0].data === "דייר יוצא" ? "תאריך יציאה" : "תאריך כניסה");
    };


    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <button className={classes.depth3Frame} onClick={() => navigate("/")}>
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
                                    <div className={classes.transferAccount}>תהליך חדש</div>
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
                        <div className={classes.accountHolderID}>מספר זהות</div>
                    </div>
                </div>

                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div className={classes.depth5Frame3}>
                                    {/*<div className={classes.depth6Frame2}>*/}
                                    {/*    <div className={classes.depth7Frame}>*/}
                                    <input type="number" placeholder={"הזן את מספר הזהות שלך כאן"}
                                           className={classes.enterYourAccountHolderID}>
                                    </input>
                                    {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame3}>
                    <div className={classes.depth2Frame4}>
                        <div className={classes.residentStatus}>סטטוס</div>
                    </div>
                </div>
                <div className={classes.depth1Frame4}>
                    <div className={classes.depth2Frame5}>
                        <div
                            className={status === "דייר יוצא" ? classes.selectedStatus : classes.unselectedStatus}>
                            <div className={classes.depth4Frame5}>
                                <div className={classes.depth5Frame4}>
                                    <div
                                        className={status === "דייר יוצא" ? classes.selectedResident : classes.unselectedResident}
                                        onClick={onStatusChange}>
                                        דייר יוצא
                                    </div>
                                    {/*<input type="radio" id="incoming" name="residentStatus" value="incoming" className="input-radio"></input>*/}
                                    {/*    <label htmlFor="incoming" className="label-radio">Outgoing Resident</label>*/}
                                </div>
                            </div>
                        </div>
                        <div
                            className={status === "דייר נכנס" ? classes.selectedStatus : classes.unselectedStatus}>
                            <div className={classes.depth4Frame6}>
                                <div className={classes.depth5Frame5}>
                                    <div
                                        className={status === "דייר נכנס" ? classes.selectedResident : classes.unselectedResident}
                                        onClick={onStatusChange}>דייר נכנס
                                    </div>
                                    {/*<input type="radio" id="incoming" name="residentStatus" value="incoming" className="input-radio"></input>*/}
                                    {/*<label htmlFor="incoming" className="label-radio">Incoming Resident</label>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame5}>
                    <div className={classes.depth2Frame6}>
                        <div className={classes.leavingEnteringDate}>{dateTitle}</div>
                    </div>
                </div>
                <div className={classes.depth1Frame6}>
                    <div className={classes.depth2Frame7}>
                        <div className={classes.depth3Frame5}>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame6}>
                                    <div className={classes.depth6Frame3}>
                                        <div className={classes.depth7Frame2}>
                                            <input type={"date"} className={classes.mMDDYYYY}></input>
                                        </div>
                                    </div>
                                    <div className={classes.depth6Frame1}>
                                        <div className={classes.depth7Frame3}>
                                            <div className={classes.vector2}>
                                                <VectorIcon2 className={classes.icon2}/>
                                            </div>
                                            <div className={classes.depth8Frame}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame7}></div>
                <div className={classes.depth1Frame8}>
                    <button className={classes.depth2Frame8}>
                        <div className={classes.depth3Frame6}>
                            <div className={classes.depth4Frame8}>
                                <div className={classes.create}>החל תהליך</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame9}></div>
            </div>
        </div>
    );
});
