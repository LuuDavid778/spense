import React, {useState} from 'react';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import InputLarge from 'comps/InputLarge';
import DropDown from 'comps/DropDown';
import Button from 'comps/Button';
import Switch from 'comps/Switch';
import './Addtransaction.scss';
import {useHistory,} from "react-router-dom";
import { Link } from "react-router-dom";
import {optionCategory} from '../../utils/constants';
import axios from 'axios';


export default function AddTransactionPage() {
    

    const history = useHistory();
    const [TransName, setTransName] = useState("")
    const [TransAmount, setTransAmount] = useState("")
    const [TransDesc, setTransDesc] = useState("")
    const [status, setStatus] = useState("Unpaid")
    const [Category, setCategory] = useState("");

     
    const handlePost = async (TransName, TransAmount, TransDesc, status, Category) => {
        // console.log(TransName, TransAmount, TransDesc, status, Category)
        var resp = await axios.post("http://localhost:8080/api/trans/",{
            tname: TransName,
            cost:TransAmount,
            description:TransDesc,
            status:status,
            category:Category
        });

        history.push("/")
        console.log(resp)
    }
    

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
                    }}
                />
            </div>
            <div className="TransactionCont">
                <Input text="Transaction Amount ($)" placeholder="Transaction Amount" onChange={(e)=>{
                    setTransAmount(e.target.value)
                    }}
                />
            </div>
            <div className="TransactionCont3">
                <InputLarge text="Transaction Description" placeholder="Transaction Description" onChange={(e)=>{
                    setTransDesc(e.target.value)
                    }}
                />
            </div>
            <div className="DropDownCont">
                <DropDown data={optionCategory} onChange = {(value)=>{
                    setCategory(value.value)
                    console.log(Category)
                }}/>
            </div>
        </div>
        <div className="StatusCont">
            <p>Transaction Status</p>
        </div>
        <div className="SwitchCont">
            <Switch handleToggle={(estatus)=>{
                setStatus(estatus)
            }}/>
        </div>
        <div className="ButtonsCont">
            <Link to ="/">
                <Button iconsrc="./cancelicon.png" label="Cancel" bgcolour="#F37C75" bwidth="157px" mwidth="157px"/>
            </Link>
            <Button  onClick={()=>{
                handlePost(TransName, TransAmount, TransDesc, status, Category)
                }}iconsrc="./addicon.png" label="Add" bwidth="157px" mwidth="157px"
            />
        </div>
    </div>
    )}