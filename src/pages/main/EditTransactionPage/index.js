import React from 'react';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import DropDown from 'comps/DropDown';
import Button from 'comps/Button';
import Switch from 'comps/Switch';
import './edittransaction.scss';

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
        <Input text="Transaction Description" placeholder="Transaction Description"></Input>
        </div>
        <div className="DropDownCont">
        <DropDown label="Transaction Category"></DropDown>
        </div>
        </div>
        <div className="StatusCont">
        <p>Transaction Status</p>
        </div>
        <div className="SwitchCont">
        <div className="SwitchButtonCont">
            <Switch/>
            </div>
        <div className="SwitchNameCont">
        <h9>Paid | </h9> 
        <div className="UnpaidCont">
        <h9>Unpaid</h9>
        </div>   
        </div>
        </div>
        <div className="ButtonsCont">
        <Button iconsrc="./cancelicon.png" label="Cancel" bgcolour="#F37C75"bwidth="140px"></Button>
        <Button iconsrc="./addicon.png" label="Saveicon" bwidth="140px"></Button>
        </div>
    </div>
    )}