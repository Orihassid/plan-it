import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import React,{useState} from "react";
import Weather from "../../components/Weather/Weather";
import ItemList from "../../components/TableList/ItemList"
import ImgUploader from "../../components/ImgUploader/ImgUploader,";
import UserList from "../../components/UserCard/UserList";
const Home = ({event}) => {
  console.log(event,'home')
  
  console.log(event,'lastEvent')
  return (
    <div className="home">
     
      <div className="homeContainer">
        <Navbar />
        <div className="EventsTypes">
          <EventsType event={event} />
        </div>
        <div className="charts">
          <Location />
          <div><h1>Dates: 10/10/2010 </h1></div>
          <Weather/>
          {/* <ImgUploader/> */}
          <UserList/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Event List</div>
        
          <ItemList event={event} />
      
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
