import React,{useEffect,useState} from 'react';
import './App.css';
 
import Table from './components/UI/Table/Table';
import axios from "axios";
import Toolbar from "./components/UI/Toolbar/Toolbar"

import {dateTime,getDate,getTime} from "./utils/utils"
import History from './components/UI/Mobile/History';
import ExchangeInfo from './components/UI/ExchangeInfo/ExchangeInfo';
import Spinner from "./components/UI/Loading/Spinner"

function App() {
 
 

  //array of coins from API
  const [coins,setCoins]=useState([])
  //filtered data for table
  const [coinsf,setCoinsF]=useState([])
 // const [time,setTime]=useState("today")
  


 



 

  //function responsible for adding data of exchanged coins from toolbar
  const exchange=(newExc)=>{

    let newdata=[...coinsf,newExc]
    //newdata.push(newExc)
    setCoinsF(newdata)

    //{"id":newdata.length,"live":false,"date":getDate(),"time":getTime(),"name":"Zokycoin","currency":"GBP","amount":"2","price":"2,433","type":"Exchanged"}
    alert("you just exchanged something")
    console.log(coinsf)
  }


   


  useEffect(()=>{

     

    axios
      .get("https://api.coingecko.com/api/v3/coins")
      .then(function (response) {
         setCoins(response.data.slice(0,7))
         filterData(response.data.slice(0,7))
         setUpdated(true)
           setTimeout(() => {
             setUpdated(false)
             
           }, 3000);
      
      }).catch((error) => console.log(error));

     
    
  },[])

 




  //update data every 90 seconds, 
  // in api docs it says that you have limited amount of time to make get request,
  // i test the api for a while, and data for the coins prize changes from 3-5 minutes, 
  // so there is no point of calling an api every minute...s
  useEffect(()=>{

    const timer = setTimeout(() =>{
      console.log("tek ce da se digne")
      axios
      .get("https://api.coingecko.com/api/v3/coins")
      .then(function (response) {
        
        //check if response have diffeerent value for the coin?

        

        let tetold=coinsf.find(item=>item.name==="Tether").price
        let tetnew=response.data.slice(0,7)[2].market_data.current_price.usd

        let ethold=coinsf.find(item=>item.name==="Ethereum").price
        let ethnew=response.data.slice(0,7)[1].market_data.current_price.usd

        //if there is a change add blinkin indicator for 5 seconds
        if(tetold!==tetnew || ethold!==ethnew){
           console.log("tethereum value updated from :"+tetold+"-->"+tetnew)
           console.log("ethereum value updated from :"+ethold+"-->"+ethnew)
           setUpdated(true)
           setTimeout(() => {
             setUpdated(false)
             
           }, 15000);
        }
       
        


         setCoins(response.data.slice(0,7))
         filterData(response.data.slice(0,7))
         //console.log("ethereum"+response.data.slice(0,7)[1].market_data.current_price.usd)
         //console.log("tether"+response.data.slice(0,7)[2].market_data.current_price.usd)
         //console.log("bnb"+response.data.slice(0,7)[3].market_data.current_price.usd)
        // console.log("usd coin"+response.data.slice(0,7)[4].market_data.current_price.usd)
      
      }).catch((error) => console.log(error)); 

    }, 60000);

      return () => clearTimeout(timer);
     
    
  },[coinsf])




  //in which way is data sorted
  const [coinAsc,setCoinAsc]=useState(false)
  const [currencyAsc,setCurrencyAsc]=useState(false)
  const [priceAsc,setPriceAsc]=useState(false)
  const [amountAsc,setAmountAsc]=useState(false)
  const [typeAsc,setTypeAsc]=useState(false)

 

  //this function 
  const filterData=(data)=>{

    let newdata=[]
      data.map(item=>
          newdata.push({"id":newdata.length, "live":true, "dateTime":dateTime(),"date":getDate(),"time":getTime(), "name":item.name, "symbol":item.symbol, "currency":"USD","amount":"1","price":item.market_data.current_price.usd,"type":"Live Price"}))

    console.log(newdata)
    setCoinsF(newdata)
    setCurrent(newdata[0])
    console.log(newdata)
       
  }



  //function responsible for sorting data thaat is shown in the table
   const sort2=(type)=>{

    let neworder=[]

    switch (type) {
      case 'coins':
        neworder=coinAsc?[...coinsf].sort((a,b)=>b.name.localeCompare(a.name)):[...coinsf].sort((a,b)=>a.name.localeCompare(b.name))
        setCoinAsc(!coinAsc)
        break;
      
      case 'currency':
        neworder=currencyAsc?[...coinsf].sort((a,b)=>b.currency.localeCompare(a.currency)):[...coinsf].sort((a,b)=>a.currency.localeCompare(b.currency))
        setCurrencyAsc(!currencyAsc)
        break

      case 'type':
        neworder=typeAsc?[...coinsf].sort((a,b)=>b.type.localeCompare(a.type)):[...coinsf].sort((a,b)=>a.type.localeCompare(b.type))
        setTypeAsc(!typeAsc)
        break

      case 'price':
        alert("sorted by price")
        neworder=priceAsc?[...coinsf].sort((a, b) => (a.price-b.price)):[...coinsf].sort((a, b) => (b.price-a.price))
        setPriceAsc(!priceAsc)
        break

      case 'amount':
        alert("sorted by amont of coins")
        neworder=amountAsc?[...coinsf].sort((a, b) => (a.amount-b.amount)):[...coinsf].sort((a, b) => (b.amount-a.amount))
        setAmountAsc(!amountAsc)
        break


      default:
        console.log(`Sorry, well something is wrong`);
    }

    setCoinsF(neworder)


   }

   

    
  const [exchangeInfo,setExchangeInfo]=useState(false)
  const [current,setCurrent]=useState({})

  //is data updated
  const [updated,setUpdated]=useState(false)

 


  const setCurrentCoin=(nid)=>{

    //alert(nid)
    let newcurrent=coinsf.find(({id})=>id===nid)

    //alert(newcurrent.name)
    
    setCurrent(newcurrent)
    setExchangeInfo(true)

  }


  return (
    <div className="App" >
      {exchangeInfo?<ExchangeInfo current={current}  turnOff={()=>setExchangeInfo(false)} />:null}
        
      <header   className="App-header">
        <Toolbar coins={coins} coinsf={coinsf}  addNew={(some)=>exchange(some)} />               
      </header> 
      <div className='HistoryDiv'>
      {coinsf.length>0?<History setCurrent={(id)=>setCurrentCoin(id)} updated={updated} coins={coinsf}/>  :<Spinner/>}   
 
      </div>
      <div className='TableDiv'>     
      {coinsf.length>0? <Table   sorting={(something)=>sort2(something)}  coins={coinsf} updated={updated} />  :<Spinner/>}   
        
      </div>   
    </div>
  );
}

export default App; 
