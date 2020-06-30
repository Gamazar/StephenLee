import React, {Component} from "react";

export const Header = (props) =>
{
        return(
            <header>
                <a href="#" className="logo">Logo</a>
                <ul>
                    <li>
                        {props.links.links.map((link,i) => <a href="#" key={i}>{link}</a>)}
                    </li>
                </ul>
            </header>
           

            // <nav className="navbar navbar-default">
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