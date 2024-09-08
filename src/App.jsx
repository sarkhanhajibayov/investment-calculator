import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
export const INITIAL_FORM = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
function App() {
  const [initialForm, setForm] = useState(INITIAL_FORM);
  const [result, setResult] = useState(
    calculateInvestmentResults(INITIAL_FORM)
  );

  function handleChange(e) {
    const updatedForm = { ...initialForm, [e.target.name]: +e.target.value };
    setForm(updatedForm);
    const newResult = calculateInvestmentResults(updatedForm);
    setResult(newResult);
  }

  return (
    <div>
      <Header />
      <Form initialForm={initialForm} changed={handleChange} />
      {initialForm.duration > 0 ? (
        <Table data={result} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </div>
  );
}

export default App;
