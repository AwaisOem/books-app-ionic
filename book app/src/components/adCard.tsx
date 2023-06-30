import { IonRippleEffect } from '@ionic/react'
import './ripple.css'

const AdCard = ({pic_link}) => {
  return (
    <div className='ion-activatable ripple-parent' style={{width : "100%" , maxWidth : "768px" , borderRadius : "30px" , height : "180px" , margin : "20px 0" , background : "#80808040" }}>
      <img src={pic_link} style={{height : "100%" , minWidth : "100%" , width : "fit-content", borderRadius : "30px"}} alt="" />
<IonRippleEffect></IonRippleEffect>
    </div>
  )
}

export default AdCard