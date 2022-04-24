import React from "react"
import Button from "../Button/Button"
 


const ExchangeInfo=(props)=>{



    return(<div className='ExchangeInfo'>
        <div className='ExcUp'>
            <span className='Headline'>Exchange</span> <span onClick={()=>props.turnOff()} className="CloseX">X</span>
        </div>
        <div className="ExcDown">
            <div className="ExcColumns">
                <span className="ExcCol">Date & Time</span>
                <span className="ExcCol">Status</span>
                <span className="ExcCol">From</span>
                <span className="ExcCol">To</span>
                <span className="ExcCol">Amount</span>
                <span className="ExcCol">Total Amount</span>
            </div>
            <div className="ExcColumns" style={{marginLeft:"15px"}}>
                <span className="ExcCol">{props.current.date} @ {props.current.time}</span>
                <span className="ExcCol">{props.current.live? <div className="Ellipse"></div> :<div className="EllipseEx"></div>}</span>
 
                <span className="ExcCol">{props.current.name}</span>
                <span className="ExcCol">{props.current.currency}</span>
                <span className="ExcCol">{props.current.amount}</span>
                <span className="ExcCol">{props.current.price}</span>
            </div>
        
        </div>
        <div style={{padding:"24px"}}>
            <Button click={()=>props.turnOff()}>Close</Button>
        </div>
     </div>)
}

export default ExchangeInfo

 