import { formatter } from "../util/investment";
export default function Table({ data }) {
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  return (
    
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Interests</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, i) => {
          const totalInterest =
            el.valueEndOfYear -
            el.annualInvestment * el.year -
            initialInvestment;
          const totalAmountInvested = el.valueEndOfYear - totalInterest;
          return (
            <tr key={i}>
              <td>{el.year}</td>
              <td>{formatter.format(el.valueEndOfYear)}</td>
              <td>{formatter.format(el.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
