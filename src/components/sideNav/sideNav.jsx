import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import navsty from './sideNav.module.scss'
import { Button, Icons } from "elements";
import Signature from "elements/Signature/signature"


function SideNav() {
    const [sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const ShowMenu = () => {
        return (
            <Link to="#" className={navsty.toggle}>
                <Icons.ArrowRight size="20" onClick={showSidebar}/>
            </Link>
        )
    }

    let navigate = useNavigate(); 
    const listPig = () =>{ 
        let path = "/pigs"; 
        navigate(path);
    }
    const pigAdd = () =>{ 
        let path = "/pigs/edit"; 
        navigate(path);
    }

    return (
        <nav className={sidebar ? navsty.sidebar : navsty.close}>
            <header>
                <div className={navsty.imageText}>
                    <span className={navsty.image}>
                        <img src="logo.jpeg" alt="logo" />
                    </span>

                    <div className={navsty.text}>
                        <span className={navsty.name1}>PIGGERY</span>
                        <span className={navsty.name2}>MANAGEMENT</span>
                    </div>
                </div>

                <ShowMenu /> 
            </header>

             <div >
                <div className={navsty.menuBar}>
                    <div className={navsty.menu}>
                        <ul>
                        <hr/ >
                            <li>
                                <Link to="/dashboard" key="/Dashboard">
                                    <Icons.Dash className={navsty.icon} size="30" />
                                    <span className={navsty.text}>Dashboard</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/events" key="/Events">
                                    <Icons.Even size="30" className={navsty.icon} />
                                    <span className={navsty.text}>Events</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/health" key="/health">
                                    <Icons.Helth size="30" className={navsty.icon}/> 
                                    <span className={navsty.text}>Health</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/breeding" key="/Breeding">
                                    <Icons.Bred size="30" className={navsty.icon} />
                                    <span className={navsty.text}>Breeding</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/feeding" key="/Feeding">
                                    <Icons.Feding size="30" className={navsty.icon} />
                                    <span className={navsty.text}>Feeding & Drinking</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/catalogue" key="/Catalogue">
                                    <Icons.Catalog size="30"  className={navsty.icon}/>
                                    <span className={navsty.text}>Catalogue</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/accounting" key="/Accounting">
                                    <Icons.Accounts size="30" className={navsty.icon} />
                                    <span className={navsty.text}>Accounting</span>
                                </Link>
                            </li>
                            <hr />

                        </ul>
                    </div>
                </div>
            </div> 
            
        <div className={navsty.btn}>
                <Button
                    name="Pigs"
                    bgColor="var(--blue)"
                    color="white"
                    radius="var(--borderRadiusSm)"
                    clickFn={listPig}
                 />
                <Button
                    name="Add New Pig"
                    bgColor="var(--lightGreen)"
                    color="white"
                    radius="var(--borderRadiusSm)" 
                    clickFn={pigAdd}
                />
            </div>
            <div className={navsty.sign}>
                <Signature
                    name="Sagana Organic built by Castynet"
                    height="60px" />
            </div>
        </nav>
 );

}

export default SideNav;

 