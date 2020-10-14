import React, { Component } from 'react';

class Sidemenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h5 className="mt-3">Search</h5>
                <input class="form-control" type="text"></input>
                <button className="btn btn-sm btn-primary mt-3">Search</button>
                <h3 className="mt-5">Select Tags</h3>
                <button className="btn btn-sm btn-info">Realme</button>
                <button className="btn btn-sm btn-info m-1">Oppo</button>
                <button className="btn btn-sm btn-info">Asus</button>
                <button className="btn btn-sm btn-info m-1">Apple</button>
                <button className="btn btn-sm btn-info">Redme</button>
                <button className="btn btn-sm btn-info m-1">Vivo</button>
                <h3 className="mt-5">Select Range</h3>
                <input type="range" min="1" max="100" class="form-control-range"></input>
            </div>
         );
    }
}
 
export default Sidemenu;