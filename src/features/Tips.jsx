import { platformTips } from "../data/tips";
import Card from "../components/Card";
function Tips() {
  return (
    <div className="w-3/4">
      <ul className="px-4 py-2 space-y-4 mx-auto">
        {platformTips.map((item, i) => (
          <Card info={item} index={i} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default Tips;
