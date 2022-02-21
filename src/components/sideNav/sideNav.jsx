import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import navsty from './sideNav.module.scss'
import { Button } from "elements";
import Signature from "elements/Signature/signature"
import { Link } from "react-router-dom";
import { Icons } from "elements";


function SideNav() {
    const [sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

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
        <div className={navsty.sidenav}>
            <div className={navsty.logo}>
                <h1>PIGGERY<br /> MANAGEMENT</h1>
                <Link to="#" className={navsty.menuBars}>
                    <Icons.ArrowRight size="20" onClick={showSidebar} />
                </Link>
            </div>
            <div className={navsty.menu}>
                <nav>
                    <ul>
                        <li>
                        <Link to="/dashboard" key="/Dashboard" className={navsty.navLinkItem}>
                            <Icons.Dash size="30" />
                            <span>Dashboard</span>
                        </Link>
                        </li>                    
                        <hr />
                        <li>
                            <Link to="/events" className={navsty.navLinkItem} key="/Events">
                                <Icons.Even size="30" />
                                <span>Events</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/health" className={navsty.navLinkItem} key="/health">
                                <Icons.Helth size="30" />
                                <span>Health</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/breeding" className={navsty.navLinkItem} key="/Breeding">
                                <Icons.Bred size="30" />
                                <span>Breeding</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/feeding" className={navsty.navLinkItem} key="/Feeding">
                                <Icons.Feding size="30" />
                                <span>Feeding & Drinking</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/catalogue" className={navsty.navLinkItem} key="/Catalogue">
                                <Icons.Catalog size="30" />
                                <span>Catalogue</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/accounting" className={navsty.navLinkItem} key="/Accounting">
                                <Icons.Accounts size="30" />
                                <span>Accounting</span>
                            </Link>
                        </li>
                        <hr />
                    </ul>
                </nav>
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
        </div>
 );

}

export default SideNav;

 