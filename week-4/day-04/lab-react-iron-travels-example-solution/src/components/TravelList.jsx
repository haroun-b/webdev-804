import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  function removePlan(id) {
    const keptPlans = plans.filter((plan) => plan.id !== id);

    setPlans(keptPlans);
  }

  return plans.map((plan) => {
    return (
      <TravelCard
        key={plan.id}
        plan={plan}
        removePlan={removePlan}
      />
    );
  });
}

export default TravelList;
