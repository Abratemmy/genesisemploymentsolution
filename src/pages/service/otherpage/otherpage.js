import React, { Component } from 'react';
import OtherFaqs from './otherFaq';
import "./otherpage.css";

export class Otherpage extends Component {
  render(title, otherbg) {
    return (
        <div className="otherpagebg">
            <div className='container'>
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='other-title'>{this.props.title}</div>
                  </div>

                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='otherdropdown'>
                            <OtherFaqs />
                        </div>
                    </div>
                  
              </div>
            </div>

        </div>
    )
  }
}

export default Otherpage