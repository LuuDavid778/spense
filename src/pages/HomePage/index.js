import React, {useState, useEffect} from 'react';
import Searchbar from '../../comps/Searchbar';
import TotalAmount from '../../comps/TotalAmount';
import DropDown from '../../comps/DropDown';
// import Selection from '../../comps/Selection';
// import Date from '../../comps/Date';
import Transaction from '../../comps/Transaction';
import AddItem from '../../comps/AddItem';
import Category from '../../comps/Category';
import CombinedDrop from 'comps/CombinedDrop';
import Delete from '../../comps/Delete';
import BackgroundChange from '../../comps/BackgroundComp';
import './HomePage.scss';
import { Link, useHistory,Redirect, useParams } from "react-router-dom";
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
 const [modalVisible, setModalVisible] = useState(false);
const history = useHistory();
const [total, setTotal] = useState()
const [allTrans, setAllTrans]= useState([]);
const [deleteId, setDeleteId] = useState();
const [selected, setSelected]=useState([])

const getTransactions = async () => {
    var {data: { transactions }} = await axios.get("http://localhost:8080/api/trans");
    console.log('ttt', transactions)
    setAllTrans(transactions)
    setSelected(transactions)
    console.log(allTrans)
    setTotal(transactions.reduce((n, {cost}) => n + cost, 0))
    console.log(total)
}


function handleSelect(e){
    console.log('eeee', e)
    const data = e.id === -1
        ? allTrans
        : allTrans.filter(it=>it.category===e.value)  || []
    setSelected(data); 
};

const ToggleDelete = (o) => {
    SetPopUp(true);
    setModalVisible(true);
}


const DeleteTransaction = async () =>{

    var resp = await axios.delete("http://localhost:8080/api/trans/"+ deleteId);
    getTransactions();

}

const filterTrans = (text)=>{
    console.log('yyy', text)
    setSelected(
        allTrans.filter((o)=>{
            return o.tname.includes(text)
        })
    )
}

useEffect(()=>{
    getTransactions();
    },[])
const handleDelete = (id) => {
    setDeleteId(id)
    ToggleDelete()
}   

const handleEdit = (o)=>{
    history.push('/edittransaction',{params: o})
}

function Trans () {
    return (
        <div className="homeTransaction">
        {!!selected.length && 
            selected.map((o)=> (
             <Link to={{ pathname: '/opentransaction', state: { o } }}>
                <Transaction 
                    handleEdit={()=>handleEdit(o)}
                    handleDelete={()=>handleDelete(o.id)}
                    category={o.category} 
                    cost={o.cost} 
                    item={o.tname}
                    status={o.status} 
                />
            </Link>    
            ))
        }
    </div>
    )
}

    return(
        <div className="homeCont">
            <div className="homeHeader" /> 
    
            <div className="logo">
                <p>Overview</p>
                <img src="./Logo.png"/>  
            </div>

            <div className="searchBar">
                <Searchbar onChange={(e)=> filterTrans(e.target.value) } />
            </div>

            <div className="totalCont">
                <div className="totalAmount">
                    <TotalAmount amount = {total}/>
                </div>

                <div className="dropDown">
                    <DropDown 
                        data={optionCategory}
                        onChange={handleSelect}
                    />
                </div>

                <div className="selection">

            </div>

            <div className="historyCont">
                {/* <div className="homeDate">
                    <Date/>
                </div>
                 */}
                <div className="DeletePopUp">
                    <Delete 
                        active={PopUp} 
                        bgChange={modalVisible} 
                        Cancel={()=>{
                            SetPopUp(false);
                            setModalVisible(!modalVisible);
                            console.log("Cancel");
                        }}
                        Delete={()=>{
                            DeleteTransaction();
                            setModalVisible(!modalVisible);
                            SetPopUp(false);
                    }}/>
                    <div className="BgColorChange">
                        <BackgroundChange bgChange={modalVisible}/>
                    </div>
                </div>
                <Trans />
            </div>

            <div className="BackgroundDelete" />

            <div className="addItem">
                <Link to ="/addtransaction"><AddItem/></Link>
            </div>
        </div>
    )}