import React, { createContext, useContext, useState } from "react";

const LoanContext = createContext();

export const useLoanContext = () => useContext(LoanContext);

export const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState([]);

  // Función para agregar un libro a los préstamos
  const addLoan = (book) => {
    setLoans((prevLoans) => [...prevLoans, { ...book, date: new Date() }]);
  };

  return (
    <LoanContext.Provider value={{ loans, addLoan }}>
      {children}
    </LoanContext.Provider>
  );
};
