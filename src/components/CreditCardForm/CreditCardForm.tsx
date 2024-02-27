import {memo, useState} from 'react';
import type {FC} from 'react';
import "./GalileoDesign.module.css";
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import Card from "react-credit-cards";
import {ProfileIcon} from './ProfileIcon';
import "react-credit-cards/es/styles-compiled.css";
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "universal-cookie";
import Payment from "payment";

interface Props {
    className?: string,
    onSubmit: (value: unknown) => void
}

/* @figmaId 31:78 */
export const CreditCardForm: FC<Props> = memo(function GalileoDesign({onSubmit}: any) {

    const cookies = new Cookies();
    const {myId}: any = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [details, setDetails]: [any, any] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: "",
    });

    const [isFailed, setIsFailed] = useState(
        {
            number: false,
            expiry: false,
            cvc: false,
            name: false
        }
    );

    const validateInput = (number: any, name: any, expiry: any, cvc: any) => {

        const clearExpiryValue = clearNumber(expiry);
        const clearNumberValue = clearNumber(number);
        const clearCVCValue = clearNumber(cvc);
        let isTrue = true;
        if (!Payment.fns.validateCardExpiry(clearExpiryValue.slice(0, 2), clearExpiryValue.slice(2, 5))) {
            setIsFailed(prevState => {
                return {
                    ...prevState,
                    expiry: true
                };
            });
            isTrue = false;
        }
        if (clearNumberValue.toString().length !== 16) {
            setIsFailed(prevState => {
                return {
                    ...prevState,
                    number: true
                };
            });
            isTrue = false;
        }
        if (!Payment.fns.validateCardCVC(clearCVCValue)) {
            setIsFailed(prevState => {
                return {
                    ...prevState,
                    cvc: true
                };
            });
            isTrue = false;
        }
        if (name.length > 20 || !name) {
            setIsFailed(prevState => {
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

        if (validateInput(details.number, details.name, details.expiry, details.cvc)) {

            const myCookie = cookies.get(myId);
            myCookie.payment = true;
            myCookie.card = details;
            cookies.set(myId, myCookie);
            onSubmit(true);
        } else {
            setError(true);
            return;
        }

    };


    const handleInputFocus = (e: any) => {
        setIsFailed({
            number: false,
            expiry: false,
            cvc: false,
            name: false
        });
        setError(false);
        setDetails((prevDetails: any) => {
            return {
                ...prevDetails,
                focus: e.target.name
            };
        });
    };

    function clearNumber(value = '') {
        return value.replace(/\D+/g, '');
    }

    function formatCreditCardNumber(value: any) {
        if (!value) {
            return value;
        }

        const issuer = Payment.fns.cardType(value);
        const clearValue = clearNumber(value);
        let nextValue;

        switch (issuer) {
            case 'amex':
                nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                    4,
                    10
                )} ${clearValue.slice(10, 15)}`;
                break;
            case 'dinersclub':
                nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                    4,
                    10
                )} ${clearValue.slice(10, 14)}`;
                break;
            default:
                nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                    4,
                    8
                )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
                break;
        }

        return nextValue.trim();
    }

    function formatExpirationDate(value: any) {
        const clearValue = clearNumber(value);

        if (clearValue.length >= 3) {
            return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
        }

        return clearValue;
    }

    function formatCVC(value: any, allValues: any = {}) {
        const clearValue = clearNumber(value);
        let maxLength = 3;

        if (allValues.number) {
            const issuer = Payment.fns.cardType(allValues.number);
        }

        return clearValue.slice(0, maxLength);
    }

    const handleInputChange = (e: any) => {
        const target = e.target;
        switch (target.name) {
            case "number":
                if (target.value.toString().trim().length > 19)
                    return;
                break;
            case "expiry":
                if (target.value.toString().trim().length > 5)
                    return;
                break;
            case "cvc":
                if (target.value.toString().trim().length > 3)
                    return;
                break;
        }
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value);
        }

        setDetails((prevDetails: any) => {
            return {
                ...prevDetails,
                [target.name]: `${target.value}`
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
                                    <div className={classes.addACard}>הוספת כרטיס</div>
                                </div>
                            </div>
                        </div>

                        {/*<div className={classes.depth3Frame2}>*/}
                        {/*    <button className={classes.depth4Frame} onClick={() => navigate('/')}>*/}
                        {/*        <div className={classes.depth5Frame}>*/}
                        {/*            <div className={classes.vector}>*/}
                        {/*                <HomeIcon className={classes.icon}/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>

                {error ?
                    <div className={classes.ardetails}>
                        <div className={classes.detailsss}>
                            {/*<div style={{direction: "rtl"}} className={classes.cfont}>*/}
                            {/*    {error ?*/}
                            {/*        <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>אחד או יותר מהפרטים*/}
                            {/*            שגוי!</h1>*/}
                            {/*        : null*/}
                            {/*    }*/}
                            {/*</div>*/}
                            <div style={{direction: "rtl"}} className={classes.cfont}>
                                {isFailed.number ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"מספר כרטיס חייב לכלול 16 ספרות בסך הכך"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont}>
                                {isFailed.expiry ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"תאריך תפוגה חייב להיות תאריך עתידי קיים"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont}>
                                {isFailed.cvc ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"מספר הCVC האחורי חייב להכיל 3 ספרות בדיוק"}
                                    </h1>
                                    : null
                                }
                            </div>
                            <div style={{direction: "rtl"}} className={classes.cfont}>
                                {isFailed.name ?
                                    <h1 style={{textAlign: "right", direction: "rtl", color: "red"}}>
                                        {"שם בעל הכרטיס חייב להכיל שם קטן מ-20 תווים"}
                                    </h1>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                    : null
                }


                {!error ?
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
                    : null}


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
                                            <input type={"text"}
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
                                    {/*<div className={classes.depth6Frame4}>*/}
                                    {/*    <div className={classes.depth7Frame3}>*/}
                                    <input type={"number"}
                                           value={details.cvc}
                                           name={"cvc"}
                                           placeholder={"XXX"}
                                           className={classes.cVV}
                                           onChange={handleInputChange}
                                           onFocus={handleInputFocus}
                                    ></input>
                                    {/*</div>*/}
                                    {/*</div>*/}
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
