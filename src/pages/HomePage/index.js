import React, {useState, useEffect, useContext} from 'react';
import Searchbar from '../../comps/Searchbar';
import TotalAmount from '../../comps/TotalAmount';
import DropDown from '../../comps/DropDown';
import Selection from '../../comps/Selection';
import Date from '../../comps/Date';
import Transaction from '../../comps/Transaction';
import AddItem from '../../comps/AddItem';
import Category from '../../comps/Category';
import './HomePage.scss';
import { Link, useHistory,Redirect } from "react-router-dom";
import axios from "axios";



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
    const history = useHistory();

const [total, setTotal] = useState()

const handleOnClick = () => history.push('/edittransaction');
const calculateTotal = () => {
    setTotal(fakedb.reduce((n, {cost}) => n + cost, 0))
}
    useEffect(()=>{
    calculateTotal()
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
                    {fakedb.map((o)=>{
                        return <Link to={{ pathname: '/opentransaction', state: { o } }}>
                        <Transaction handleEdit={()=>{
                            history.push('/edittransaction',{params: o})
                        }}handleDelete={()=>{
                            console.log("deleted")
                        }}
                        category={o.category} cost={o.cost} status={o.status} item={o.tname}
                        ></Transaction>
                         </Link>    
                    })}
                </div>
            </div>
            <div className="addItem">
                <Link to ="/addtransaction"><AddItem/></Link>
            </div>
        </div>
    )}