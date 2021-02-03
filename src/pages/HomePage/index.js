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
import './HomePage.scss';


export default function HomePage(){
    return(
        <div className="homeCont">
            <div className="homeHeader">
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
                    <CombinedDrop />
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
                    <Transaction/>
                    <Transaction/>
                    <Transaction/>
                    <Transaction/>
                </div>
                <div className="homeDate">
                    <Date/>
                </div>
                <div className="homeTransaction">
                    <Transaction/>
                    <Transaction/>
                </div>
            </div>
            <div className="addItem">
                <AddItem/>
            </div>
        </div>
    )}