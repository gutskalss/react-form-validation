import React, { Component } from 'react'
import InputMask from 'react-input-mask'

class DeliveryTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      address: '',
      comment: '',
      formErrors: { name: '', phone: '', address: '', comment: '' },
      nameValid: false,
      phoneValid: false,
      addressValid: false,
      commentValid: false,
      formValid: false,
    }
  }

  handleSubmit = e => {
    alert(
      `Full name: ${this.state.name}
      \nPhone number: ${this.state.phone}
      \nAddress: ${this.state.address}
      \nComment: ${this.state.comment}`
    )
    e.preventDefault()
  }

  handleUserInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let nameValid = this.state.nameValid
    let phoneValid = this.state.phoneValid
    let addressValid = this.state.addressValid
    let commentValid = this.state.commentValid

    switch (fieldName) {
      case 'name':
        nameValid = value.length >= 3 && value.match(/^[а-яё -]+$/i)
        fieldValidationErrors.name = nameValid
          ? ''
          : 'Min. 3 symbols; allowed symbols (cyrillic, space, dash)'
        break
      case 'phone':
        phoneValid = value.match(
          /^((\+?7)[ ]?)?(\(\d{3}\))?([ ])?(\d{3}[-]?\d{2}[-]?\d{2})$/
        )
        fieldValidationErrors.phone = phoneValid
          ? ''
          : 'Phone number is incorrect'
        break
      case 'address':
        addressValid = value.length >= 6
        fieldValidationErrors.address = addressValid ? '' : 'Min. 6 symbols'
        break
      case 'comment':
        commentValid = value.length >= 12
        fieldValidationErrors.comment = commentValid ? '' : 'Min. 12 symbols'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        phoneValid: phoneValid,
        addressValid: addressValid,
        commentValid: commentValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.phoneValid &&
        this.state.addressValid &&
        this.state.commentValid,
    })
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'form-item__input_err'
  }

  errorMessage(fieldName) {
    if (fieldName.length > 0) {
      return <span className='error-message'>{fieldName}</span>
    } else {
      return ''
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form-item col-1'>
          <label htmlFor='name' className='form-item__label'>
            Full name
          </label>

          <input
            type='text'
            placeholder='Cyrillic only'
            name='name'
            className={`form-item__input ${this.errorClass(
              this.state.formErrors.name
            )}`}
            value={this.state.name}
            onChange={this.handleUserInput}
          />
          {this.errorMessage(this.state.formErrors.name)}
        </div>
        <div className='form-item col-1'>
          <label htmlFor='phone' className='form-item__label'>
            Phone number
          </label>

          <InputMask
            type='text'
            placeholder='+7(___)___-__-__'
            mask='+7 (999) 999-99-99'
            name='phone'
            className={`form-item__input ${this.errorClass(
              this.state.formErrors.phone
            )}`}
            value={this.state.phone}
            onChange={this.handleUserInput}
          />
          {this.errorMessage(this.state.formErrors.phone)}
        </div>
        <div className='form-item col-2'>
          <label htmlFor='address' className='form-item__label'>
            Address
          </label>
          <input
            type='text'
            placeholder='City, address'
            name='address'
            className={`form-item__input ${this.errorClass(
              this.state.formErrors.address
            )}`}
            value={this.state.address}
            onChange={this.handleUserInput}
          />
          {this.errorMessage(this.state.formErrors.address)}
        </div>
        <div className='form-item col-2'>
          <label htmlFor='comment' className='form-item__label'>
            Comment
          </label>
          <textarea
            type='text'
            name='comment'
            className={`form-item__input form-item__input_text ${this.errorClass(
              this.state.formErrors.comment
            )}`}
            value={this.state.comment}
            onChange={this.handleUserInput}
          />
          {this.errorMessage(this.state.formErrors.comment)}
        </div>
        <div className='form-item col-2'>
          <input
            type='submit'
            value='Order now'
            className='submit-btn'
            disabled={!this.state.formValid}
          />
        </div>
      </form>
    )
  }
}

export default DeliveryTab
