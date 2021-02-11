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




export default function HomePage(){

    const history = useHistory();
const [total, setTotal] = useState()
const [allTrans, setallTrans]= useState([]);


const getTransactions = async () => {
    var resp = await axios.get("http://localhost:8080/api/trans")
    setallTrans(resp.data.transactions  );
}



const handleOnClick = () => history.push('/edittransaction');



const calculateTotal = () => {
    setTotal(allTrans.reduce((n, {cost}) => n + cost, 0))
}


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
                    {allTrans.map((o)=>{
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