import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" required value={userInput.initialInvestment} onChange={(e) => onChange("initialInvestment", e.target.value)} />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" required value={userInput.annualInvestment} onChange={(e) => onChange("annualInvestment", e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" id="expected-return" required min="1" max="100" value={userInput.expectedReturn} onChange={(e) => onChange("expectedReturn", e.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" required min="1" max="100" value={userInput.duration} onChange={(e) => onChange("duration", e.target.value)} />
                </p>
            </div>
            <button>Calculate</button>
        </section>
    );
}