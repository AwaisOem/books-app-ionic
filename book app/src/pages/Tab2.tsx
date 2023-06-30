import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import BookCard  from  "../components/BookCard"

const AllBooks = [
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
    driveid : "1bn0CqKPjHcDflno7Rd8QG_UTM6vOs9Vz",
    cover_link : "/books_covers/java_book.png",
    name : "Java For Beginners", 
    author : "Scott Sanderson",
  },
  { 
    driveid : "14UVNCRhwiDD2sD20XsSp_CnrhfVVf9fz",
    cover_link : "/books_covers/asembly_book.png",
    name : "Assembly Language", 
    author : "Kip Irvine",
  },
  { 
    driveid : "1c9Va3FJ_J6FZ9n_TIpI8AcNM4TEg7Edo",
    cover_link : "/books_covers/computerArc_book.png",
    name : "Computer Architecture", 
    author : "Willian Stalling",
  },
  { 
    driveid : "1747_T4e2NKVBT7YLTuUg5e2Jif5ifYhZ",
    cover_link : "/books_covers/networks_book.png",
    name : "Computer Networks", 
    author : "Behrouz A. Forouzan",
  },
  { 
    driveid : "1ICVNwy0zk2aeu3NWsuNxw7mpeuMjR1Y5",
    cover_link : "/books_covers/cpp_book.png",
    name : "Programming in C++", 
    author : "Robert Lafore",
  },
  { 
    driveid : "1avERKpicK0ch_L7qI-9WbFPfcNnV7icS",
    cover_link : "/books_covers/cleancpp_book.png",
    name : "Guide For Clean C++", 
    author : "Stephan Roth",
  },
  { 
    driveid : "1PIwkJ2VlxuNER5pjoa-EBKMespYetYUy",
    cover_link : "/books_covers/cpp2_book.png",
    name : "C++ How To Program", 
    author : "Pual & Harvey",
  },
  { 
    driveid : "1-KY1QxdZXUcK1alAr6dBQRUM6cziN00A",
    cover_link : "/books_covers/csharp_book.png",
    name : "C# Game Development", 
    author : "Jeff W. Murray",
  },
  { 
    driveid : "1f1bT85dTihnwLWRZaZgxy6UaII170Cc6",
    cover_link : "/books_covers/dsa_book.png",
    name : "Data Structures & Algorithms", 
    author : "Michael & David",
  },
  { 
    driveid : "1is_VQXyHkdlWaL8eAIanCWZra7GJHvSh",
    cover_link : "/books_covers/dsa2_book.png",
    name : "Data Structures in C++", 
    author : "Mark Allen",
  },
  { 
    driveid : "1FDFFSWntrzb9lYQ0yG3ZouPfHaL3s-QY",
    cover_link : "/books_covers/ds_book.png",
    name : "Discrete Mathematics", 
    author : "Kennenth H. Rosen",
  },
  { 
    driveid : "1OP7KyEvbUWaQvKReHl6nNZymUzNmb6jO",
    cover_link : "/books_covers/dld_book.png",
    name : "Digital Logic Design", 
    author : "M. Morris Mano",
  },
  { 
    driveid : "18tJ1kJvwcofe5wnmQOwj_fRBbPjGRI48",
    cover_link : "/books_covers/calculus_book.png",
    name : "Calculus", 
    author : "Thomas Edision",
  },
  { 
    driveid : "1Cza8VgagNGwWYCaBX3Lo881ISyZwO5Po",
    cover_link : "/books_covers/stats_book.png",
    name : "Probability and Stats", 
    author : "Michael Baron",
  },
  { 
    driveid : "1f1vsnoUEZwZnjL7fqDUl9Xmw796KadmF",
    cover_link : "/books_covers/python_book.png",
    name : "Python Cookbook", 
    author : "David & Brian",
  },
];

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
          <div style={{textAlign : "center" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
              Books
              <img src="/helping_pics/book_emoji.svg" style={{width : "40px"}} alt="" />
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{display : "flex" , justifyContent : "center" , padding: "3px" ,marginTop  : "10px",  width : "100%"}}>
          <input type="search" name="search" placeholder="Search..." style = {{ height : "35px" ,borderRadius : "8px" , border : "1px solid #428cff"  , padding :"10px", width : "100%" , maxWidth : "768px"  }} />
        </div>
        <div style={{display: "flex" , width : "100%"  ,  justifyContent : "center", padding: "15px"}}>
          <div style={{display: "flex" , justifyContent : "center" ,  alignItems : "center", height : "fit-content",  flexWrap : "wrap" , gap : "10px" , width : "100%" , maxWidth : "786px" }}>
          {AllBooks?.map(e=>(<BookCard data={e} />))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
