import React, {useState} from 'react';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import DropDown from 'comps/DropDown';
import Button from 'comps/Button';
import Switch from 'comps/Switch';
import './Addtransaction.scss';
import {useHistory,} from "react-router-dom";
import { Link } from "react-router-dom";


export default function AddTransactionPage() {
    const history = useHistory();

    const [TransName, setTransName] = useState("")
    const [TransAmount, setTransAmount] = useState("")
    const [TransDesc, setTransDesc] = useState("")

    return( <div className="AddPageCont">
        <div className="AddCont">
        <h1>Add New Transaction</h1>
        <Upload/>
        <div className="ImgDesc">
        <p>Add an image of your transaction to easily keep track of it</p>
        </div>
        <div className="TransactionCont">
        <Input onChange={(e)=>{
            setTransName(e.target.value)
        }}/>
        </div>
        <div className="TransactionCont">
        <Input text="Transaction Amount ($)" placeholder="Transaction Amount" onChange={(e)=>{
            setTransAmount(e.target.value)
        }} ></Input>
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
            <Switch/>
        </div>
        <div className="ButtonsCont">
        <Link to ="/"><Button iconsrc="./cancelicon.png" label="Cancel" bgcolour="#F37C75"bwidth="140px"></Button></Link>
        <Button iconsrc="./addicon.png" label="Add" bwidth="140px"></Button>
        </div>
    </div>
    )}