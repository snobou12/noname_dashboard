import React,{FC} from 'react'
import { About, Contacts, Features, Pricing } from './components';
import "./Main.scss";
type MainProps={
  featuresRef:any;
  contactsRef:any;
  pricingRef:any;

}
const Main:FC<MainProps> =({featuresRef,contactsRef,pricingRef})=> {
  return (
    <div className='main'>
        <About />
        <Features ref={featuresRef}/>
        <Pricing ref={pricingRef}/>
        <Contacts ref={contactsRef} /> 
    </div>
  )
}

export default Main