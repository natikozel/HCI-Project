import {memo, useState} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "universal-cookie";
import Payment from "payment";

interface Props {
    className?: string;
}

/* @figmaId 66:86 */
export const EditPersonal: FC<Props> = memo(function GalileoDesign(props = {}) {

    const cookies = new Cookies();
    const navigate = useNavigate();
    const {myId}: any = useParams();
    const [user, setUser] = useState({
        ...cookies.get(myId),
        city: '',
        street: '',
        zipcode: ''
    });
    const [error, setError] = useState({
        name: false,
        id: false,
        city: false,
        street: false,
        zipcode: false,
    });

    const onStatusChange = (e: any) => {
        setUser((user: any) => {
            return {
                ...user,
                status: e.target.textContent
            }
        });
    };

    const validateInput = () => {


        let isTrue = true;
        if (!user.name) {
            setError(prevState => {
                return {
                    ...prevState,
                    name: true
                };
            });
            isTrue = false;
        }

        return isTrue;


    };

    const handleSubmit = () => {

        if (validateInput()) {
            cookies.set(myId, {
                ...user,
            });
            navigate(-1);
        } else {
            return;
        }

    };


    const handleInputFocus = (e: any) => {
        setError({
            name: false,
            id: false,
            city: false,
            street: false,
            zipcode: false,
        });
    };

    const editInput = (e: any) => {
        if (e.target.name === "id")
            if (e.target.value.toString().length > 9)
                return;
        setUser((prevState: any) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    };


    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}>
                            <button className={classes.depth4Frame} onClick={() => navigate(-1)}>
                                <div className={classes.depth5Frame}>
                                    <div className={classes.vector}>
                                        <VectorIcon className={classes.icon}/>
                                    </div>
                                    <div className={classes.depth6Frame}></div>
                                </div>
                            </button>
                        </div>
                        <div className={classes.depth3Frame1}>
                            <div className={classes.depth4Frame2}>
                                <div className={classes.depth5Frame2}>
                                    <div className={classes.shippingAddress}>פרטים אישיים</div>
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
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.firstName}>שם מלא</div>
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont}>
                                {error.name ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"שדה זה חייב להכיל את שמך"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    {/*<div className={classes.depth6Frame2}>*/}
                                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>
                                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}
                                               name={"name"} onFocus={handleInputFocus}
                                               value={user.name} onChange={editInput}/>
                                        {/*<div className={classes.ellis}>Ellis</div>*/}
                                    </div>
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className={classes.depth1Frame1}>*/}
                {/*    <div className={classes.depth2Frame2}>*/}
                {/*        <div className={classes.depth3Frame3}>*/}
                {/*            <div className={classes.depth4Frame4}>*/}
                {/*                <div style={{direction: "rtl"}} className={classes.firstName}>מספר זהות</div>*/}
                {/*            </div>*/}
                {/*            <div style={{direction: "rtl"}} className={classes.cfont}>*/}
                {/*                {error.id ?*/}
                {/*                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>*/}
                {/*                        {"שדה זה חייב להכיל 9 ספרות"}*/}
                {/*                    </h1>*/}
                {/*                    : null*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame1}>*/}
                {/*                <div className={classes.depth5Frame3}>*/}
                {/*                    /!*<div className={classes.depth6Frame2}>*!/*/}
                {/*                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>*/}
                {/*                        <input style={{direction: "rtl", textAlign: "right"}} type={"number"}*/}
                {/*                               name={"id"} onFocus={handleInputFocus}*/}
                {/*                               value={user.id} onChange={editInput}/>*/}
                {/*                        /!*<div className={classes.ellis}>Ellis</div>*!/*/}
                {/*                    </div>*/}
                {/*                    /!*</div>*!/*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={classes.t1}>
                    <div className={classes.t2}>
                        <div
                            className={user.status === "דייר יוצא" ? classes.selectedStatus : classes.unselectedStatus}
                            onClick={onStatusChange}>
                            <div className={classes.t3}>
                                <div className={classes.t4}>
                                    <div
                                        className={user.status === "דייר יוצא" ? classes.selectedResident : classes.unselectedResident}>
                                        דייר יוצא
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={user.status === "דייר נכנס" ? classes.selectedStatus : classes.unselectedStatus}
                            onClick={onStatusChange}>
                            <div className={classes.t5}>
                                <div className={classes.t6}>
                                    <div
                                        className={user.status === "דייר נכנס" ? classes.selectedResident : classes.unselectedResident}>
                                        דייר נכנס
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/*<div className={classes.depth1Frame1}>*/}
                {/*    <div className={classes.depth2Frame2}>*/}
                {/*        <div className={classes.depth3Frame3}>*/}
                {/*            <div className={classes.depth4Frame4}>*/}
                {/*                <div style={{direction: "rtl"}} className={classes.firstName}>עיר</div>*/}
                {/*            </div>*/}
                {/*            <div style={{direction: "rtl"}} className={classes.cfont4}>*/}
                {/*                {error.city ?*/}
                {/*                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>*/}
                {/*                        {"שדה זה חייב להכיל שם עיר בישראל"}*/}
                {/*                    </h1>*/}
                {/*                    : null*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame1}>*/}
                {/*                <div className={classes.depth5Frame3}>*/}
                {/*                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>*/}
                {/*                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}*/}
                {/*                               name={"city"} onFocus={handleInputFocus}*/}
                {/*                               value={user.city} onChange={editInput}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<div className={classes.depth1Frame1}>*/}
                {/*    <div className={classes.depth2Frame2}>*/}
                {/*        <div className={classes.depth3Frame3}>*/}
                {/*            <div className={classes.depth4Frame4}>*/}
                {/*                <div style={{direction: "rtl"}} className={classes.firstName}>רחוב</div>*/}
                {/*            </div>*/}
                {/*            <div style={{direction: "rtl"}} className={classes.cfont5}>*/}
                {/*                {error.street ?*/}
                {/*                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>*/}
                {/*                        {"שדה זה חייב להכיל שם רחוב בעיר שלך"}*/}
                {/*                    </h1>*/}
                {/*                    : null*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame1}>*/}
                {/*                <div className={classes.depth5Frame3}>*/}
                {/*                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>*/}
                {/*                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}*/}
                {/*                               name={"street"} onFocus={handleInputFocus}*/}
                {/*                               value={user.street} onChange={editInput}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={classes.depth1Frame1}>*/}
                {/*    <div className={classes.depth2Frame2}>*/}
                {/*        <div className={classes.depth3Frame3}>*/}
                {/*            <div className={classes.depth4Frame4}>*/}
                {/*                <div style={{direction: "rtl"}} className={classes.firstName}>מיקוד</div>*/}
                {/*            </div>*/}
                {/*            <div style={{direction: "rtl"}} className={classes.cfont6}>*/}
                {/*                {error.zipcode ?*/}
                {/*                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>*/}
                {/*                        {"שדה זה חייב להכיל את מספר מיקוד הכתובת"}*/}
                {/*                    </h1>*/}
                {/*                    : null*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame1}>*/}
                {/*                <div className={classes.depth5Frame3}>*/}
                {/*                    <div style={{textAlign: "right"}} className={classes.depth7Frame}>*/}
                {/*                        <input style={{direction: "rtl", textAlign: "right"}} type={"text"}*/}
                {/*                               name={"zipcode"} onFocus={handleInputFocus}*/}
                {/*                               value={user.zipcode} onChange={editInput}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={classes.depth1Frame2}>*/}
                {/*    <div className={classes.depth2Frame3}>*/}
                {/*        <div className={classes.depth3Frame4}>*/}
                {/*            <div className={classes.depth4Frame5}>*/}
                {/*                <div className={classes.lastName}>Last name</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame12}>*/}
                {/*                <div className={classes.depth5Frame4}>*/}
                {/*                    <div className={classes.depth6Frame3}>*/}
                {/*                        <div className={classes.depth7Frame2}>*/}
                {/*                            <div className={classes.zhou}>Zhou</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.depth1Frame3}>*/}
                {/*    <div className={classes.depth2Frame4}>*/}
                {/*        <div className={classes.depth3Frame5}>*/}
                {/*            <div className={classes.depth4Frame6}>*/}
                {/*                <div className={classes.city}>City</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame13}>*/}
                {/*                <div className={classes.depth5Frame5}>*/}
                {/*                    <div className={classes.depth6Frame4}>*/}
                {/*                        <div className={classes.depth7Frame3}>*/}
                {/*                            <div className={classes.enterCity}>Enter city</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.depth1Frame4}>*/}
                {/*    <div className={classes.depth2Frame5}>*/}
                {/*        <div className={classes.depth3Frame6}>*/}
                {/*            <div className={classes.depth4Frame7}>*/}
                {/*                <div className={classes.street}>Street</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame14}>*/}
                {/*                <div className={classes.depth5Frame6}>*/}
                {/*                    <div className={classes.depth6Frame5}>*/}
                {/*                        <div className={classes.depth7Frame4}>*/}
                {/*                            <div className={classes.enterStreet}>Enter street</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.depth1Frame5}>*/}
                {/*    <div className={classes.depth2Frame6}>*/}
                {/*        <div className={classes.depth3Frame7}>*/}
                {/*            <div className={classes.depth4Frame8}>*/}
                {/*                <div className={classes.zipCode}>Zip Code</div>*/}
                {/*            </div>*/}
                {/*            <div className={classes.depth4Frame15}>*/}
                {/*                <div className={classes.depth5Frame7}>*/}
                {/*                    <div className={classes.depth6Frame6}>*/}
                {/*                        <div className={classes.depth7Frame5}>*/}
                {/*                            <div className={classes.enterZipCode}>Enter zip code</div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <br/>
                <div className={classes.depth1Frame7}>
                    <button className={classes.depth2Frame7} onClick={handleSubmit}>
                        <div className={classes.depth3Frame8}>
                            <div className={classes.depth4Frame9}>
                                <div className={classes.saveAndContinue}>שמור והמשך</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame8}></div>
            </div>
        </div>
    );
});
