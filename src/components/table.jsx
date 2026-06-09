import { useState } from "react";

function Table() {
  const initialTableData = {
    ourPriceAuto: "",
    theirPriceAuto: "",
    theirPriceAutoYearly: "biannual",
    ourPriceHome: "",
    theirPriceHome: "",
    ourOther: "",
    theirOther: "",
  };

  const [tableData, setTableData] = useState(initialTableData);

  const dollars = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const handleChange = (e, field) => {
    setTableData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const timeOptions = {
    monthly: 12,
    biannual: 2,
    annual: 1,
  };

  const calcAnnual = (time, num) => {
    return Number(num) * timeOptions[time];
  };

  const num = (value) => Number(value || 0);

  const theirAnnual = calcAnnual(
    tableData.theirPriceAutoYearly,
    tableData.theirPriceAuto,
  );

  const ourAutoYearly = num(tableData.ourPriceAuto) * 2;

  const ourTotal =
    ourAutoYearly + num(tableData.ourPriceHome) + num(tableData.ourOther);
  const theirTotal =
    theirAnnual + num(tableData.theirPriceHome) + num(tableData.theirOther);

  const difference = ourTotal - theirTotal;

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  const autoDifference = ourAutoYearly - theirAnnual;
  const autoMonthlyDifference = autoDifference / 12;

  const otherLine =
    num(tableData.ourOther) || num(tableData.theirOther)
      ? `

Our other price: ${dollars(tableData.ourOther)}
Your other price: ${dollars(tableData.theirOther)}`
      : "";

  const differenceText =
    difference < 0
      ? `Total savings: ${dollars(Math.abs(difference))} per year`
      : difference > 0
        ? `Additional cost: ${dollars(difference)} per year`
        : "No difference in yearly premium";

  const handleCopyAutoOnly = () => {
    copyText(`
Our auto price yearly: ${dollars(ourAutoYearly)}
Your auto price yearly: ${dollars(theirAnnual)}

Our auto monthly equivalent: ${dollars(ourAutoYearly / 12)}
Your auto monthly equivalent: ${dollars(theirAnnual / 12)}

--------------------------------

${
  autoDifference < 0
    ? `Auto savings: ${dollars(Math.abs(autoDifference))} per year / ${dollars(Math.abs(autoMonthlyDifference))} per month`
    : autoDifference > 0
      ? `Auto additional cost: ${dollars(autoDifference)} per year / ${dollars(autoMonthlyDifference)} per month`
      : "No difference in auto premium"
}
`);
  };

  const handleCopyAnnualTotal = () => {
    copyText(`
Our auto price yearly: ${dollars(ourAutoYearly)}
Your auto price yearly: ${dollars(theirAnnual)}

Our home price: ${dollars(tableData.ourPriceHome)}
Your home price: ${dollars(tableData.theirPriceHome)}${otherLine}

--------------------------------

${differenceText}
`);
  };

  const handleCopyAutoMonthlyHomeAnnual = () => {
    copyText(`
Our auto: ${dollars(ourAutoYearly / 12)} per month
Your auto: ${dollars(theirAnnual / 12)} per month

Our home: ${dollars(tableData.ourPriceHome)} per year
Your home: ${dollars(tableData.theirPriceHome)} per year${otherLine}

--------------------------------

${differenceText}
`);
  };

  const handleReset = () => {
    setTableData(initialTableData);
  };
  return (
    <table className="w-full  table-fixed ">
      <thead className="w-full border-2 ">
        <tr>
          <th></th>
          <th className="text-center ">Our Price</th>
          {/* <th className="text-center ">Yearly</th> */}
          <th className="text-center ">Our Yearly</th>
          <th className="text-center ">Their Price</th>
          <th className="text-center ">Payment Method</th>
          <th className="text-center ">Their Yearly</th>
        </tr>
      </thead>

      <tbody>
        <tr className="">
          <th className="w-full text-center ">Auto</th>
          <td className="w-full text-center">
            {tableData.ourPriceAuto != "" ? "$" : ""}
            <input
              type="number"
              value={tableData.ourPriceAuto}
              onChange={(e) => handleChange(e, "ourPriceAuto")}
            />
          </td>
          {/* <td className="w-full text-center">Yes</td> */}
          <td className="w-full text-center">
            {ourAutoYearly != "" ? "$" : ""}
            {ourAutoYearly.toFixed(2)}
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
              <option value="monthly">Monthly</option>
              <option value="biannual">biannual</option>
              <option value="annual">Yearly</option>
            </select>
          </td>
          <td className="w-full text-center">
            {theirAnnual != "" ? "$" : ""}
            {theirAnnual}
          </td>
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
          {/* <td className="w-full text-center">Yes</td> */}
          <td className="w-full text-center">
            {tableData.ourPriceHome != "" ? "$" : ""}
            {num(tableData.ourPriceHome)}
          </td>

          <td className="w-full text-center">
            <input
              type="number"
              value={tableData.theirPriceHome}
              onChange={(e) => handleChange(e, "theirPriceHome")}
            />
          </td>
          <td className="w-full text-center">Yes</td>
          <td className="w-full text-center">
            {tableData.theirPriceHome != "" ? "$" : ""}
            {num(tableData.theirPriceHome)}
          </td>
        </tr>
        <tr>
          <th className="w-full text-center">Our Other</th>
          <td className="w-full text-center">
            {tableData.ourOther != "" ? "$" : ""}{" "}
            <input
              type="number"
              value={tableData.ourOther}
              onChange={(e) => handleChange(e, "ourOther")}
            />
          </td>
          {/* <td className="w-full text-center">Yes</td> */}
          <td className="w-full text-center">
            {tableData.ourOther != "" ? "$" : ""}
            {num(tableData.ourOther)}
          </td>

          <td className="w-full text-center">
            {tableData.theirOther != "" ? "$" : ""}
            <input
              type="number"
              value={tableData.theirOther}
              onChange={(e) => handleChange(e, "theirOther")}
            />
          </td>
          <td className="w-full text-center">Yes</td>
          <td className="w-full text-center">
            {tableData.theirOther != "" ? "$" : ""}
            {num(tableData.theirOther)}
          </td>
        </tr>
        <tr>
          <td className="w-full text-center">Monthly rate</td>

          <td className="w-full text-center">
            {tableData.ourPriceAuto != "" ? "$" : ""}
            {((ourAutoYearly + num(tableData.ourOther)) / 12).toFixed(2)}
          </td>
          <td className="w-full text-center">Their Monthly rate</td>
          <td className="w-full text-center">
            {tableData.ourPriceAuto !== "" ? "$" : ""}
            {((theirAnnual + num(tableData.theirOther)) / 12).toFixed(2)}
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
          <td></td>
        </tr>
        <tr>
          <td>
            <div className="flex gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-stone-50 px-2 py-1 rounded-md"
                onClick={handleCopyAutoOnly}
              >
                Auto
              </button>

              <button
                className="bg-purple-500 hover:bg-purple-400 text-stone-50 px-2 py-1 rounded-md"
                onClick={handleCopyAnnualTotal}
              >
                Yearly
              </button>

              <button
                className="bg-teal-500 hover:bg-teal-400 text-stone-50 px-2 py-1 rounded-md"
                onClick={handleCopyAutoMonthlyHomeAnnual}
              >
                Mixed
              </button>
              <button
                className="bg-red-500 hover:bg-red-400 text-stone-50 px-2 py-1 rounded-md"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
