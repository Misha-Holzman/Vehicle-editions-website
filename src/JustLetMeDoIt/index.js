import React, { Component } from 'react'
import './style.css'

class JustLetMeDoIt extends Component {
  render () {
    return (
      <div className='just-let-me-do-it-main-container'>
        <h3 className='just-let-me-do-it-title-text'>Just Let Me Do It</h3>
        <p className='just-let-me-do-it-author-text'>by Michael Lally</p>
        <p className='just-let-me-do-it-text'>$3.50</p>
        <p className='just-let-me-do-it-text'>• ISBN 0-931428-04-1</p>
        <p className='just-let-me-do-it-text'>• 5 1/4 x 7 3/4</p>
        <p className='just-let-me-do-it-text'>• Printed in Canada by Coopérative d’Imprimerie Véhicule – Montréal in an edition of 1000 copies of which 26 are hardcovers, signed and numbered. Cover and typesetting by the publisher.</p>
      </div>
    )
  }
}

export default JustLetMeDoIt
