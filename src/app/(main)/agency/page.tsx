import { getAuthDetails, verifyAndAcceptInvitaitions } from "@/lib/queries";
import React from "react";

const Agency = async () => {
  const agencyId = await verifyAndAcceptInvitaitions();
  console.log(agencyId);

  const user = await getAuthDetails();

  return <div>Agency Dashboard</div>;
};

export default Agency;
