import React from "react";
import "./Table.css"


const Table=(props)=>{

    return(<div className="Main">
            <table className="Table">
                <thead>
                    <tr style={{backgroundColor: "#eeeeee"}}>
                        <th style={{fontWeight:"700",width:"150px"}}>Date & Time</th>
                        <th onClick={()=>props.sorting("coins")}>Currency from</th>
                        <th  onClick={()=>props.sorting("amount")} style={{width:"100px"}}>Amount1</th>
                        <th onClick={()=>props.sorting("currency")}>Currency to</th>
                        <th onClick={()=>props.sorting("price")} >Amount2</th>
                        <th onClick={()=>props.sorting("type")} style={{width:"100px"}}>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {props.coins.map(item=>
                        <tr key={item.id+item.dateTime}>
                        <td>{item.date+" "+item.time}</td>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                        <td>{item.price}</td>
                        <td className={`${item.live?"tdLive":"tdExchange"}`} style={{fontWeight:"700"}}><div className={`${props.updated?"Blinker":"no"}`}>{item.type}</div> </td>
                    </tr>                        
                        )}
                    
                </tbody>
            </table>
        </div>)

}


export default Table

//<td style={{fontWeight:"700",color: "#5DBE7E"}}>{item.type}</td>