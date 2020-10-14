import React, { Component } from 'react';
import Card from './card';

class Mainmenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="mt-3"><h5>Short By</h5></div>
            <div className="container-Fluid">
                <div className="row">
                    <div className="col-3">Price High to Low</div>
                    <div className="col-3">Price Low to High</div>
                    <div className="col-3">Alphabetically High to Low</div>
                    <div className="col-3">Alphabetically Low to High</div>
                </div><hr></hr>
                <div className="row">
                    <div className="col-2"><Card pic="https://static.toiimg.com/photo/73078527.cms" title="Oppo" price="20000"/></div>
                    <div className="col-2"><Card pic="https://static.toiimg.com/photo/73078527.cms" title="Realme" price="25000"/></div>
                    <div className="col-2"><Card pic="https://static.toiimg.com/photo/73078527.cms" title="Apple" price="50000"/></div>
                    <div className="col-2"><Card pic="https://static.toiimg.com/photo/73078527.cms" title="Realme" price="62000"/></div>
                    <div className="col-2"><Card pic="https://static.toiimg.com/photo/73078527.cms" title="Vivo" price="62000"/></div>
                    <div className="col-2"><Card pic="https://static.toiimg.com/photo/73078527.cms" title="Realme" price="27000"/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-2"><Card pic="https://static.digit.in/product/97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg?tr=w-1200" title="Apple" price="125000"/></div>
                    <div className="col-2"><Card pic="https://static.digit.in/product/97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg?tr=w-1200" title="Realme" price="45000"/></div>
                    <div className="col-2"><Card pic="https://static.digit.in/product/97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg?tr=w-1200" title="Oppo" price="61000"/></div>
                    <div className="col-2"><Card pic="https://static.digit.in/product/97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg?tr=w-1200" title="Vivo" price="12000"/></div>
                    <div className="col-2"><Card pic="https://static.digit.in/product/97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg?tr=w-1200" title="Realme" price="69000"/></div>
                    <div className="col-2"><Card pic="https://static.digit.in/product/97036a3ef3b60f99a34cf0e16fb867896146a6e2.jpeg?tr=w-1200" title="Apple" price="90000"/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-2"><Card pic="https://i.insider.com/5e3d94e2e35bab706341f998?width=1100&format=jpeg&auto=webp" title="Apple" price="135000"/></div>
                    <div className="col-2"><Card pic="https://i.insider.com/5e3d94e2e35bab706341f998?width=1100&format=jpeg&auto=webp" title="Realme" price="48000"/></div>
                    <div className="col-2"><Card pic="https://i.insider.com/5e3d94e2e35bab706341f998?width=1100&format=jpeg&auto=webp" title="Redme" price="14000"/></div>
                    <div className="col-2"><Card pic="https://i.insider.com/5e3d94e2e35bab706341f998?width=1100&format=jpeg&auto=webp" title="Oppo" price="25000"/></div>
                    <div className="col-2"><Card pic="https://i.insider.com/5e3d94e2e35bab706341f998?width=1100&format=jpeg&auto=webp" title="Vivo" price="49000"/></div>
                    <div className="col-2"><Card pic="https://i.insider.com/5e3d94e2e35bab706341f998?width=1100&format=jpeg&auto=webp" title="Realme" price="78000"/></div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Mainmenu;