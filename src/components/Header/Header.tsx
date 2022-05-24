import React,{FC} from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import "./Header.scss";
type HeaderProps={
    smoothTo:(title:string)=>void;
    showBurgerMenu:boolean;
    setShowBurgerMenu:(bool:boolean)=>void;
    
}
const Header:FC<HeaderProps> =({smoothTo,showBurgerMenu,setShowBurgerMenu})=> {
    const navItems=[
        {id:0,title:"Features"},
        {id:1,title:"Pricing"},
        {id:2,title:"Contacts"}
    ]
     const [bg, setBg] = React.useState<boolean>(false);
    const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
    const handleShowBurgerMenu=(bool:boolean)=>{
      setShowBurgerMenu(bool);
    }

    const handleClickNavBurgerItem =(title:string)=>{
      setShowBurgerMenu(false);
      smoothTo(title);
    }
     React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <div className={`header ${bg && "header--bg"}`}>
        <div className="header__logo">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="38"
      fill="none"
      viewBox="0 0 53 38"
    >
      <path
        fill="url(#paint0_linear)"
        d="M0 28.881v2.044h52.725V29.48c0-2.138-.148-4.169-.439-6.097H.389A37.8 37.8 0 000 28.88z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M8.233 7.36a26.948 26.948 0 00-4.01 5.092h44.205a25.296 25.296 0 00-3.11-4.07 24.643 24.643 0 00-3.838-3.327H10.855A26.57 26.57 0 008.233 7.36z"
      ></path>
      <path
        fill="url(#paint2_linear)"
        d="M52.725 32.692H0V37.5h52.725v-4.808z"
      ></path>
      <path
        fill="url(#paint3_linear)"
        d="M3.236 14.219c-1.109 2.18-1.981 4.636-2.54 7.397h51.276c-.549-2.684-1.403-5.148-2.555-7.397H3.236z"
      ></path>
      <path
        fill="url(#paint4_linear)"
        d="M38.502 3.288C34.797 1.434 30.533.5 25.7.5c-5.056 0-8.925 1.004-12.155 2.788h24.957z"
      ></path>
      <path
        fill="#0D1A4E"
        d="M19.105 20.166H16.92c-.359.002-.835.238-.835.88v5.065c.072.568.17.708.555.99.366.268.67.282 1.058.282.323 0 2.618 0 3.31-.014-.396.008.64-.048.97.206.573.442.511 1.407.51 2.613-.003 2.463-.009 5.594 0 7.298 2.12 0 7.038.014 7.038.014V25.694s0-1.634 1.326-1.644l3.676-.024s1.429.07 1.429-1.468-.034-6.573-.034-6.573.039-.909-1.05-.909h-1.467s-1.113-.072-1.113.855v3.743s-.054.795-.8.795H30.18s-.679-.006-.679-.775l-.005-8.148s.042-1.05-1.012-1.05h-4.796s-1.2-.091-1.2 1.05c-.012 1.066.009 11.57 0 11.536 0 0 .001.944-.612.944h-1.25s-.771.072-.79-1.084c-.004-.218 0-1.9 0-1.9 0-.638-.391-.861-.731-.876z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="23.861"
          x2="26.963"
          y1="13.683"
          y2="32.103"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D84E6"></stop>
          <stop offset="1" stopColor="#1254CB"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="26.46"
          x2="29.562"
          y1="13.245"
          y2="31.665"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D84E6"></stop>
          <stop offset="1" stopColor="#1254CB"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="22.766"
          x2="25.869"
          y1="13.867"
          y2="32.287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D84E6"></stop>
          <stop offset="1" stopColor="#1254CB"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="24.958"
          x2="28.061"
          y1="13.497"
          y2="31.917"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D84E6"></stop>
          <stop offset="1" stopColor="#1254CB"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="27.676"
          x2="30.778"
          y1="13.04"
          y2="31.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D84E6"></stop>
          <stop offset="1" stopColor="#1254CB"></stop>
        </linearGradient>
      </defs>
    </svg>
    <div className="header__logo_col">
    <span>Nonamebot</span>
    <span>Dashboard</span>
    </div>
        </div>
        <div className="header__nav">
            {navItems && navItems.map((navItem,idx)=>
            <div onClick={()=>smoothTo(navItem.title)} key={`${navItem.id}:${idx}`} className="header__nav_item">
                {navItem.title}
            </div>
            )}
        </div>
        <div className="header__button">
<button className="custom_button custom_button--primary header__dashboard_link">
            DASHBOARD
        </button>
        </div>
        <div onClick={()=>handleShowBurgerMenu(!showBurgerMenu)} className="header__burger">
          {!showBurgerMenu ? <GiHamburgerMenu fill="rgb(50, 106, 202)" size={30}/> : <AiOutlineClose fill="rgb(50, 106, 202)" size={30}/>}
              
              
        </div>

        <div className={`burger__menu ${showBurgerMenu && "burger__menu--opened"}`}>
            <div className="burger__menu_nav">
              {navItems && navItems.map((nav,idx)=>
              <div onClick={()=>handleClickNavBurgerItem(nav.title)} key={`${nav.id}:${idx}`} className="burger__menu_nav_item">
                {nav.title}
              </div>
              )}
            </div>
            <button className="custom_button custom_button--primary header__dashboard_link">
            DASHBOARD
        </button>
            
        </div>
        
         
    </div>
  )
}

export default Header