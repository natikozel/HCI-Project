import {memo, useState} from 'react';
import type {FC} from 'react';
import Cookies from "universal-cookie";
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon} from './VectorIcon';
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    className?: string,
}


/* @figmaId 25:392 */
export const ContinueProcess: FC<Props> = memo(function GalileoDesign(props) {

    const cookies = new Cookies();
    const {nextPage} = useParams();
    const navigate = useNavigate();
    const [id, setId]: any = useState();
    const [alertMessage, setAlertMessage] = useState(false);
    const [chars, setChars] = useState(false);


    const onIdChange = (e: any) => {
        if (e.target.value.toString().length > 9)
            return;
        setId(e.target.value);
    };

    const onSubmit = () => {
        if (id?.toString().length !== 9) {
            setChars(true);
            return;
        }
        const myCookie = cookies.get(id);
        if (myCookie) {
            cookies.set(id, {
                ...myCookie,
                login: true
            });
            if (nextPage === 'editaddress')
                navigate(`/myProcess/${id}/editaddress`);
            else if (nextPage === 'myList')
                navigate(`/myProcess/${id}/myList`);
        } else
            setAlertMessage(true);
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
                                    <div className={classes.transferAccount}>תהליך קיים</div>
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
                        <div className={classes.cfont}>
                            {"אנו זקוקים למעט פרטים על מנת שנוכל לאתר אותך :)"}
                        </div>
                    </div>
                </div>
                <br/><br/>
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
                                           type="number" placeholder={"הזן את מספר הזהות שלך כאן"}
                                           className={classes.enterYourAccountHolderID}
                                           onFocus={() => {
                                               setAlertMessage(false);
                                               setChars(false);
                                           }}>
                                    </input>
                                    {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame1}>
                    <div className={classes.depth2Frame2}>
                        <div style={{direction: "rtl"}}
                             className={classes.toGetStartedWeLlNeedAFewDetail}>
                            {alertMessage ?
                                <h1 style={{color: "red"}} className={classes.cfont}>
                                    {
                                        `מספר הזהות שהוכנס אינו קיים במערכת`
                                    }
                                </h1>
                                : null}
                            {chars ?
                                <h1 style={{color: "red"}} className={classes.cfont}>
                                    {
                                        `מספר הזהות חייב להכיל 9 תווים בדיוק`
                                    }
                                </h1>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.depth1Frame7}></div>

                <div className={classes.depth1Frame8}>
                    <button onClick={onSubmit} className={classes.depth2Frame8}>
                        <div className={classes.depth3Frame6}>
                            <div className={classes.depth4Frame8}>
                                <div className={classes.create}>המשך</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.depth1Frame9}></div>
            </div>
        </div>
    );
});
