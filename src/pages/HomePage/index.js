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


// const fakedb =[
//     {   
//         id: 0,
//         tname: "Roblox Giftcard",
//         category: "Entertainment",
//         cost: 25,
//         status: "Paid",
//         description: "A giftcard for your kid's favorite game.",
//         label: 'Others'
//     },
//     {
//         id: 1,
//         tname: "Gamestop Stock",
//         category: "Personal",
//         cost: 10,
//         status: "Paid",
//         description: "Your stonk to getting rich",
//         label: 'Personal'
//     },
//     {
//         id: 2,
//         tname: "Phone Bill",
//         category: "Bills & Fees",
//         cost: 5,
//         status: "Unpaid",
//         description: "Bill from Telus",
//         label: 'Bills&Fees'

//     },
//     {
//         id: 3,
//         tname: "Bitcoin",
//         category: "Personal",
//         cost: 10,
//         status: "Paid",
//         description: "making fat bank",
//         label: 'Personal'

//     },
// ]

console.log(fakedb)

export default function HomePage(){
    const history = useHistory();

    const [PopUp, SetPopUp] = useState(false);
const [total, setTotal] = useState();
const [selected, setSelected] = useState(fakedb);

const handleOnClick = () => history.push('/edittransaction');
const calculateTotal = () => {
    setTotal(fakedb.reduce((n, {cost}) => n + cost, 0))
}
    useEffect(()=>{
    calculateTotal()
    },[])
 
function handleSelect(e){
    const data = e.fakedbId === -1
        ? fakedb
        : fakedb.filter(it=>it.id===e.fakedbId)  || []
    setSelected(data); 
};
console.log('selected',selected);

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
                    {fakedb.map((o)=>{
                        return <Transaction handleEdit={()=>{
                            console.log("edit")
                    {!!selected.length && 
                        selected.map((o)=>{
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
                    {/* {fakedb.map((o)=>{
                        return <Link to={{ pathname: '/opentransaction', state: { o } }}>
                        <Transaction handleEdit={()=>{
                            history.push('/edittransaction',{params: o})
                        }}handleDelete={()=>{
                            SetPopUp(true);
                            console.log("delete");
                        }}
                        category={o.category} cost={o.cost} status={o.status} item={o.tname}
                        ></Transaction>
                    })}
                         </Link>    
                    })} */}
                </div>
            </div>
            <div className="addItem">
                <Link to ="/addtransaction"><AddItem/></Link>
            </div>
        </div>
    )}