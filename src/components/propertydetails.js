import React from 'react';
import './propertydetails.css';
import Header from "./Header";

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


function Propertydetails() {

  return (
    <>
    <Header />
      <div className="details">
        <div className='row'>
          <form name="regForm" id="regForm" method="get">
            <div className="columnrw form-body">
              <div className="column">
                <input className="form__input" name="location" type="text" id="location" placeholder="Location"/>
              </div>
              <div className="column">
                <input  type="text" name="typeProperty" id="typeProperty"  className="form__input" placeholder="Type of Property?"/>
              </div>
              <div className="column">
                <input  type="text" name="bed" id="bed" className="form__input" placeholder="Bed?"/>
              </div>
              <div className="column">
                <input className="form__input" name="minBed" type="text"  id="minBed" placeholder="Mini Bed?"/>
              </div>
              <div className="column">
                <input className="form__input" type="text" name="maxBed" id="maxBed" placeholder="Max Bed?"/>
              </div>
            </div>
            <div className="columnrww">
              <div className="column-btn">
                <button type="submit" name="sendRequest" id="sendRequest" class="btn">Filter</button>
              </div>
            </div>
          </form>
        </div>
        
        <div className='row'>
          <div className="columnbw rmagin">
            <div className="mtop mtopin">
              <p className="tp">Newly built 4 Bedroom Terrace <br />Lagos Mainland</p>
              <p className="tpi">₦ 125,000 Monthly <span className="tpush"><a href="/">View more like this</a></span></p>
            </div>
            <div className='container-fluid' >      
              <div className="title mtopie">      
                <div className="colmi">      
                  <div className="colmiv">
                    <iframe src="https://www.youtube.com/embed/g_QJEjOHxck?si=qhp-Nin0Vs5lhzfj" className='colmiv' title="Property video" allowfullscreen></iframe>
                  </div>  
                </div>      
              </div>  
            </div>
            <div className='mtope'> 
              <div className='container-fluid' >            
                <OwlCarousel items={3}  
                  className="owl-theme"  
                  loop  
                  nav  
                  margin={8} >  
                  <div ><img className='img' src="images/img-1.jpg" alt="Property" /></div>  
                  <div><img  className="img" src="images/img-2.jpg" alt="Property" /></div>  
                  <div><img  className="img" src="images/img-8.jpg" alt="Property" /></div>  
                  <div><img  className="img" src="images/4.jpg" alt="Property" /></div>  
                  <div><img className="img" src="images/5.jpg" alt="Property" /></div>    
                </OwlCarousel>  
              </div>  
            </div>
            <div className="row mtop mtopin descrip">
              <div className="colbtm">
                <p><i className="fa fa-bed bed"></i> 4 Bedrooms</p>
              </div>
              <div className="colbtm">
                <p><i className="fa fa-bath bed"></i> 4 Bathrooms</p>
              </div>
              <div className="colbtm">
                <p><i className='fas fa-toilet bed'></i> 5 Toilets</p>  
              </div>
            </div>
            <div className='row mtop mtope fbut'>
              <div className='feature'>
                <p className='featurep'>Key Features</p>
                <p className='fp'>Lorem ipsum dolor sit amet,</p>
                <p className='featurep ftop'>Full Description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet erat leo, vel commodo 
                    ipsum mollis ut. Nulla vitae ante nunc. Sed euismod, magna id tincidunt dapibus, tortor mi posuere 
                    justo, in consectetur lectus turpis et nulla. Sed et velit sed lectus hendrerit lobortis quis ac dolor. 
                    Proin aliquet at justo eget ullamcorper. Phasellus pellentesque mauris in mi rutrum, id hendrerit enim lacinia. 
                    Proin maximus metus quam, in luctus dolor fermentum vel.
                </p>
              </div>
            </div>
          </div>
          <div className="columnbww">
            <div className="mtop tpii">
              <div className="column-btn">
                <button type="submit" class="btn">Contact Agent</button>
              </div>
              <div className="userpc">
                <img className='userp' src="images/user.png" alt="User" />
              </div>
              <p className="pusr">Abule Egba, Lagos Mainland</p><br />
              <h4 className="pusri">Safety Tips</h4>
              <p className="pusri">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet erat leo, vel commodo ipsum mollis ut. Nulla vitae ante nunc.</p>
            </div>
            <div className="mtop tpe">
              <h4 className="pusri">Surrounding Areas</h4>
              <p className="pusrie"><a href="/">Surulere</a></p>
              <p className="pusrie"><a href="/">Iponri</a></p>
              <p className="pusrie"><a href="/">Masha</a></p>
              <p className="pusrie"><a href="/">Shitta</a></p>
            </div>
            <div className="mtop tpe">
              <h4 className="pusrie"><a href="/">Check-out Other Apartment Now</a></h4>
            </div>
            <div className="mtop tpb">
              <h5>Newly built 4 Bedroom Terrace <i className="fa fa-heart"></i></h5>
              <p><i className="fas fa-map-marker"></i> Lagos State</p>
              <p><a href="/"><img className='newp' src="images/img-2.jpg" alt="Property" /></a></p>
              <h2>₦ 70,500,000</h2>
              <p>Furnished, serviced and spacious four (4) bedroom terrace duplex with 
                  all rooms en-suite fitted kitchen, prepared metre, boys-quarters and a swimming pool.
              </p>
              <p className='td'>Updated 19 Mar 2023, Added 27 May 2022</p>
              <h6><i className="fa fa-bed"></i> 4 Bedrooms</h6>
              <h6><i className="fa fa-bath"></i> 4 Bathrooms</h6>
              <h6><i className='fas fa-toilet'></i> 5 Toilets</h6>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Propertydetails;