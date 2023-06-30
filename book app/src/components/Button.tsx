import { IonRippleEffect } from "@ionic/react"
import './ripple.css'
const Button = ({child , className , style }) => {
  return (
    <button className={`${className} ion-activatable ripple-parent`} style={style}  >{child}
    <IonRippleEffect></IonRippleEffect>
    </button>
  )
}

export default Button