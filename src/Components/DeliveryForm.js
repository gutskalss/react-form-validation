import React from 'react'
import DeliveryTab from './DeliveryTab'
import PickupTab from './PickupTab'

const DeliveryForm = () => {
  const openTab = (e, tabName) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tabs__item')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        ' tabs__item_active',
        ''
      )
    }
    document.getElementById(tabName).style.display = 'block'
    e.currentTarget.className += ' tabs__item_active'
  }

  return (
    <div className='container'>
      <h2>Select delivery method</h2>
      <div className='tabs'>
        <button
          className='tabs__item tabs__item_active'
          onClick={e => openTab(e, 'delivery')}
        >
          Delivery
        </button>
        <button className='tabs__item' onClick={e => openTab(e, 'pickup')}>
          Pickup
        </button>
      </div>
      <div id='delivery' className='tabcontent' style={{ display: 'block' }}>
        <DeliveryTab />
      </div>

      <div id='pickup' className='tabcontent'>
        <PickupTab />
      </div>
    </div>
  )
}

export default DeliveryForm
