import React, {Component} from "react";
import homePic from "../styles/LinkedinPF.png";

export const Header = (props) =>
{
        return(
                <header>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <ul>
                                    <li>
                                        {props.links.links.map((link,i) => <a href="#" key={i}>{link}</a>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                </header>
           
           

            // <nav>
            //     <div className="container-fluid">
            //         <div className="navbar-header">
            //             <ul className="navbar-toggle collapsed navbar-nav">
            //                 <li>
            //                     {props.links.links.map((link,i) => <a href="#" className="icon-bar" key={i}>{link}</a>)}
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
        );
}