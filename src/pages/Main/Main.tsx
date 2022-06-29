import React,{FC} from 'react'
import { Footer, Header } from '../../components';
import { About, Contacts, Features, Pricing } from './components';
import "./Main.scss";
type MainProps={
  featuresRef:any;
  contactsRef:any;
  pricingRef:any;
  showBurgerMenu:boolean;
  setShowBurgerMenu:(bool:boolean)=>void
  smoothTo:(ref:any)=>void

}
const Main:FC<MainProps> =({featuresRef,contactsRef,pricingRef,setShowBurgerMenu,smoothTo,showBurgerMenu})=> {
  return (
    <>
    
    <Header
						showBurgerMenu={showBurgerMenu}
						setShowBurgerMenu={setShowBurgerMenu}
						smoothTo={smoothTo}
					/>
    <div className='main'>
        <About />
        <Features ref={featuresRef}/>
        <Pricing ref={pricingRef}/>
        <Contacts ref={contactsRef} /> 
    </div>
    <Footer /> 
    </>
    
  )
}

export default Main