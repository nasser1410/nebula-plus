import TicketList from "./TicketList";

const page = () => {
  return (
    <div>
      <h2>Tickets</h2>
      <p>
        <small>Currently open tickets</small>
      </p>
      <TicketList />
    </div>
  );
};

export default page;
