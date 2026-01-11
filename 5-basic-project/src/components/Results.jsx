import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {

    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <section id="results">
            <h2>Results</h2>
            <table >
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map((yearData, index) => {
                        const totalInterest = yearData.valueEndOfYear - initialInvestment - (userInput.annualInvestment * yearData.year);
                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                        return (
                            <tr key={index}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}