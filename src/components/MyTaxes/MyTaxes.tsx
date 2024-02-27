import {memo, useState} from 'react';
import type {FC} from 'react';
import Cookies from "universal-cookie";
import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import {VectorIcon2} from './VectorIcon2';
import {VectorIcon3} from './VectorIcon3';
import {VectorIcon} from './VectorIcon';
import {useNavigate, useParams} from "react-router-dom";
import {ElectricityIcon} from "./ElectricityIcon";
import {Checkbox} from "../ui/checkbox";
import {GoBack} from "./GoBack";
import {WaterIcon} from "./WaterIcon";
import {ShevahIcon} from "./ShevahIcon";
import {ArnonaIcon} from "./ArnonaIcon";
import {RehoshIcon} from "./RehoshIcon";
import {ThankYouPage} from "../ThankYouPage/ThankYouPage";

interface Props {
    className?: string;
}

/* @figmaId 37:139 */
export const MyTaxes: FC<Props> = memo(function GalileoDesign(props = {}) {

    const navigate = useNavigate();
    const cookies = new Cookies();
    const {myId}: any = useParams();
    const myProgress = cookies.get(myId);
    const [done, setDone] = useState(false);
    const [checked, setChecked] = useState(
        myProgress.taxes.filter((tax: any) => !tax.paid).map((tax: any) => {
            return {
                name: tax.name,
                amount: tax.amount,
                checked: false
            };
        })
    );
    const total = checked.filter((tax: any) => tax.checked).reduce((total: any, item: any) => total + item.amount, 0);

    const onCheck = (bol: any, name: any) => {

        setChecked((prevChecked: any) => {
            const newArr: any = [...prevChecked];
            const newItem = newArr.find((item: any) => item.name === name);
            newItem.checked = bol;
            return newArr;
        });
    };

    const onSubmit = () => {
        if (checked.filter((item: any) => item.checked).length <= 0)
            return;
        setDone(true);
        const newTaxArr = [...myProgress.taxes];

        cookies.set(myId, {
            ...myProgress,
            taxes: newTaxArr.map((item: any) => {
                if (item.paid)
                    return item;
                else {
                    const i = checked.find((tax: any) => tax.name === item.name);
                    return {
                        name: i.name,
                        amount: i.amount,
                        paid: i.checked,
                    };
                }
            })
            // taxes: checked.map((item: any) => {
            //     return {
            //         name: item.name,
            //         amount: item.amount,
            //         paid: item.checked,
            //     };
            // })
        });
    };

    const findItem = (name: any) => {
        switch (name) {
            case "חשמל":
                return <ElectricityIcon className={classes.icon}/>;
            case "מים":
                return <WaterIcon className={classes.icon}/>;
            case "שבח":
                return <ShevahIcon className={classes.icon}/>;
            case "ארנונה מקרקעין":
                return <ArnonaIcon className={classes.icon}/>;
            case "רכוש":
                return <RehoshIcon className={classes.icon}/>;
        }
    };

    if (done)
        return (<ThankYouPage price={total}/>);
    else
        return (
            <div className={`${resets.storybrainResets} ${classes.root}`}>
                <div className={classes.depthFrame}>
                    <div className={classes.depth1Frame}>
                        <div className={classes.depth2Frame}>
                            <div className={classes.depth3Frame}>

                                <div className={classes.depth4Frame}>
                                    <button className={classes.depth3Frame}
                                            onClick={() => navigate(`/myProcess/${myId}`)}>
                                        <div className={classes.depth4Frame}>
                                            <div className={classes.depth5Frame}>
                                                {/*<div className={classes.vector}>*/}
                                                <GoBack style={{width: "24px", height: "24px"}}
                                                        className={classes.icon}/>
                                                {/*</div>*/}
                                                <div className={classes.depth6Frame}></div>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className={classes.depth4Frame1}>
                                    <div className={classes.depth5Frame}></div>
                                </div>
                            </div>


                            <div className={classes.depth3Frame1}>
                                <div className={classes.depth4Frame2}>
                                    <div className={classes.depth5Frame2}>
                                        <div style={{direction: "rtl"}} className={classes.taxes}>מיסים</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {checked.map((item: any) =>
                        <div className={classes.depth1Frame1}>
                            <div className={classes.depth2Frame2}>
                                <div className={classes.depth3Frame2}>
                                    <div className={classes.depth4Frame3}>
                                        <div className={classes.depth5Frame3}>
                                            <div className={classes.vector}>
                                                {findItem(item.name)}
                                            </div>
                                            <div className={classes.depth6Frame}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.depth3Frame12}>
                                    <div className={classes.depth4Frame4}>
                                        <div className={classes.depth5Frame4}>
                                            <div style={{direction: "rtl"}}
                                                 className={classes.federalTaxes}>{item.name}</div>
                                        </div>
                                    </div>
                                    <div className={classes.depth4Frame12}>
                                        <div className={classes.depth5Frame5}>
                                            <div style={{direction: "rtl"}} className={classes.dueApril182022}>
                                                {`${item.amount}₪ עד מחר`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.depth2Frame1}>
                                <div className={classes.depth3Frame3}>
                                    <Checkbox className={classes.depth4Frame5}
                                              checked={item.checked}
                                              onCheckedChange={(bol) => onCheck(bol, item.name)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/*<div className={classes.depth1Frame1}>*/}
                    {/*    <div className={classes.depth2Frame2}>*/}
                    {/*        <div className={classes.depth3Frame2}>*/}
                    {/*            <div className={classes.depth4Frame3}>*/}
                    {/*                <div className={classes.depth5Frame3}>*/}
                    {/*                    <div className={classes.vector}>*/}
                    {/*                        <ElectricityIcon className={classes.icon}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={classes.depth6Frame}></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.depth3Frame12}>*/}
                    {/*            <div className={classes.depth4Frame4}>*/}
                    {/*                <div className={classes.depth5Frame4}>*/}
                    {/*                    <div style={{direction: "rtl"}} className={classes.federalTaxes}>חשמל</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame12}>*/}
                    {/*                <div className={classes.depth5Frame5}>*/}
                    {/*                    <div style={{direction: "rtl"}} className={classes.dueApril182022}>*/}
                    {/*                        {`${myProgress.taxes.find((tax: any) => tax.name === "חשמל")?.amount}₪ עד מחר`}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.depth2Frame1}>*/}
                    {/*        <div className={classes.depth3Frame3}>*/}
                    {/*            <Checkbox className={classes.depth4Frame5}*/}
                    {/*                      checked={checked.find((tax: any) => tax.name === "חשמל")?.checked!}*/}
                    {/*                      onCheckedChange={(bol) => onCheck(bol, "חשמל")}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame1}>*/}
                    {/*    <div className={classes.depth2Frame2}>*/}
                    {/*        <div className={classes.depth3Frame2}>*/}
                    {/*            <div className={classes.depth4Frame3}>*/}
                    {/*                <div className={classes.depth5Frame3}>*/}
                    {/*                    <div className={classes.vector}>*/}
                    {/*                        <WaterIcon className={classes.icon}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={classes.depth6Frame}></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.depth3Frame12}>*/}
                    {/*            <div className={classes.depth4Frame4}>*/}
                    {/*                <div className={classes.depth5Frame4}>*/}
                    {/*                    <div className={classes.federalTaxes}>מים</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame12}>*/}
                    {/*                <div className={classes.depth5Frame5}>*/}
                    {/*                    <div style={{direction: "rtl"}} className={classes.dueApril182022}>*/}
                    {/*                        {`${myProgress.taxes.find((tax: any) => tax.name === "מים")?.amount}₪ עד מחר`}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.depth2Frame1}>*/}
                    {/*        <div className={classes.depth3Frame3}>*/}
                    {/*            <Checkbox className={classes.depth4Frame5}*/}
                    {/*                      checked={checked.find((tax: any) => tax.name === "מים")?.checked!}*/}
                    {/*                      onCheckedChange={(bol) => onCheck(bol, "מים")}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame1}>*/}
                    {/*    <div className={classes.depth2Frame2}>*/}
                    {/*        <div className={classes.depth3Frame2}>*/}
                    {/*            <div className={classes.depth4Frame3}>*/}
                    {/*                <div className={classes.depth5Frame3}>*/}
                    {/*                    <div className={classes.vector}>*/}
                    {/*                        <ShevahIcon className={classes.icon}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={classes.depth6Frame}></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.depth3Frame12}>*/}
                    {/*            <div className={classes.depth4Frame4}>*/}
                    {/*                <div className={classes.depth5Frame4}>*/}
                    {/*                    <div className={classes.federalTaxes}>שבח</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame12}>*/}
                    {/*                <div className={classes.depth5Frame5}>*/}
                    {/*                    <div style={{direction: "rtl"}} className={classes.dueApril182022}>*/}
                    {/*                        {`${myProgress.taxes.find((tax: any) => tax.name === "שבח")?.amount}₪ עד מחר`}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.depth2Frame1}>*/}
                    {/*        <div className={classes.depth3Frame3}>*/}
                    {/*            <Checkbox className={classes.depth4Frame5}*/}
                    {/*                      checked={checked.find((tax: any) => tax.name === "שבח")?.checked!}*/}
                    {/*                      onCheckedChange={(bol) => onCheck(bol, "שבח")}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame2}>*/}
                    {/*    <div className={classes.depth2Frame3}>*/}
                    {/*        <div className={classes.depth3Frame4}>*/}
                    {/*            <div className={classes.depth4Frame6}>*/}
                    {/*                <div className={classes.depth5Frame6}>*/}
                    {/*                    <div className={classes.vector2}>*/}
                    {/*                        <ArnonaIcon className={classes.icon2}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={classes.depth6Frame2}></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.depth3Frame13}>*/}
                    {/*            <div className={classes.depth4Frame7}>*/}
                    {/*                <div className={classes.depth5Frame7}>*/}
                    {/*                    <div className={classes.stateTaxes}>ארנונה</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame13}>*/}
                    {/*                <div className={classes.depth5Frame8}>*/}
                    {/*                    <div style={{direction: "rtl"}} className={classes.dueApril1820222}>*/}
                    {/*                        {`${myProgress.taxes.find((tax: any) => tax.name === "ארנונה מקרקעין")?.amount}₪ עד מחר`}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.depth2Frame12}>*/}
                    {/*        <div className={classes.depth3Frame5}>*/}
                    {/*            <Checkbox className={classes.depth4Frame5}*/}
                    {/*                      checked={checked.find((tax: any) => tax.name === "ארנונה מקרקעין")?.checked!}*/}
                    {/*                      onCheckedChange={(bol) => onCheck(bol, "ארנונה מקרקעין")}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.depth1Frame3}>*/}
                    {/*    <div className={classes.depth2Frame4}>*/}
                    {/*        <div className={classes.depth3Frame6}>*/}
                    {/*            <div className={classes.depth4Frame9}>*/}
                    {/*                <div className={classes.depth5Frame9}>*/}
                    {/*                    <div className={classes.vector3}>*/}
                    {/*                        <RehoshIcon className={classes.icon3}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={classes.depth6Frame3}></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={classes.depth3Frame14}>*/}
                    {/*            <div className={classes.depth4Frame10}>*/}
                    {/*                <div className={classes.depth5Frame10}>*/}
                    {/*                    <div className={classes.localTaxes}>רכוש</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={classes.depth4Frame14}>*/}
                    {/*                <div className={classes.depth5Frame11}>*/}
                    {/*                    <div style={{direction: "rtl"}} className={classes.dueApril1820223}>*/}
                    {/*                        {`${myProgress.taxes.find((tax: any) => tax.name === "רכוש")?.amount}₪ עד מחר`}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.depth2Frame13}>*/}
                    {/*        <div className={classes.depth3Frame7}>*/}
                    {/*            <Checkbox className={classes.depth4Frame5}*/}
                    {/*                      checked={checked.find((tax: any) => tax.name === "רכוש")?.checked!}*/}
                    {/*                      onCheckedChange={(bol) => onCheck(bol, "רכוש")}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <br/><br/><br/>
                    <div className={classes.one}>
                        <div className={classes.two}>
                            <div style={{direction: "rtl"}} className={classes.cfont}>
                                {`בסך הכל:         ${total} ₪`}
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div className={classes.depth1Frame5}>
                        <button className={classes.depth2Frame5} onClick={onSubmit}>
                            <div className={classes.depth3Frame8}>
                                <div className={classes.depth4Frame15}>
                                    <div className={classes.paySelected}>שלם</div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className={classes.depth1Frame6}></div>
                </div>
            </div>
        );
});
