// src/components/EventDetails.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function EventDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get('eventId');

  const [eventDetailsData, setEventDetailsData] = useState([]);
  const [activeTab, setActiveTab] = useState('summary');

  useEffect(() => {
    // axios.get(`/api/event-details-data?eventId=${eventId}`).then((response) => {
    //   setEventDetailsData(response.data);
    // });
  }, [eventId]);

  return (
    <div className="event-details">
      {/* ... Header section ... */}
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <button
              className={`bg-gray-200 px-4 py-2 rounded-l-md ${
                activeTab === 'summary' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setActiveTab('summary')}
            >
              Summary
            </button>
            <button
              className={`bg-gray-200 px-4 py-2 rounded-r-md ${
                activeTab === 'linked' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setActiveTab('linked')}
            >
              Linked
            </button>
          </div>
          {/* Close Button */}
          {/* ... Close button code ... */}
        </div>
        {activeTab === 'summary' && (
          <div className="bg-gray-200 p-4 rounded-lg">
            {/* Summary content */}
            {/* Render summary content here */}
          </div>
        )}
        {activeTab === 'linked' && (
          <div className="bg-gray-200 p-4 rounded-lg mt-4">
            {/* Linked content */}
            {/* Render linked content here */}
          </div>
        )}
      </main>
    </div>
  );
}

export default EventDetails;
