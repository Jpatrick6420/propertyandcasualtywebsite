function TipsSection({ tips }) {
  return (
    <ul>
      {tips.map((item) => {
        return <li>{item.tip}</li>;
      })}
    </ul>
  );
}

export default TipsSection;
