import React from "react";
import Button from "../Button/Button";
import {dateTime,getDate,getTime} from "../../../utils/utils"

const Toolbar=(props)=>{


    const calculate=()=>{
    
        //name of the coin
        let nameselect=document.getElementById("coin").value
        
        //find the price of the selected coin
        let result=props.coins.find(({name})=>name===nameselect)
    
        //amount of coins
        var amount1=document.getElementById("amount1").value
        
        //currency to
        var currencyto=document.getElementById("currencyto").value
    
        //get prices of the selected coin 
        let price_usd=result.market_data.current_price.usd
        let price_euro=result.market_data.current_price.eur
        let price_gbp=result.market_data.current_price.gbp
        
        
        var price=price_usd
        if(currencyto==="EURO"){
          price=price_euro
        }
        else if(currencyto==="GBP"){
          price=price_gbp
        }
    
    
        var fullprice=price*amount1
    
        //full price of purchase
        document.getElementById("amount2").value=fullprice
    
        
      }




      //"symbol":item.symbol,

      const exchangeSomething=()=>{

        let id=props.coinsf.length
        let namen=document.getElementById("coin").value
        let amount=document.getElementById("amount1").value
        let symbol=props.coins.find(({name})=>name===namen).symbol
        let currencyto=document.getElementById("currencyto").value
        let price=document.getElementById("amount2").value
        let newExc={"id":id,"live":false, "dateTime":dateTime(), "symbol":symbol, "date":getDate(),"time":getTime(),"name":namen,"currency":currencyto,"amount":amount,"price":price,"type":"Exchanged"}
      
        
        props.addNew(newExc)
      }


    return(<div className='Toolbar' >
        <div className='Up'>
        <span className='Headline'>Exchange</span>
        </div>
        <div className='Group'>
        <div className='Frame4477'>
            <div className='FormColumn'>
            <label className='Label'>Currency from</label>
            <select onChange={()=>calculate()} id="coin" className='Select'>
                <option>Bitcoin</option>
                <option>Ethereum</option>
                <option>Solana</option>
                <option>Tether</option>
                s<option>XRP</option>
            </select>               
            </div> 
            <div className='FormColumn'>
            <label className='Label'>Amount</label>                  
            <input onChange={()=>calculate()} className='Amount'  min="1" type="number" id="amount1" name="" />             
            </div>              
            <div className='FormColumn'>
            <label className='Label'>Currency to</label>
            <select id="currencyto" onChange={()=>calculate()} className='Currency'>
                <option>USD</option>
                <option>EURO</option>
                <option>GBP</option>
            </select>                         
            </div>
            <div className='FormColumn'>
            <label  className='Label'>Amount</label>
            <input id="amount2" readOnly className='Amount' type="text" name="" />             
            </div>
            <Button  click={()=>exchangeSomething()} >Save</Button>
            </div>
        </div> 
  </div>
            
    )

}



export default Toolbar

 