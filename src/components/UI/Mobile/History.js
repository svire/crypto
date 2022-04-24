import React from "react"
import ButtonSmall from "../Button/ButtonSmall"
import Input from "../Input/Input"



const History=(props)=>{


    return(<div className="History">
            <div className='Up'>
                <span style={{fontSize:"20px"}} className='Headlines'>History</span>
            </div>
            <div className="GroupH">
                <div>
                    <label style={{color:"#000"}} className='Label'>Start date</label>
                    <Input text="Start" />
                </div>
                <div>
                    <label  style={{color:"#000"}} className='Label'>End date</label>
                    <Input text="Start" />
                </div>
                <div  style={{alignItems:"center"}}     >
                    <ButtonSmall/>                
                </div>
            </div>

            <div className="GroupData">
                
                {props.coins.map(item=> <div key={item.id+item.dateTime} className="CoinData">
                    <div onClick={()=>props.setCurrent(item.id)} className="CoinDataInfo">
                        <div className="CoinDataName">
                            <span>{item.name.replace(/\s/g, "")}</span>
                            <span>&#8594;{item.currency}</span>                             
                        </div>
                        <div className="CoinDataPrice">
                        <span>Amount       </span><span>{item.symbol.toUpperCase()} {item.price}</span>
                    </div>
                     
                    </div>
                    <div className="CoinDataIndicator">
                        <div className={`${props.updated?"Blinker":"no"}`}>
                        <div className={`${item.live?"Ellipse":"EllipseEx"}`} ></div>
                        </div>
                            
                    </div>
                </div>)}
                
            </div>

    </div>)

}


export default History