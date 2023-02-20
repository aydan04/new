import React, { Component } from 'react'

export class FirstSection extends Component {
  render() {
    return (
      <section className='firstsection'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5">
              <div className="text column">
                <h1>Start <span style={{ color: "blue" }}>& Manage</span> <br />
                  your best <br /> choice startup.
                </h1>
                <p>The business standard to since the printer took <br />
                  a gallery scrambled it to make specimen book.</p>
                <button className='service btn mt-5'>All Service's</button>
              </div>
            </div>
            <div className="image col-12 col-sm-12 col-md-7">
              <div className="image">  <img src="https://htmldemo.net/strane/strane/assets/images/hero/hero.png" alt="" />  </div>

            </div>
          </div>
        </div>


      </section>



    )
  }
}

export default FirstSection