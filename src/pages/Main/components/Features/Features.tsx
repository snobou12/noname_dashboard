import React,{FC} from 'react'
import dropImg from "../../../../assets/img/drops.png";
import licensesImg from "../../../../assets/img/licenses.png";
import dashboardImg from "../../../../assets/img/dashboard.png";

import "./Features.scss"
type FeaturesProps={
    ref:any
}
const Features:FC<FeaturesProps> =React.forwardRef<HTMLDivElement>((ref,props)=> {
    const dropItems=[
        {id:0,title:"No oversolds"},
        {id:1,title:"Payment on the purchase page"},
        {id:2,title:"Convenient creation of drops"},
        {id:3,title:"View past drops"},
        {id:4,title:"Much more"},

    ]
    const licensesitems=[
        {id:0,title:"Different types of licenses"},
        {id:1,title:"Editing, deleting and creature"},
        {id:2,title:"View user"},
        {id:3,title:"Activation management"},
        {id:4,title:"Automatic renewal"},
        {id:5,title:"Application authorization"},
        {id:6,title:"And a lot more"},


    ]

    const dashboardItems=[
        {id:0,title:"Main info"},
        {id:1,title:"Auto-renewal"},
        {id:2,title:"Autocreating channels for renew"},
        {id:3,title:"Unbind"},
        {id:4,title:"Bind"},
        {id:5,title:"Activation management"},

    ]
  return (
    <div ref={props} className='features'>
        <div className="features__title">
            Features
        </div>
        <div className="feature__content feature__drops">
            <div className="feature__info">
                <div className="feature__title">
                    Drops
                </div>
                <div className="feature__description">
                    Create drops at scheduled times and plans for licenses!
                </div>
                <div className="feature__items">
                    {dropItems && dropItems.map((dropItem,idx)=>
                    <div key={`${dropItem.id}:${idx}`} className="feature_item">
                        <svg _ngcontent-mst-c21="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path _ngcontent-mst-c21="" d="M6 11C3.23983 10.997 1.00303 8.76018 1 6.00001V5.90001C1.05497 3.15227 3.31729 0.963987 6.06534 1.00045C8.81338 1.03691 11.0168 3.28445 10.9989 6.03268C10.9809 8.7809 8.74828 10.9995 6 11ZM3.705 5.79501L3 6.50001L5 8.50001L9 4.50001L8.295 3.79001L5 7.08501L3.705 5.79501Z" fill="#7FA6E1"></path></svg>
                        <span>{dropItem.title}</span>
                    </div>
                    )}
                    
                </div>
            </div>
            <div className="feature__img">
                <img src={dropImg} alt="feauture_img" />
            </div>

        </div>
        <div className="feature__content feature__licenses">
           
            <div className="feature__img">
                <img src={licensesImg} alt="feauture_img" />
            </div>

             <div className="feature__info">
                <div className="feature__title">
                    Licenses
                </div>
                <div className="feature__description">
                    Convenient license key management! Allows you to manage custom keys however you like!
                </div>
                <div className="feature__items">
                    {licensesitems && licensesitems.map((licensesItem,idx)=>
                    <div key={`${licensesItem.id}:${idx}`} className="feature_item">
                        <svg _ngcontent-mst-c21="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path _ngcontent-mst-c21="" d="M6 11C3.23983 10.997 1.00303 8.76018 1 6.00001V5.90001C1.05497 3.15227 3.31729 0.963987 6.06534 1.00045C8.81338 1.03691 11.0168 3.28445 10.9989 6.03268C10.9809 8.7809 8.74828 10.9995 6 11ZM3.705 5.79501L3 6.50001L5 8.50001L9 4.50001L8.295 3.79001L5 7.08501L3.705 5.79501Z" fill="#7FA6E1"></path></svg>
                        <span>{licensesItem.title}</span>
                    </div>
                    )}
                    
                </div>
            </div>

        </div>
        <div className="feature__content feature__dashboard">
            <div className="feature__info">
                <div className="feature__title">
                  Dashboard for your members
                </div>
                <div className="feature__description">
                    Your users will be able to view and manage complete information about their license key.
                </div>
                <div className="feature__items">
                    {dashboardItems && dropItems.map((dashboardItem,idx)=>
                    <div key={`${dashboardItem.id}:${idx}`} className="feature_item">
                        <svg _ngcontent-mst-c21="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path _ngcontent-mst-c21="" d="M6 11C3.23983 10.997 1.00303 8.76018 1 6.00001V5.90001C1.05497 3.15227 3.31729 0.963987 6.06534 1.00045C8.81338 1.03691 11.0168 3.28445 10.9989 6.03268C10.9809 8.7809 8.74828 10.9995 6 11ZM3.705 5.79501L3 6.50001L5 8.50001L9 4.50001L8.295 3.79001L5 7.08501L3.705 5.79501Z" fill="#7FA6E1"></path></svg>
                        <span>{dashboardItem.title}</span>
                    </div>
                    )}
                    
                </div>
            </div>
            <div className="feature__img">
                <img src={dashboardImg} alt="feauture_img" />
            </div>

        </div>
    </div>
  )
})

export default Features