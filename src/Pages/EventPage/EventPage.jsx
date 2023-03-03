import { useParams } from "react-router-dom";
import { Event } from "../../Components";
import EventData from "../../Data/EventData.json";

const EventPage = () => {
  const eventID = useParams();
  const ind = parseInt(eventID.id, 10);
  return (
    <>
      {ind > 0 && <Event data={EventData[ind - 1]} />}
      {ind <= 0 && <div>Error Page</div>}
    </>
  );
};

export default EventPage;
