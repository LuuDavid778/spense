import React, {useState, useEffect, useContext} from 'react';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import InputLarge from 'comps/InputLarge';
import DropDown from 'comps/DropDown';
import Button from 'comps/Button';
import Switch from 'comps/Switch';
import './edittransaction.scss';
import CombinedDrop from 'comps/CombinedDrop';
import { Link, useLocation, useHistory} from "react-router-dom";
import {optionCategory} from '../../utils/constants';
import axios from 'axios';


export default function EditTransactionPage({onEditComplete}) {
    const [selectedId, setSelected] = useState(null);
    const [transaction, setTransaction] = useState("");
    const location = useLocation();
    const history = useHistory();
    const myparam = location.state.params;
    const [TransName, setTransName] = useState(myparam.tname)
    const [TransAmount, setTransAmount] = useState(myparam.cost)
    const [TransDesc, setTransDesc] = useState(myparam.description)
    const [status, setStatus] = useState(myparam.status)
    const [Category, setCategory] = useState(myparam.category)



    const handleEdit = async (TransName, TransAmount, TransDesc, Category) => {
        // console.log(TransName, TransAmount, TransDesc, status);
        var resp = await axios.patch("http://localhost:8080/api/trans/" + myparam.id, {
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
        <Input  value={myparam.cost} text="Transaction Amount ($)" placeholder="Transaction Amount" onChange={(e)=>{
            setTransAmount(e.target.value)
        }}></Input>
        </div>
        <div className="TransactionCont3">
        <InputLarge value={myparam.description} text="Transaction Description" placeholder="Transaction Description" onChange={(e)=>{
            setTransDesc(e.target.value)
        }}></InputLarge>
        </div>
        <div className="DropDownCont">
        <DropDown data={optionCategory} onChange = {(value)=>{
                    setCategory(value.value)
                    console.log(Category)
                }}
        />
        </div>
        </div>
        <div className="StatusCont">
        <p>Transaction Status</p>
        </div>
        <div className="SwitchCont">
        <div className="SwitchButtonCont">
            <Switch handleToggle={(e)=>{
                setStatus(e)
            }}/>
            </div>
    </div>
        <div className="ButtonsCont">
        <Link to ="/">
        <Button iconsrc="./cancelicon.png" label="Cancel" bgcolour="#F37C75"bwidth="157px" mwidth="157px"></Button>
        </Link>
        <Button iconsrc="./saveicon.png" label="Save" bwidth="157px" mwidth="157px" onClick={()=>{
            handleEdit(TransName, TransAmount, TransDesc, Category)
        }}></Button>
        </div>
    </div>
    )}
