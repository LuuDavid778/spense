import React, {useState, useEffect, useContext} from 'react';
import Searchbar from '../../comps/Searchbar';
import TotalAmount from '../../comps/TotalAmount';
import DropDown from '../../comps/DropDown';
import Selection from '../../comps/Selection';
import Date from '../../comps/Date';
import Transaction from '../../comps/Transaction';
import AddItem from '../../comps/AddItem';
import Category from '../../comps/Category';
import CombinedDrop from 'comps/CombinedDrop';
import './HomePage.scss';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const fakedb =[
    {
        tname: "Roblox Giftcard",
        category: "Entertainment",
        cost: 100,
        status: "paid"
    },
    {
        tname: "Gamestop Stock",
        category: "Personal",
        cost: 6000,
        status: "paid"
    },
    {
        tname: "Phone Bill",
        category: "Bills & Fees",
        cost: 35,
        status: "Unpaid"
    },
    {
        tname: "Bitcoin",
        category: "Personal",
        cost: 32220,
        status: "paid"
    },
]

export default function HomePage(){

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
                    <DropDown />
                </div>
                <div className="selection">
                    <Selection/>
                </div>  
            </div>
            <div className="historyCont">
                <div className="homeDate">
                    <Date/>
                </div>
                <div className="homeTransaction">
                    {/* <Link to ="/opentransaction">
                    <Transaction handleEdit={()=>{

                        console.log("edit")
                    }}handleDelete={()=>{
                        console.log("deleted")
                    
                    }}/>
                    </Link> */}

                    {fakedb.map((o)=>{
                        return <Transaction handleEdit={()=>{
                            console.log("edit")
                        }}handleDelete={()=>{
                            console.log("deleted")
                        }}
                        category={o.category} cost={o.cost} status={o.status} item={o.tname}
                        ></Transaction>
                    })}

                </div>
                {/* <div className="homeDate">
                    <Date/>
                </div>
                <div className="homeTransaction">
                    <Transaction/>
                    <Transaction/>
                </div> */}
            </div>
            <div className="addItem">
                <Link to ="/addtransaction"><AddItem/></Link>
            </div>
        </div>
    )}