import React from 'react'
import './Add_your_own.css'
import AddYourOwn from '../assets/Add_Your_listing1.png'

function Add_your_own() {
  return (
    <div className='light-blue-area'>
      <div className='card card-size1'>
        <div className='card-body'>
          <div className='d-flex align-items-center justify-content-center gap-3 title-box'>
            <img src={AddYourOwn} className='plus-icon-size1' alt='Add Your Own Listing'/>
            <h3>Add Your Own</h3>
          </div>

          <p className='fs-5 mt-3 text-center'>
            Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?
            Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
          </p>

          <button className="custom-btn">Add new</button>
        </div>
      </div>
    </div>
  )
}

export default Add_your_own
