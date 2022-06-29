import React,{FC} from 'react'
import botImg from "../../../../assets/img/bot.png";

import "./Features.scss"
type FeaturesProps={
    ref:any
}
const Features:FC<FeaturesProps> =React.forwardRef<HTMLDivElement>((ref,props)=> {
   
    const licensesItems=[
        {id:0,title:"Unique algorithm"},
        {id:1,title:"Convenient editing, deletion"},
        {id:2,title:"Speed ​​(purchase from 3 to 5 seconds)"},
        {id:3,title:"And much more"},
    ]

    
  return (
    <div ref={props} className='features'>
        <div className="features__title">
            Features
        </div>
        
        <div className="feature__content feature__licenses">
           
            <div className="feature__img">
                <img src={botImg} alt="feauture_img" />
            </div>

             <div className="feature__info">
                <div className="feature__title">
                    Licenses
                </div>
                <div className="feature__description">
                    Convenient bot management!
                </div>
                <div className="feature__items">
                    {licensesItems && licensesItems.map((licensesItem,idx)=>
                    <div key={`${licensesItem.id}:${idx}`} className="feature_item">
                        <svg _ngcontent-mst-c21="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path _ngcontent-mst-c21="" d="M6 11C3.23983 10.997 1.00303 8.76018 1 6.00001V5.90001C1.05497 3.15227 3.31729 0.963987 6.06534 1.00045C8.81338 1.03691 11.0168 3.28445 10.9989 6.03268C10.9809 8.7809 8.74828 10.9995 6 11ZM3.705 5.79501L3 6.50001L5 8.50001L9 4.50001L8.295 3.79001L5 7.08501L3.705 5.79501Z" fill="#7FA6E1"></path></svg>
                        <span>{licensesItem.title}</span>
                    </div>
                    )}
                    
                </div>
            </div>

        </div>
        

    </div>
  )
})

export default Features