import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "@/app/loading";

const page = () => {
  return (
    <div>
      <h2>Tickets</h2>
      <p>
        <small>Currently open tickets</small>
      </p>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default page;
