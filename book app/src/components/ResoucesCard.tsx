import { IonRippleEffect } from '@ionic/react'
import React from 'react'
import './ripple.css'
const ResoucesCard = ({data}) => {
  return (

    <div className='ion-activatable ripple-parent' style={{backgroundColor : "#80808040" , display :"flex",  alignItems : "center" , borderRadius : "8px"  , width : "100%" , maxWidth : "768px" , height : "50px" , padding : "0 20px"}}>
        {data?.name}
        <IonRippleEffect></IonRippleEffect>
        </div>
  )
}

export default ResoucesCard