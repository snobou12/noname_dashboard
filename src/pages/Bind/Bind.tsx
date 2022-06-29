import React,{FC, ReactHTMLElement} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Bind.scss"
const Bind:FC=()=> {
    const navigate = useNavigate();
    const [value,setValue]=React.useState<string>("");
    const handleChangeValue =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
  return (
    <div className='bind'>
        <div className="bind__box">
            <div onClick={()=>navigate(-1)} className="bind__back">
                {"<-"} Back
            </div>
            <div className="bind__nickname">
                RUBA111KA#0457
            </div>
            <div className="bind__title">
                Bind your license
            </div>
            <div className="bind__dev">
                <input type="text" placeholder='Enter key' onChange={handleChangeValue} value={value} />
                <button>Bind</button>
            </div>
        </div>
    </div>
  )
}

export default Bind