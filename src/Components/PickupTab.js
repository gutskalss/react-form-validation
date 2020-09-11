import React, { Component } from 'react'

class PickupTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValid: false,
    }
  }

  handleUserInput = e => {
    const checked = e.target.checked
    if (checked) {
      this.setState({ formValid: true })
    } else {
      this.setState({ formValid: false })
    }
  }

  handleSubmit = e => {
    alert(`Success!`)
    e.preventDefault()
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form-item col-1'>
          <input
            type='radio'
            name='pickupPoint'
            id='point-1'
            value='point-1'
            className='form-item__radio-input'
            onChange={this.handleUserInput}
          />
          <label htmlFor='point-1' className='form__radio-label'>
            Andreyevka, Zhilinskaya ulitsa, 1с1
          </label>
        </div>
        <div className='form-item col-1'>
          <input
            type='radio'
            name='pickupPoint'
            id='point-2'
            value='point-2'
            className='form-item__radio-input'
            onChange={this.handleUserInput}
          />
          <label htmlFor='point-2' className='form__radio-label'>
            Zelenograd, к1637с1
          </label>
        </div>
        <div className='form-item col-2'>
          <div id='form-map' className='form-map'></div>
        </div>
        <div className='form-item col-2'>
          <input
            type='submit'
            value='Order now'
            className='submit-btn'
            id='submit-btn'
            disabled={!this.state.formValid}
          />
        </div>
      </form>
    )
  }
}

export default PickupTab
