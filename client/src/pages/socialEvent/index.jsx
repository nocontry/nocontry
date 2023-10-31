import { useEffect, useState } from "react";
import InputSearch from "../../components/InputSearch";
import Title1 from "../../components/Title1";
import ListEvents from "./ListEvents";
import axios from "axios";
import { Link } from "react-router-dom";

function index() {
  const [data, setData] = useState([]);
  const [searchedEvent, setSearchedEvent] = useState("");
  const apiUrl = "http://localhost:3001/Eventos";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function to make the request
  }, []);

  const onChangeHandler = (e) => {
    setSearchedEvent(e.target.value);
  };
  const searchMatches = data.filter(function (d) {
    return d.titulo.includes(searchedEvent);
});
  return (
    <div className="mb-[72px]">
      <Title1 title={"Eventos"} />
      <InputSearch searchedEvent={searchedEvent}
        onChangeHandler={onChangeHandler}/>
      {/* <Filtro/> */}
      {searchMatches.length > 0 ? (
        <ListEvents data={searchMatches} />
      ) : (
        <p>No se encontraron eventos</p>
      )}
    </div>
  );
}

export default index;
