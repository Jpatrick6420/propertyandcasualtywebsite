function ClaimsResults({ currentData }) {
  return (
    <>
      <p>Claims</p>
      {currentData.auto.claims?.map((item, i) => (
        <p key={i}>
          {item.type} {item.date}
        </p>
      ))}
    </>
  );
}

export default ClaimsResults;
