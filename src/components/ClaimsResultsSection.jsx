function ClaimsResultsSection({ currentData, label = "Claims" }) {
  return (
    <>
      <ol className="px-4 py-2 space-y-2 font-bold text-xl">{label}</ol>
      {currentData?.claims?.map((item, i) => (
        <li key={i} className="pl-6 font-normal text-md">
          {item.type} {item.date}
        </li>
      ))}
    </>
  );
}

export default ClaimsResultsSection;
