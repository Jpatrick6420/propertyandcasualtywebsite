import { useState } from "react";

function Card({ info, index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li className="bg-blue-400 px-2 py-4 rounded-lg shadow-sm shadow-gray-900 hover:scale-105">
      <p className="font-bold text-xl">
        {index + 1 + ") "}
        {info.name}
      </p>

      {info.instructions?.map((instr, j) => (
        <p key={instr} className="hidden" >
          <em className="inline ">{j + 1}:</em>
          {instr}
        </p>
      ))}
    </li>
  );
}

export default Card;
