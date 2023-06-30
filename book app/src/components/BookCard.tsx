import {  IonRippleEffect, IonRouterLink } from '@ionic/react'
import { Link, NavLink } from 'react-router-dom'
import './ripple.css'

const BookCard = ({data}) => {
  return (
    <Link to = {`/downloadBook/${data?.driveid}`}>
    <div
    className='bookCard ion-activatable ripple-parent'
    style={{
      borderRadius: "30px",
      background: "#428cff",
    }}
    
    >
              <img src={data?.cover_link} style={{height: "100%"  , width : "100%" , borderRadius: "30px" }} alt="" />
                <IonRippleEffect></IonRippleEffect>
            </div>
    </Link>
  )
}

export default BookCard