// import { useState } from "react";
// function Table() {
//   const [tableData, setTableData] = useState({
//     ourPriceAuto: 0,
//     theirPriceAuto: 0,
//     theirPriceAutoYearly: "false",
//     ourPriceHome: 0,
//     theirPriceHome: 0,
//     ourPriceYearly: 0,
//     theirPriceYearly: 0,
//     basePrice: 0,
//   });

//   const handleStatsChange = (e, field) => {
//     setTableData((prev) => {
//       return { ...prev, [field]: e.target.value };
//     });
//   };
//   const handleOurAutoPriceChange = (e) => {
//     const price = e.target.value;
//     setTableData((prev) => ({
//       ...prev,
//       ourPriceAuto: price,
//       ourPriceYearly:
//         Number(tableData.ourPriceAuto) + Number(tableData.ourPriceHome),
//     }));
//   };
//   const handleTheirAutoPriceChange = (e) => {
//     const price = e.target.value;
//     setTableData((prev) => ({
//       ...prev,
//       theirPriceAuto: price,
//       theirPriceYearly:
//         Number(tableData.theirPriceAuto) + Number(tableData.theirPriceHome),
//     }));
//   };
//   const handleTheirPriceYearlyChange = (e) => {
//     const yearly = e.target.value === "true";
//     const yearlyValue = yearly == "true" ? true : false;

//     setTableData((prev) => ({
//       ...prev,
//       theirPriceAutoYearly: e.target.value,
//       ...(yearlyValue
//         ? {
//             ourPriceAuto: Number(prev.ourPriceAuto) * 2,
//           }
//         : {
//             ourPriceYearly: Number(prev.ourPriceAuto) / 2,
//           }),
//     }));
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th></th>
//           <th>Our Price</th>
//           <th>Yearly</th>
//           <th>Our Total</th>
//           <th>Their Price</th>
//           <th>Yearly</th>
//           <th>Their Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Auto</th>
//           <td>
//             <input
//               type="number"
//               id="our_price_auto"
//               value={tableData.ourPriceAuto}
//               onChange={(e) => handleOurAutoPriceChange(e)}
//             />
//           </td>
//           <td>No</td>
//           <td>{tableData.ourPriceAuto}</td>

//           <td>
//             <input
//               type="number"
//               id="their_price_auto"
//               value={tableData.theirPriceAuto}
//               onChange={(e) => handleTheirAutoPriceChange(e)}
//             />
//           </td>
//           <td>
//             <select
//               id="their_price_yearly"
//               value={tableData.theirPriceAutoYearly}
//               onChange={(e) => handleTheirPriceYearlyChange(e)}
//             >
//               <option value="false">No</option>
//               <option value="true">Yes</option>
//             </select>
//           </td>
//           <td>{tableData.theirPriceAuto}</td>
//         </tr>
//         <tr>
//           <th>Home</th>
//           <td>
//             <input
//               type="number"
//               id="our_price_home"
//               value={tableData.ourPriceHome}
//               onChange={(e) => handleStatsChange(e, "ourPriceHome")}
//             />
//           </td>
//           <td>No</td>
//           <td>{tableData.ourPriceHome}</td>
//           <td>
//             <input
//               type="number"
//               id="their_price_home"
//               value={tableData.theirPriceHome}
//               onChange={(e) => handleStatsChange(e, "theirPriceHome")}
//             />
//           </td>
//           <td>Yes</td>
//           <td>{tableData.theirPriceHome}</td>
//         </tr>
//       </tbody>
//       <tfoot>
//         <tr>
//           <td>Difference</td>
//           <td>
//             {Number(tableData.ourPriceAuto) +
//               Number(tableData.ourPriceHome) -
//               (Number(tableData.theirPriceAuto) +
//                 Number(tableData.theirPriceHome))}
//           </td>
//         </tr>
//       </tfoot>
//     </table>
//   );
// }

// export default Table;

import { useState } from "react";

function Table() {
  const [tableData, setTableData] = useState({
    ourPriceAuto: "",
    theirPriceAuto: "",
    theirPriceAutoYearly: "false",
    ourPriceHome: "",
    theirPriceHome: "",
  });

  const handleChange = (e, field) => {
    setTableData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const num = (value) => Number(value || 0);

  const theirAutoYearly =
    tableData.theirPriceAutoYearly === "true"
      ? num(tableData.theirPriceAuto)
      : num(tableData.theirPriceAuto) * 2;
  const ourAutoYearly = num(tableData.ourPriceAuto) * 2;

  const ourTotal = ourAutoYearly + num(tableData.ourPriceHome);
  const theirTotal = theirAutoYearly + num(tableData.theirPriceHome);

  const difference = ourTotal - theirTotal;

  return (
    <table className="w-full  table-fixed ">
      <thead className="w-full border-2 ">
        <tr className=" ">
          <th></th>
          <th className="text-center ">Our Price</th>
          <th className="text-center ">Yearly?</th>
          <th className="text-center ">Our Yearly</th>
          <th className="text-center ">Their Price</th>
          <th className="text-center ">Yearly?</th>
          <th className="text-center ">Their Yearly</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Auto</th>
          <td className="w-full">
            {tableData.ourPriceAuto != "" ? "$" : ""}
            <input
              type="number"
              value={tableData.ourPriceAuto}
              onChange={(e) => handleChange(e, "ourPriceAuto")}
            />
          </td>
          <td className="w-full text-center">Yes</td>
          <td className="w-full text-center">
            {tableData.theirPriceAutoYearly
              ? tableData.ourPriceAuto * 2
              : tableData.ourPriceAuto / 2}
          </td>

          <td className="w-full text-center">
            {tableData.theirPriceAuto != "" ? "$" : ""}
            <input
              type="number"
              value={tableData.theirPriceAuto}
              onChange={(e) => handleChange(e, "theirPriceAuto")}
            />
          </td>
          <td className="w-full text-center">
            <select
              value={tableData.theirPriceAutoYearly}
              onChange={(e) => handleChange(e, "theirPriceAutoYearly")}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </td>
          <td className="w-full text-center"> {theirAutoYearly}</td>
        </tr>

        <tr>
          <th className="w-full text-center">Home</th>
          <td className="w-full text-center">
            {tableData.ourPriceHome != "" ? "$" : ""}
            <input
              type="number"
              value={tableData.ourPriceHome}
              onChange={(e) => handleChange(e, "ourPriceHome")}
            />
          </td>
          <td className="w-full text-center">Yes</td>
          <td className="w-full text-center">{num(tableData.ourPriceHome)}</td>

          <td className="w-full text-center">
            <input
              type="number"
              value={tableData.theirPriceHome}
              onChange={(e) => handleChange(e, "theirPriceHome")}
            />
          </td>
          <td className="w-full text-center">Yes</td>
          <td className="w-full text-center">
            {num(tableData.theirPriceHome)}
          </td>
        </tr>
      </tbody>

      <tfoot className="border-t-2 border-gray-900">
        <tr>
          <td className="text-center w-full ">Yearly Difference</td>
          <td
            className={`text-center w-full ${difference > 300 ? "text-red-500" : difference > -300 ? "text-yellow-500" : "text-green-500"}`}
          >
            ${difference.toFixed(2)}
          </td>
          <td className="text-center w-full">Monthly Difference</td>
          <td
            className={`text-center w-full ${Number(difference) / 12 > 15 ? "text-red-500" : Number(difference) / 12 > -25 ? "text-yellow-500" : "text-green-500"}`}
          >
            ${(difference / 12).toFixed(2)}
          </td>
          <td className="text-center w-full">Daily Difference</td>
          <td
            className={`text-center w-full ${Number(difference) / 365 > 0.82 ? "text-red-500" : Number(difference) / 365 > -0.82 ? "text-yellow-500" : "text-green-500"}`}
          >
            ${(difference / 365).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
