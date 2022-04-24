export const dateTime=()=>{
    var today = new Date();
    var datee=today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()
    //za nulu 00 jos trebas
    var minutes="00"
    
    if(today.getMinutes()<10&&today.getMinutes()!==0){
       minutes="0"+today.getMinutes()
    }
    else{
      minutes=today.getMinutes()
    }
    var time = today.getHours() + ":" + minutes + ":" + today.getSeconds();
    var dateTime = datee+' '+time;
    return dateTime
  }


export const getDate=()=>{
    var today = new Date();
    var datee=today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()
    return datee
  }


export const getTime=()=>{
    var today = new Date();
    var minutes="00"
    
    if(today.getMinutes()<10&&today.getMinutes()!==0){
       minutes="0"+today.getMinutes()
    }
    else{
      minutes=today.getMinutes()
    } 
    var time = today.getHours() + ":" + minutes //+ ":" + today.getSeconds();     
    return time   
  }


 

  /*


 
  const sort=(type)=>{
   
    //sort array of strings in ascending order
   //let newo=[...coins].sort((a,b)=>a.name.localeCompare(b.name))

   //sort string in descending order
   //sslet newo=[...coins].sort((a,b)=>b.name.localeCompare(a.name))

   //are you gonna sort the array by coins name?
   if(type==="coins"){
   let newo=coinAsc?[...coinsf].sort((a,b)=>b.name.localeCompare(a.name)):[...coinsf].sort((a,b)=>a.name.localeCompare(b.name))
   setCoinAsc(!coinAsc)
   setCoinsF(newo)
   }
   else if(type==="currency"){
     alert('alo')
    let newo=currencyAsc?[...coinsf].sort((a,b)=>b.price.localeCompare(a.price)):[...coinsf].sort((a,b)=>a.price.localeCompare(b.price))
    setCurrencyAsc(false)
    setCoins(newo)    
  }
  else if(type==="amount"){
    alert("alo")
    let newo=[]
    if(amountAsc){      
     newo=[...coinsf].sort((a, b) => {
      if (a.amount < b.amount) {
        return -1;
      }
      if (a.amount > b.amount) {
        return 1;
      }
      return 0;
    })
    }
    else{
      newo=[...coinsf].sort((a, b) => {
      if (a.amount > b.amount) {
        return -1;
      }
      if (a.amount < b.amount) {
        return 1;
      }
      return 0;
    })
   } 
   setCoinsF(newo)
   setAmountAsc(!amountAsc)

  }
  else if(type==="price"){
    let newo=[]
   if(priceAsc){
     //descending
     newo=[...coinsf].sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    })
   }
   else{
      newo=[...coinsf].sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    })
   } 
   setCoinsF(newo)
   setPriceAsc(!priceAsc)
  alert(type)
  }
  
  
  }


  */