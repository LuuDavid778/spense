import React from 'react';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import InputLarge from 'comps/InputLarge';
import Button from 'comps/Button';
import Switch from 'comps/Switch';
import './edittransaction.scss';
import DropDown from 'comps/DropDown';
import { Link } from "react-router-dom";



export default function EditTransactionPage() {
    return( <div className="AddPageCont">
        <div className="AddCont">
        <h1>Edit Transaction</h1>
        <Upload/>
        <div className="ImgDesc">
        <p>Add an image of your transaction to easily keep track of it</p>
        </div>
        <div className="TransactionCont">
        <Input/>
        </div>
        <div className="TransactionCont">
        <Input text="Transaction Amount ($)" placeholder="Transaction Amount"></Input>
        </div>
        <div className="TransactionCont3">
        <InputLarge text="Transaction Description" placeholder="Transaction Description"></InputLarge>
        </div>
        <div className="DropDownCont">
        <DropDown />
        </div>
        </div>
        <div className="StatusCont">
        <p>Transaction Status</p>
        </div>
        <div className="SwitchCont">
            <div className="SwitchButtonCont">
                <Switch/>
            </div>
        </div>
        <div className="ButtonsCont">
        <Link to ="/">
        <Button iconsrc="./cancelicon.png" label="Cancel" bgcolour="#F37C75"bwidth="157px" mwidth="157px"></Button>
        </Link>
        <Button iconsrc="./saveicon.png" label="Save" bwidth="157px" mwidth="157px"></Button>
        </div>
    </div>
    )}