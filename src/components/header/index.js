import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Style from './style';
import Logo from '../../static/assets/images/uppereight.png';
import Main from '../../static/assets/images/logomain.png';
import Hamburger from 'hamburger-react'
export default () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <div className="header-main d-flex show-for-desktop">
                <div className="header-container container-fluid ">
                    <div className="header-subcontainer container">
                        <div className="header-row d-flex justify-content-around ">
                            <div className="header-txt">

                                <Link to='/aboutus'>
                                    <h4>ABOUT US</h4>
                                </Link>

                            </div>
                            <div>
                                <Link to='/services'>
                                    <h4>SERVICES</h4>
                                </Link>
                            </div>
                            <div className="header-img">
                                <Link to='/'>
                                    <img className="upper" src={Logo} alt="Not Found" />
                                    <img className="lower" src={Main} alt="Not Found" />
                                </Link>
                            </div>
                            <div>
                                <Link to='/portfolio'>
                                    <h4>PORTFOLIO</h4>
                                </Link>
                            </div>
                            <div>
                                <Link to='/contact'>
                                    <h4>CONTACT</h4>
                                </Link>
                            </div>
                        </div>
                       
                    </div>
                </div>
      
            </div>
            <div className="show-for-mobile">
                <div style={{display:'flex',justifyContent:'space-between'}}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div style={{display:'flex',flex:'1',justifyContent:'center'}}>
            <Link to='/'>
            <img style={{background:'white',borderRadius:'50%',width:'80px',margin:'8px 40px 0px 0px'}} className="lower" src={Main} alt="Not Found" />
            </Link>
            </div>
            {isOpen  && 
                        <div style={{position:'absolute',
                        color:'green',display:'flex',
                        flexDirection:'column',padding:'5px',
                        border:'2px solid white',
                       top:'60px',left:'15px',background:'black'
                        }}>
                          
                          <Link to='/aboutus'>
                                    <span>ABOUT US</span>
                                </Link>
                                <Link to='/services'>
                                    <span>SERVICES</span>
                                </Link>
                                <Link to='/portfolio'>
                                    <span>PORTFOLIO</span>
                                </Link>
                                <Link to='/contact'>
                                    <span>CONTACT</span>
                                </Link>
                        </div>
                        }
            </div>
                        </div>
                       
            <Style />
        </>
    );
}