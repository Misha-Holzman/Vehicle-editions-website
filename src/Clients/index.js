import React, { Component } from 'react'
import './style.css'

class Clients extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='clients-title-div'>
          <h1 className='clients-main-title'>Clients</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' />
        </div>
        <div className='clients-info-container'>
          <div className='client-pictures-div'>
            <div className='clients-car-photo-1-div'>
              <img src='https://i.imgur.com/weOVkAS.jpg' className='clients-car-photo-1' />
            </div>
            <div className='clients-car-photo-2-div'>
              <img src='https://i.imgur.com/VUrQiwH.jpg' className='clients-car-photo-2' />
            </div>
            <div className='clients-car-photo-3-div'>
              <img src='https://i.imgur.com/kdE8pCy.jpg' className='clients-car-photo-3' />
            </div>
            <div className='clients-car-photo-4-div'>
              <img src='https://i.imgur.com/zthUL5f.jpg' className='clients-car-photo-4' />
            </div>
            <div className='clients-car-photo-5-div'>
              <img src='https://i.imgur.com/nk2V53i.jpg' className='clients-car-photo-5' />
            </div>
            <div className='clients-car-photo-6-div'>
              <img src='https://i.imgur.com/re2fBfS.jpg' className='clients-car-photo-6' />
            </div>
          </div>
          <div className='clients-info-main-container'>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Persea Books</p>
              </button>
            </div>
            <div class='modal fade' style={{ marginTop: '15%' }} id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Harcourt, Brace, Jovanovich Children’s Trade Division</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Timken Publishers, Inc.,</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Books and Co. Bookstore</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Balance House, Inc., projects for Abrams and Dutton</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Merce Cunningham Dance Foundation</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>The Franklin Library</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Craft International Magazine</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>The World Crafts Council</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Skowhegan School of Painting and Sculpture, Maine</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Comproject BV</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Aperture Foundation</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>McGraw-Hill</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>John Wiley and Sons</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Facts on File</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>The College Board</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Chelsea House</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>New York State</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Cambridge University Press</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Cardozo School of Law</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Yeshiva University</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Harry N. Abrams</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Dutton</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Rogner and Bernhard GmBH, Munich, Germany</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Z Press, Calais VT</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Arti Grafiche Motta, Milan, Italy</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Comproject BV, Baarn, Holland</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Galen Press, Austerlitz, NY</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Family Business Publishing Company, Great Barrington, MA</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>The Stamford Review, Stamford, NY</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Ruth Kligman</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>Jean Stein</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#exampleModal' id='button-modal'>
                <p className='clients-name'>David Rosenberg</p>
              </button>
            </div>
            <div class='modal fade' id='exampleModal' style={{ marginTop: '15%' }} tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
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

export default Clients
