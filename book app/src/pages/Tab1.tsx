import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AdCard from "../components/adCard";
import BookCard from "../components/BookCard";
import ResoucesCard from "../components/ResoucesCard";
import "./Tab1.css";


const ReqBooks = [
  { 
    driveid : "1BgQQEeUA5PR1zOzUHvMwQ2ePr9a6kCbA",
    cover_link : "/books_covers/javascript_book.png",
    name : "Speaking Javascript", 
    author : "Dr. Axel Rauschmayer",
  },
  { 
    driveid : "1UzXUCqIovMnuV37koeYvCNdAly66uaAc",
    cover_link : "/books_covers/AI_book.png",
    name : "Artificial Inteligence", 
    author : "RUSSELL & NORVIG",
  },
  { 
    driveid : "1avERKpicK0ch_L7qI-9WbFPfcNnV7icS",
    cover_link : "/books_covers/cleancpp_book.png",
    name : "Guide For Clean C++", 
    author : "Stephan Roth",
  },
  { 
    driveid : "1f1bT85dTihnwLWRZaZgxy6UaII170Cc6",
    cover_link : "/books_covers/dsa_book.png",
    name : "Data Structures & Algorithms", 
    author : "Michael & David",
  },
  { 
    driveid : "1f1vsnoUEZwZnjL7fqDUl9Xmw796KadmF",
    cover_link : "/books_covers/python_book.png",
    name : "Python Cookbook", 
    author : "David & Brian",
  },
];
const Reqmaterials = [
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

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Welcome to Book Hub
              <img
                src="/helping_pics/welcome_emoji.svg"
                style={{ width: "40px" }}
                alt=""
              />
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            padding: "15px",
            maxWidth: "768px",
          }}
        >
          <AdCard pic_link={"/images/book_banner.png"} />
          <h1>Recommended</h1>

          <div
          className="noScrollBar"
            style={{
              display: "flex",
              maxWidth: "100%",
              gap: "15px",
              overflowX: "auto",
            }}
          >
            {ReqBooks?.map(e=>(<BookCard data={e}/>))}
          </div>
          <AdCard pic_link={"/images/wowlearns_banner.png"} />
          <h1>Cat Treasure</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px",
              padding: "10px",
            }}
          >
            {Reqmaterials?.map(e=>(<ResoucesCard data={e}/>))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
