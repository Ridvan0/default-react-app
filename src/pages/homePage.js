import React, {Component} from "react";
import app from "../base";
class HomePage extends Component{
    render() {
        return (
            <div>
               <button onClick={() => app.auth().signOut()}>Sign out</button>
        
            </div>
        );
    }
}

export default HomePage;