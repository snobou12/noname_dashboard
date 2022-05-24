import React,{FC} from 'react'
import "./Contacts.scss"

type ContactsProps ={
    ref:any;
}
const Contacts:FC<ContactsProps> = React.forwardRef<HTMLDivElement>((ref,props)=> {
  return (
    <div ref={props} className='contacts'>
        <div className='artboard'></div>
        <div className="contacts__title">
            Want us to contact you?
        </div>
        <div className="contacts__description">
            Leave your contacts. We will write to you as soon as we can.
        </div>
        <div className="contacts__input">
            <input placeholder='Contact (e.g. Ivanov#9999)' type="text" />
            <button className='custom_button custom_button--primary'>
                Send
            </button>
        </div>
    </div>
  )
})

export default Contacts