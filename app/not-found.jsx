import React from "react";
import Link from "next/link";
const notFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>Could Not find Page you were looking for</p>
      <p>
        {" "}
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
};

export default notFound;
