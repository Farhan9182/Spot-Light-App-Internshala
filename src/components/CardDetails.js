// src/components/CardDetails.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function CardDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resourceType = queryParams.get('resourceType');

  const [cardDetailsData, setCardDetailsData] = useState([]);
  const [activeTab, setActiveTab] = useState('summary');

  useEffect(() => {
    // axios.get(`/api/card-details-data?resourceType=${resourceType}`).then((response) => {
    //   setCardDetailsData(response.data);
    // });
  }, [resourceType]);

  return (
    <div className="card-details">
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
                activeTab === 'data' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setActiveTab('data')}
            >
              Data
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
        {activeTab === 'data' && (
          <div className="bg-gray-200 p-4 rounded-lg mt-4">
            {/* Data content */}
            {/* Render data content here */}
          </div>
        )}
      </main>
    </div>
  );
}

export default CardDetails;
