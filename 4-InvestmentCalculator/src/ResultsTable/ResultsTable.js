import classes from './ResultsTable.module.css';

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = ({ data, initialInvestment }) => (
  <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {data.map((yearlyData) => (
        <tr key={yearlyData.year}>
          <td>{yearlyData.year}</td>
          <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
          <td>{formatter.format(yearlyData.yearlyInterest)}</td>
          <td>
            {formatter.format(
              yearlyData.savingsEndOfYear -
                initialInvestment -
                yearlyData.yearlyContribution * yearlyData.year
            )}
          </td>
          <td>
            {formatter.format(
              initialInvestment +
                yearlyData.yearlyContribution * yearlyData.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ResultsTable;
