import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ResoucesCard from '../components/ResoucesCard';
import './Tab3.css';
const Allmaterials = [
  { 
    driveid : "1hWBr549Kz6gowq0MnzFVHOYwsMp9W7CB",
    cover_link : "/books_covers/asembly_notes.png",
    name : "Assembly Handwrriten notes", 
    author : "Unknown",
  },
  { 
    driveid : "1SyVG9QH_t-04w7avkQNbvXsous3tr9Da",
    cover_link : "/books_covers/dsa_notes.png",
    name : "DSA notes version 1.0", 
    author : "Unknown",
  },
  { 
    driveid : "1OITkTmAaBTsl5COqgcHxyRL2N7ooz6LQ",
    cover_link : "/books_covers/dsa2_notes.png",
    name : "DSA notes version 2.0", 
    author : "Unknown",
  },
  { 
    driveid : "1DsKsCR03sOMeY2s5VM7ux1C5oomzQxB0",
    cover_link : "/books_covers/dsa3_notes.png",
    name : "DSA notes version 3.0", 
    author : "Unknown",
  },
  { 
    driveid : "1trownGA4noPOy3RwjVhP06gkPSoNfV2x",
    cover_link : "/books_covers/pst_notes.png",
    name : "Pakistan Studies notes", 
    author : "Unknown",
  },
  { 
    driveid : "1wW_6glDSUSW0XWPNBkJIl6tmuYzVvhs8",
    cover_link : "/books_covers/pom_notes.png",
    name : "Principal Of Managment", 
    author : "Unknown",
  }
];
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
          <div style={{textAlign : "center" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
              Usefull Material
              <img src="/helping_pics/notes_emoji.svg" style={{width : "40px"}} alt="" />
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div style={{display : "flex" , justifyContent : "center" , padding: "10px" ,marginTop  : "10px",  width : "100%"}}>
          <input type="search" name="search" placeholder="Search..." style = {{ height : "35px" ,borderRadius : "8px" , border : "1px solid #428cff"  , padding :"10px", width : "100%" , maxWidth : "768px"  }} />
        </div>
        <div style={{display : "flex" , alignItems : "center",  flexDirection :"column" , gap : "5px" , padding : "10px"}}>
          {Allmaterials?.map(e=>(<ResoucesCard data={e}/>))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
