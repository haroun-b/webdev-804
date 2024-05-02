function TravelCard({ plan, removePlan }) {
  const isGreatPlan = plan.totalCost < 350;
  const isPremium = plan.totalCost > 1500;

  return (
    <div className="plan-card">
      <img
        src={plan.image}
        alt=""
      />
      <hgroup>
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <div>Price: {plan.totalCost} €</div>
        {isPremium && <div className="premium tag">Premium</div>}
        {isGreatPlan && <div className="deal tag">Great Deal</div>}

        <button onClick={() => removePlan(plan.id)}>Delete</button>
      </hgroup>
    </div>
  );
}

export default TravelCard;
