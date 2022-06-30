import axios from 'axios';
import React,{FC} from 'react'
import { toast } from 'react-toastify';
import "./Contacts.scss"

type ContactsProps ={
    ref:any;
}
const Contacts:FC<ContactsProps> = React.forwardRef<HTMLDivElement>((ref,props)=> {
    const [value,setValue]=React.useState<string>("");
    const handleChangeValue =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
    const handleSubmit = ()=>{
        axios.post(`https://nonamebot31.herokuapp.com/api/bot/ask`,{name:value}).then((res)=>{
            if(res.status === 200){
                toast.success("Запрос успешно отправлен");
                setValue("");
            }
        })
    }
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
            <input value={value} onChange={handleChangeValue} placeholder='Contact (e.g. Ivanov#9999)' type="text" />
            <button onClick={handleSubmit} className='custom_button custom_button--primary'>
                Send
            </button>
        </div>
    </div>
  )
})

export default Contacts