import Button from "../components/Button";
import { useParams } from "react-router-dom";
const DownloadPage = () => {
  const {id} :any = useParams();
  return (
    <div>
      <div
        style={{
          width: "100%",
          maxWidth: "768px",
          height: "800px",
          margin: "auto",
          display : "flex" ,
          flexDirection : "column" , 
          alignItems : "center",
          padding : "10px"
        }}
      >
        <div className="margin-bottom-minus" style={{ maxWidth : "100%"   }}>

            <img src="https://www.adobe.com/express/create/cover/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02.jpeg?width=400&format=jpeg&optimize=medium" alt="" style={{borderRadius : "20px", maxWidth : "100%" , maxHeight : "60%"}} />
        </div>
        <h1>This is Book Title</h1>
        <p style={{margin : "0 0" , opacity : "0.5"}}>Author :{id} Kevin Peterson</p>
        <div
          slot="bottom"
          style={{
            position: "absolute",
            padding: "10px",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            display: "flex",
            width: "100%",
            bottom: "0",
            left: "0",
          }}
        >
          <Button className="" child="Read" style={{ padding: "10px", width: "180px", borderRadius: "8px" }}/>
          <Button className="" child="Download" style={{ padding: "10px", width: "180px", borderRadius: "8px" ,backgroundColor: "#428cff", }}/>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
