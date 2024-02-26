import {memo, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-datepicker';
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon2} from './VectorIcon2';
import {VectorIcon} from './VectorIcon';
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

interface Props {
    className?: string;
}


/* @figmaId 18:320 */
export const NewProcess: FC<Props> = memo(function GalileoDesign(props = {}) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [id, setId]: any = useState();
    const [status, setStatus] = useState("דייר יוצא");
    const [dateTitle, setDateTitle] = useState("תאריך יציאה");
    const [date, setDate]: any = useState();
    const [isFailed, setIsFailed] = useState(false);
    const [used, setUsed] = useState(false);

    const onStatusChange = (e: any) => {
        setStatus(e.target.textContent);
        setDateTitle(e.target.textContent === "דייר יוצא" ? "תאריך יציאה" : "תאריך כניסה");
    };

    const onIdChange = (e: any) => {
        if (e.target.value.toString().length > 9)
            return;
        setId(e.target.value);
    };

    const onSubmit = () => {
        if (!id || id!.toString().length !== 9 || !status || !date) {
            setIsFailed(true);
            return;
        }
        if (!!cookies.get(id)) {
            setUsed(true);
            return;
        }
        const myCookie = {
            id,
            status,
            date: date!.value!,
            payment: false,
            card: null,
            taxes: [
                {
                    name: "ארנונה מקרקעין",
                    amount: 170,
                    paid: false,
                },
                {
                    name: "שבח",
                    amount: 350,
                    paid: false,
                },
                {
                    name: "רכוש",
                    amount: 100,
                    paid: false,
                },
                {
                    name: "מים",
                    amount: 75,
                    paid: false,
                },
                {
                    name: "חשמל",
                    amount: 850,
                    paid: false,
                },
            ],
        };
        cookies.set(id!, JSON.stringify(myCookie));
        navigate(`/myProcess/${myCookie.id}`);
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
                        <div className={classes.toGetStartedWeLlNeedAFewDetail}>
                            {isFailed ? "...אופס! כנראה שכחנו משהו בטעות" : null}
                            {used ? "למספר זהות זה כבר משוייך תהליך, אנא בדוק פרטיך." : null}
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
                                    <input required minLength={9} maxLength={9} onChange={onIdChange} value={id}
                                           type="number"
                                           placeholder={"הזן את מספר הזהות שלך כאן"}
                                           className={classes.enterYourAccountHolderID}
                                           onFocus={() => {
                                               setIsFailed(false);
                                               setUsed(false);
                                           }}
                                    >
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
                            className={status === "דייר יוצא" ? classes.selectedStatus : classes.unselectedStatus}
                            onClick={onStatusChange}>
                            <div className={classes.depth4Frame5}>
                                <div className={classes.depth5Frame4}>
                                    <div
                                        className={status === "דייר יוצא" ? classes.selectedResident : classes.unselectedResident}>
                                        דייר יוצא
                                    </div>
                                    {/*<input type="radio" id="incoming" name="residentStatus" value="incoming" className="input-radio"></input>*/}
                                    {/*    <label htmlFor="incoming" className="label-radio">Outgoing Resident</label>*/}
                                </div>
                            </div>
                        </div>
                        <div
                            className={status === "דייר נכנס" ? classes.selectedStatus : classes.unselectedStatus}
                            onClick={onStatusChange}>
                            <div className={classes.depth4Frame6}>
                                <div className={classes.depth5Frame5}>
                                    <div
                                        className={status === "דייר נכנס" ? classes.selectedResident : classes.unselectedResident}>דייר
                                        נכנס
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
                                            <input className={"dates"} type={"date"}
                                                   onChange={(date: any) => {
                                                       setDate(date.target);
                                                       setIsFailed(false);
                                                   }}/>
                                            {/*<div className={classes.mMDDYYYY}>DD/MM/YYYY</div>*/}
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
                    <button className={classes.depth2Frame8} onClick={onSubmit}>
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
