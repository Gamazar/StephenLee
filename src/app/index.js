import React, { Component } from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import styles from "./styles/styles.css";

class App extends React.Component
{
    constructor() {
        super();
        this.state = {
            scrolled: false,
            links: ["Home","Resume", "Projects", "About Me"]
        }
    }
    //Passing in a function into arguments.
    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        //Only 1 element may be returned.
        var user = {
            name: "STeph",
            hobbies: ["Sports", "Reading"]
        };

        return (
            <div className="container">
                <Header links={this.state}/>
                <div className="row">
                    <div className=".col-xs-10 col-xs-offset-1">
                       
                    </div>
                </div>
                <div className="row">
                    <div className=".col-xs-10 col-xs-offset-1">
                        <Home name={"Stephen"} age={23} user={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas. Aenean aliquam urna id auctor euismod. Sed fringilla accumsan nibh. Nunc tincidunt, nisi sit amet pharetra bibendum, purus erat hendrerit ipsum, sit amet bibendum ante mauris ac ex. Vestibulum lectus neque, hendrerit at mi sit amet, tristique rhoncus leo. In ultricies felis vel maximus scelerisque. Proin a pharetra lorem. Donec in neque eu purus elementum mattis. Suspendisse nisl erat, gravida eu aliquet vitae, ornare venenatis risus. Sed rutrum eleifend massa sit amet elementum. In ut ante tellus. Vestibulum imperdiet quam eu nisl condimentum eleifend. Duis mi arcu, scelerisque quis ipsum a, gravida facilisis lorem. Donec quis ultricies urna. Suspendisse molestie feugiat nisi sit amet malesuada. Curabitur porta sed nibh non tincidunt. Cras nec lacus dui. Nam fermentum tincidunt diam, sed posuere nisl dictum a. Curabitur ipsum turpis, porta vitae neque mattis, congue eleifend eros. Mauris id rhoncus nulla. Integer facilisis, nisi vel maximus hendrerit, massa urna gravida quam, quis semper lorem eros at augue. Integer magna sem, blandit scelerisque cursus id, eleifend non magna. Etiam eu tempor nunc. Phasellus in suscipit urna, eu malesuada nunc. Morbi consequat, nisi at tristique sodales, sapien tortor euismod tortor, eget commodo mauris ligula et est. Fusce sollicitudin accumsan posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam suscipit, nibh nec faucibus rutrum, massa lacus auctor sem, quis pulvinar ante urna nec augue. Ut luctus magna lacus, eget aliquam mi pretium nec. Duis tempus tincidunt tellus quis faucibus. Morbi mattis placerat est. Ut eget mi mauris.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas. Aenean aliquam urna id auctor euismod. Sed fringilla accumsan nibh. Nunc tincidunt, nisi sit amet pharetra bibendum, purus erat hendrerit ipsum, sit amet bibendum ante mauris ac ex. Vestibulum lectus neque, hendrerit at mi sit amet, tristique rhoncus leo. In ultricies felis vel maximus scelerisque. Proin a pharetra lorem. Donec in neque eu purus elementum mattis. Suspendisse nisl erat, gravida eu aliquet vitae, ornare venenatis risus. Sed rutrum eleifend massa sit amet elementum. In ut ante tellus. Vestibulum imperdiet quam eu nisl condimentum eleifend. Duis mi arcu, scelerisque quis ipsum a, gravida facilisis lorem. Donec quis ultricies urna. Suspendisse molestie feugiat nisi sit amet malesuada. Curabitur porta sed nibh non tincidunt. Cras nec lacus dui. Nam fermentum tincidunt diam, sed posuere nisl dictum a. Curabitur ipsum turpis, porta vitae neque mattis, congue eleifend eros. Mauris id rhoncus nulla. Integer facilisis, nisi vel maximus hendrerit, massa urna gravida quam, quis semper lorem eros at augue. Integer magna sem, blandit scelerisque cursus id, eleifend non magna. Etiam eu tempor nunc. Phasellus in suscipit urna, eu malesuada nunc. Morbi consequat, nisi at tristique sodales, sapien tortor euismod tortor, eget commodo mauris ligula et est. Fusce sollicitudin accumsan posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam suscipit, nibh nec faucibus rutrum, massa lacus auctor sem, quis pulvinar ante urna nec augue. Ut luctus magna lacus, eget aliquam mi pretium nec. Duis tempus tincidunt tellus quis faucibus. Morbi mattis placerat est. Ut eget mi mauris.</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    } //Renders whenever the app thinks it needs to render (in which we provide).
}

render(<App/>,window.document.getElementById("app"));