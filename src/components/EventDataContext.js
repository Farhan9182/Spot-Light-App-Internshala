import React, { createContext, useContext, useState } from 'react';

const EventDataContext = createContext();

export const useEventData = () => {
  return useContext(EventDataContext);
};

export const EventDataProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);

  const updateEventData = (data) => {
    setEventData(data);
  };

  return (
    <EventDataContext.Provider value={{ eventData, updateEventData }}>
      {children}
    </EventDataContext.Provider>
  );
};
