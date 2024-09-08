export default function Form({ changed, initialForm }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            value={initialForm.initialInvestment}
            onChange={changed}
            name="initialInvestment"
            type="number"
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            value={initialForm.annualInvestment}
            onChange={changed}
            name="annualInvestment"
            type="number"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected return</label>
          <input
            value={initialForm.expectedReturn}
            onChange={changed}
            name="expectedReturn"
            type="number"
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            value={initialForm.duration}
            onChange={changed}
            name="duration"
            type="number"
          />
        </p>
      </div>
    </section>
  );
}
