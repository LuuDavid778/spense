import React, {useState, useEffect, useContext} from 'react';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import InputLarge from 'comps/InputLarge';
import Button from 'comps/Button';
import Switch from 'comps/Switch';
import './edittransaction.scss';
import DropDown from 'comps/DropDown';
import { Link, useLocation } from "react-router-dom";

export default function EditTransactionPage ({onEditComplete}) {

    const [transaction, setTransaction] = useState("");

    const updateTransaction = (transaction) => {

        console.log(transaction)
    }


export default function EditTransactionPage() {
    
    const handleEdit = async (TransName, TransAmount, TransDesc) => {
    }
    
    const [TransName, setTransName] = useState("")
    const [TransAmount, setTransAmount] = useState("")
    const [TransDesc, setTransDesc] = useState("")

    const location = useLocation();
    const myparam = location.state.params;

    console.log(myparam)
    return( <div className="AddPageCont">
        <div className="AddCont">
        <h1>Edit Transaction</h1>
        <Upload/>
        <div className="ImgDesc">
        <p>Add an image of your transaction to easily keep track of it</p>
        </div>
        <div className="TransactionCont">
        <Input value={myparam.tname} onChange={(e)=>{
            setTransName(e.target.value)
        }}/>
        </div>
        <div className="TransactionCont">
        <Input  value={myparam.cost}text="Transaction Amount ($)" placeholder="Transaction Amount" onChange={(e)=>{
            setTransAmount(e.target.value)
        }}></Input>
        </div>
        <div className="TransactionCont3">
        <InputLarge value={myparam.description} text="Transaction Description" placeholder="Transaction Description" onChange={(e)=>{
            setTransDesc(e.target.value)
        }}></InputLarge>
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
        <Button iconsrc="./saveicon.png" label="Save" bwidth="157px" mwidth="157px" onClick={()=>{
            onEditComplete(updateTransaction)}} ></Button>
            handleEdit(TransDesc, TransName, TransAmount)
        }}></Button>
        </div>
    </div>
    )}