import React, { Component } from 'react';
import Mainmenu from './mainmenu';
import Navbar from './navbar'
import Sidemenu from './sidemenu';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3 border rounded"><Sidemenu/></div>
                        <div className="col-9 border rounded"><Mainmenu/></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;