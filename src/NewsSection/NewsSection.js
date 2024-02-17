import  React from "react";
import { useParams } from "react-router-dom";


const NewsSection =() =>{

  const { topic } = useParams();
  const [page, setPage] = React.useState("");

  React.useEffect(() => {

    setPage (topic)
    
  },[topic]);

  return (
    <div><p>hola {page} </p></div>
  )
}

export default NewsSection;