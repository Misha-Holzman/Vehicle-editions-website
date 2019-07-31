import React, { Component } from 'react'
import './style.css'

class Poems extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='clients-title-div'>
          <h1 className='clients-main-title'>Poems</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' alt='' />
        </div>
        <div className='clients-info-container'>
          <div className='clients-info-main-container'>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal1' id='button-modal'>
                <p className='poems-name'>party animal</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal1' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>party animal</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/tERJwQi.jpg' className='poem-images poem-img-party-animal' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal2' id='button-modal'>
                <p className='poems-name'>spring and autumn</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal2' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>spring and autumn</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/OrBSLqM.jpg' className='poem-images poem-img-spring-and-autumn' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal3' id='button-modal'>
                <p className='poems-name'>the border between night and night</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal3' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>the border between night and night</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/IIgpKw9.jpg' className='poem-img-night-and-night' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal4' id='button-modal'>
                <p className='poems-name'>rapid transit</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal4' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>rapid transit</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/o5LQnEy.jpg' className='poem-images poem-img-rapid-transit' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal5' id='button-modal'>
                <p className='poems-name'>glamorous</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal5' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>glamorous</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/5hUXYul.jpg' className='poem-img-glamorous' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal6' id='button-modal'>
                <p className='poems-name'>dogs then</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal6' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>dogs then</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/xgUCqlM.jpg' className='poem-images poem-img-dogs-then' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal7' id='button-modal'>
                <p className='poems-name'>Watch out for Johnboy</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal7' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Watch out for Johnboy</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/EUALs2K.jpg' className='poem-img-johnboy' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal8' id='button-modal'>
                <p className='poems-name'>scenic radios</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal8' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>scenic radios</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/hTzRuqb.jpg' className='poem-img-scenic-radios' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal9' id='button-modal'>
                <p className='poems-name'>luxury movie</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal9' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>luxury movie</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/AEqXv96.jpg' className='poem-images poem-img-luxury-movie' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal10' id='button-modal'>
                <p className='poems-name'>an apoplectic ride</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal10' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>an apoplectic ride</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/u7hNb27.jpg' className='poem-img-apoplectic-ride' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal11' id='button-modal'>
                <p className='poems-name'>the queen is a maniac</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal11' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>the queen is a maniac</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/WJQ8KMs.jpg' className='poem-img-queen-maniac' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal12' id='button-modal'>
                <p className='poems-name'>short blade</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal12' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel exampleModalCenterTitle' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>short blade</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/1xXSEjM.jpg' className='poem-img-short-blade' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal13' id='button-modal'>
                <p className='poems-name'>red signal</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal13' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>red signal</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body' id='modal-body-images'>
                    <img src='https://i.imgur.com/ydobx3X.jpg' className='poem-img-red-signal' alt='' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Poems
