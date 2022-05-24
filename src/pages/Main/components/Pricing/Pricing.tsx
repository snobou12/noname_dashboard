import React,{FC} from 'react'
import "./Pricing.scss"
type PricingProps={
    ref:any
}
const Pricing:FC<PricingProps> = React.forwardRef<HTMLDivElement>((ref,props)=> {
    const cardItems=[
        {id:0,title:"Free test week"},
        {id:1,title:"24/7 Support"},
        {id:2,title:"Constant updates"},
        {id:3,title:"The cost does not depend on the money turnover"},

    ]
  return (
    <div ref={props} className='pricing'>
        <div className="pricing__title">
            Pricing
        </div>
        <div className="pricing__card">
            <div className="pricing__card_type">
                Basic
            </div>
            <div className="pricing__card_price">
                <span>$68</span>
                <span> / Month</span>
            </div>
            <div className="pricing__card_description">
                You get access to your admin panel, and your customers can use the dashboard and view license information.
            </div>
            <div className="pricing__card_items">
                {cardItems && cardItems.map((cardItem,idx)=>
                <div key={`${cardItem.id}:${idx}`} className="pricing__card_item">
                    <svg _ngcontent-mst-c21="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path _ngcontent-mst-c21="" d="M6 11C3.23983 10.997 1.00303 8.76018 1 6.00001V5.90001C1.05497 3.15227 3.31729 0.963987 6.06534 1.00045C8.81338 1.03691 11.0168 3.28445 10.9989 6.03268C10.9809 8.7809 8.74828 10.9995 6 11ZM3.705 5.79501L3 6.50001L5 8.50001L9 4.50001L8.295 3.79001L5 7.08501L3.705 5.79501Z" fill="#7FA6E1"></path></svg>
                    <span>{cardItem.title}</span>
                </div>
                )}
            </div>
            <div className="pricing__button">
                <button className='custom_button custom_button--primary'>
                    Try for free
                </button>
            </div>
        </div>
    </div>
  )
})

export default Pricing