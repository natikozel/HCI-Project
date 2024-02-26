import {memo, useState} from 'react';
import type {FC} from 'react';
import "./GalileoDesign.module.css";
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import Card from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "universal-cookie";

interface Props {
    className?: string,
    onSubmit: (value: unknown) => void
}

/* @figmaId 31:78 */
export const CreditCardForm: FC<Props> = memo(function GalileoDesign({ onSubmit } : any) {

    const cookies = new Cookies();
    const {myId}: any = useParams();
    const navigate = useNavigate();
    const [details, setDetails]: [any, any] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: "",
    });


    const handleSubmit = () => {
        if (!details.number || !details.name || !details.expiry || !details.cvc)
            return;
        else {
            const myCookie = cookies.get(myId);
            myCookie.payment = true;
            myCookie.card = details;
            cookies.set(myId, myCookie);
            onSubmit(true);
        }
    };


    const handleInputFocus = (e: any) => {
        setDetails((prevDetails: any) => {
            return {
                ...prevDetails,
                focus: e.target.name
            };
        });
    };

    const handleInputChange = (e: any) => {
        switch (e.target.name) {
            case "number":
                if (e.target.value.toString().trim().length > 19)
                    return;
                break;
            case "expiry":
                if (e.target.value.toString().trim().length > 5)
                    return;
                break;
            case "cvc":
                if (e.target.value.toString().trim().length > 3)
                    return;
                break;
        }
        setDetails((prevDetails: any) => {
            return {
                ...prevDetails,
                [e.target.name]: `${e.target.value}`
            };
        });
    };

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.depthFrame}>
                <div className={classes.depth1Frame}>
                    <div className={classes.depth2Frame}>
                        <div className={classes.depth3Frame}>
                            <button className={classes.depth4Frame} onClick={() => navigate('/')}>
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
                                    <div className={classes.addACard}>הוסף כרטיס</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.depth3Frame2}>
                            <div className={classes.depth4Frame3}></div>
                        </div>
                    </div>
                </div>

                <div className={classes.ardetails}>
                    <div className={classes.detailsss}>
                        <div style={{direction: "rtl"}} className={classes.toGetStartedWeLlNeedAFewDetail}>
                            חכה שנייה... עם מה נשלם?
                        </div>
                    </div>
                </div>


                <div className={classes.cardFrame} key="Payment">
                    <div className={classes.AppPayment}>
                        <Card
                            number={details.number}
                            name={details.name}
                            expiry={details.expiry}
                            cvc={details.cvc}
                            focused={details.focus}
                        />
                        <hr style={{margin: "60px 0 30px"}}/>
                    </div>
                </div>


                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div className={classes.depth3Frame3}>
                            <div className={classes.depth4Frame4}>
                                <div style={{direction: "rtl"}} className={classes.cardNumber}>מספר כרטיס</div>
                            </div>
                            <div className={classes.depth4Frame1}>
                                <div className={classes.depth5Frame3}>
                                    <div className={classes.depth6Frame2}>
                                        <div className={classes.depth7Frame}>
                                            <input type={"number"}
                                                   value={details.number}
                                                   name={"number"}
                                                   placeholder={"1234-5678-9876-5432"}
                                                   className={classes._1234567898765432}
                                                   onChange={handleInputChange}
                                                   onFocus={handleInputFocus}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame2}>
                    <div className={classes.depth2Frame3}>
                        <div className={classes.depth3Frame4}>
                            <div className={classes.depth4Frame5}>
                                <div style={{direction: "rtl"}} className={classes.expirationDate}>תאריך תפוגה</div>
                            </div>
                            <div className={classes.depth4Frame12}>
                                <div className={classes.depth5Frame4}>
                                    <div className={classes.depth6Frame3}>
                                        <input type={"text"}
                                               value={details.expiry}
                                               name={"expiry"}
                                               placeholder={"MM/YY"}
                                               className={classes.mMYY}
                                               onChange={handleInputChange}
                                               onFocus={handleInputFocus}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.depth3Frame12}>
                            <div className={classes.depth4Frame6}>
                                <div style={{direction: "rtl"}} className={classes.securityCode}>3 ספרות בגב הכרטיס
                                </div>
                            </div>
                            <div className={classes.depth4Frame13}>
                                <div className={classes.depth5Frame5}>
                                    <div className={classes.depth6Frame4}>
                                        <div className={classes.depth7Frame3}>
                                            <input type={"text"}
                                                   value={details.cvc}
                                                   name={"cvc"}
                                                   placeholder={"XXX"}
                                                   className={classes.cVV}
                                                   onChange={handleInputChange}
                                                   onFocus={handleInputFocus}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame3}>
                    <div className={classes.depth2Frame4}>
                        <div className={classes.depth3Frame5}>
                            <div className={classes.depth4Frame7}>
                                <div style={{direction: "rtl"}} className={classes.nameOnCard}>שם בעל הכרטיס</div>
                            </div>
                            <div className={classes.depth4Frame14}>
                                <div className={classes.depth5Frame6}>
                                    <div className={classes.depth6Frame5}>
                                        <div className={classes.depth7Frame4}>
                                            <input type={"text"}
                                                   value={details.name}
                                                   name={"name"}
                                                   placeholder={"הזן את השם המלא שלך כאן"}
                                                   className={classes.enterYourName}
                                                   onChange={handleInputChange}
                                                   onFocus={handleInputFocus}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame4}>
                    <button className={classes.depth2Frame5} onClick={handleSubmit}>
                        <div className={classes.depth3Frame6}>
                            <div className={classes.depth4Frame8}>
                                <div className={classes.addCard}>הוסף כרטיס</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame5}></div>
            </div>
        </div>
    );
});
