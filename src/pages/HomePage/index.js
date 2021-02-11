import React, {useState} from 'react';
import Searchbar from '../../comps/Searchbar';
import TotalAmount from '../../comps/TotalAmount';
import DropDown from '../../comps/DropDown';
import Selection from '../../comps/Selection';
import Date from '../../comps/Date';
import Transaction from '../../comps/Transaction';
import AddItem from '../../comps/AddItem';
import Category from '../../comps/Category';
import CombinedDrop from 'comps/CombinedDrop';
import Delete from '../../comps/Delete';
import './HomePage.scss';
import { Link } from "react-router-dom";
import { Link, useHistory,Redirect } from "react-router-dom";
import axios from "axios";
import {fakedb, optionCategory} from '../../utils/constants';
import Item from 'antd/lib/list/Item';

// const optionCategory = [
//     {value: 'Foods&Drinks' , label: 'Foods&Drinks'},
//     {value: 'Bills&Fees' , label: 'Bills&Fees'},
//     {value: 'Beauty&Health' , label: 'Beauty&Health'},
//     {value: 'Personal' , label: 'Personal'},
//     {value: 'Others' , label: 'Others'},
//     {value: 'All Categories' , label: 'All Categories'}
// ]




export default function HomePage(){

 const [PopUp, SetPopUp] = useState(false);
const history = useHistory();
const [total, setTotal] = useState()
const [allTrans, setallTrans]= useState([]);
const [selected, setSelected] = useState(fakedb);

const handleOnClick = () => history.push('/edittransaction');

const getTransactions = async () => {
    var resp = await axios.get("http://localhost:8080/api/trans")
    // console.log(resp.data.transactions)
    setallTrans(...[resp.data.transactions])
    console.log(allTrans)
    var data = resp.data.transactions
    // setTotal(allTrans.reduce((n, {cost}) => n + cost, 0))
    setTotal(data.reduce((n, {cost}) => n + cost, 0))
    console.log(total)
}

function handleSelect(e){
    const data = e.allTransId === -1
        ? allTrans
        : allTrans.filter(it=>it.id===e.allTransId)  || []
    setSelected(data); 
};
console.log('selected',selected);



useEffect(()=>{
    getTransactions();
    },[])
    


    return(
        <div className="homeCont">
            <div className="homeHeader">
                
            </div>
            <div className="logo">
                <p>Overview</p>
                <img src="./Logo.png"/>  
            </div>
            <div className="searchBar">
                <Searchbar/>
            </div>
            <div className="totalCont">
                <div className="totalAmount">
                    <TotalAmount amount = {total}/>
                </div>
                <div className="dropDown">
                    <CombinedDrop label="Foods & Drinks" />
                    <DropDown data={optionCategory}
                    onChange={handleSelect}/>
                </div>
                <div className="selection">
                    <Selection/>
                </div>  
            </div>
            <div className="historyCont">
                <div className="homeDate">
                    <Date/>
                </div>
                <div className="DeletePopUp">
                <Delete active={PopUp} Cancel={()=>{
                    SetPopUp(false);
                    console.log("Cancel");
                }}/>
                </div>
                <div className="homeTransaction">
                    {!!selected.length && 
                        allTrans.map((o)=>{
                            return <Link to={{ pathname: '/opentransaction', state: { o } }}>
                            <Transaction handleEdit={()=>{
                                history.push('/edittransaction',{params: o})
                            }}handleDelete={()=>{
                                console.log("deleted")
                            }}
                            category={o.category} cost={o.cost} status={o.status} item={o.tname}
                            ></Transaction>
                            </Link>    
                        })
                    }
                </div>
            </div>
            <div className="addItem">
                <Link to ="/addtransaction"><AddItem/></Link>
            </div>
        </div>
    )}