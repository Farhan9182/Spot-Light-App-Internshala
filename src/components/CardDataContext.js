import React, { createContext, useContext, useState } from 'react';

const CardDataContext = createContext();

export const useCardData = () => {
  return useContext(CardDataContext);
};

export const CardDataProvider = ({ children }) => {
  const [cardData, setCardData] = useState({});

  const updateCardData = (data) => {
    setCardData(data);
  };

  return (
    <CardDataContext.Provider value={{ cardData, updateCardData }}>
      {children}
    </CardDataContext.Provider>
  );
};
