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


const fakedb =[
    {
        id: 0,
        tname: "Roblox Giftcard",
        category: "Entertainment",
        cost: 100,
        status: "Paid",
        description: "A giftcard for your kid's favorite game."
    },
    {
        id: 1,
        tname: "Gamestop Stock",
        category: "Personal",
        cost: 6000,
        status: "Paid",
        description: "Your stonk to getting rich"

    },
    {
        id: 2,
        tname: "Phone Bill",
        category: "Bills & Fees",
        cost: 35,
        status: "Unpaid",
        description: "gotta call da hoes"

    },
    {
        id: 3,
        tname: "Bitcoin",
        category: "Personal",
        cost: 32220,
        status: "Paid",
        description: "making fat bank"

    },
]






export default function HomePage(){

    const [PopUp, SetPopUp] = useState(false);
    
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
                    <TotalAmount/>
                </div>
                <div className="dropDown">
                    <CombinedDrop label="Foods & Drinks" />
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
                        }}handleDelete={()=>{
                            SetPopUp(true);
                            console.log("delete");
                        }}
                        category={o.category} cost={o.cost} status={o.status} item={o.tname}
                        ></Transaction>
                    })}

                </div>
            </div>
            <div className="addItem">
                <Link to ="/addtransaction"><AddItem/></Link>
            </div>
        </div>
    )}