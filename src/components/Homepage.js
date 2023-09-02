// src/components/Homepage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";
import axios from 'axios';

function Homepage() {
  const [cardsData, setCardsData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Fetch cards data (sample data)
    // axios.get('/api/cards-data').then((response) => {
    // });
    setCardsData([
        {
          "id": 1,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-07-12T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 2,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-07-22T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 3,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2022-02-03T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 4,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-06-09T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 9,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-09-11T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 12,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 10,
          "serviceDate": "2022-08-10T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 17,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2020-09-24T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 18,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 10,
          "serviceDate": "2022-03-24T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 19,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-09-24T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 22,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2022-01-08T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 23,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-08-17T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 25,
          "year": 2021,
          "eventType": "nonEvent",
          "references": [],
          "reference": 10,
          "serviceDate": "2021-04-02T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 26,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 10,
          "serviceDate": "2022-03-23T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 36,
          "year": 2021,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2021-03-22T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 39,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2020-06-11T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 48,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-05-08T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 50,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2020-03-02T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 51,
          "year": 2021,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2021-05-23T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 58,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 20,
          "serviceDate": "2020-05-08T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 61,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 60,
          "serviceDate": "2023-02-27T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 63,
          "year": 2021,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2021-04-08T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 71,
          "year": 2021,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2021-05-13T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 74,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-05-21T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 75,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2022-06-18T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 76,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2020-06-06T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 82,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-11-05T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 83,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 69,
          "serviceDate": "2020-10-11T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 85,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2020-05-20T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 87,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 60,
          "serviceDate": "2020-07-09T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 88,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2020-08-07T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 89,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2022-02-08T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 91,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 46,
          "serviceDate": "2022-09-06T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        },
        {
          "id": 92,
          "year": 2022,
          "eventType": "nonEvent",
          "references": [],
          "reference": 62,
          "serviceDate": "2022-05-06T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 93,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 60,
          "serviceDate": "2020-10-02T00:00:00",
          "resourceType": "procedure",
          "_id": "123afieoaeife"
        },
        {
          "id": 96,
          "year": 2023,
          "eventType": "nonEvent",
          "references": [],
          "reference": 0,
          "serviceDate": "2023-06-16T00:00:00",
          "resourceType": "Condition",
          "_id": "123afieoaeife"
        },
        {
          "id": 97,
          "year": 2020,
          "eventType": "nonEvent",
          "references": [],
          "reference": 10,
          "serviceDate": "2020-07-27T00:00:00",
          "resourceType": "Observation",
          "_id": "123afieoaeife"
        }
      ]);
  }, []);

  return (
    <div className="homepage">
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        {/* Top-left user icon */}
        <div className="bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full">
          <span className="text-2xl font-semibold">AC</span>
        </div>
        {/* "SpotLight" text */}
        <h1 className="text-xl font-semibold">SpotLight</h1>
        {/* Top-right icons */}
        <div className="flex items-center space-x-4">
          <i className="fas fa-bell text-2xl"></i>
          <i className="fas fa-moon text-2xl"></i>
        </div>
      </header>
      <main className="p-4">
        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <Link
              key={index}
              to={`/card-details?resourceType=${card.resourceType}`}
              className="bg-gray-200 p-4 rounded-lg text-center transition transform hover:scale-105"
            >
              {/* <i className={card.icon}></i> */}
              <p className="font-semibold">{card.resourceType}</p>
            </Link>
          ))}
        </div>
        {/* Timeline Section */}
        <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Timeline Event</h2>
        {/* Year and Event Type Filters */}
        <div className="flex space-x-4">
            <select className="bg-gray-200 px-2 py-1 rounded">
            {/* Year filter options */}
            <option value="2023">2023</option>
            {/* Add more years */}
            </select>
            <select className="bg-gray-200 px-2 py-1 rounded">
            {/* Event Type filter options */}
            <option value="eventType1">Event Type 1</option>
            {/* Add more event types */}
            </select>
        </div>
        {/* Timeline Cards */}
        <div className="mt-4 space-y-4">
            {/* Map through timelineData and render timeline cards */}
            {timelineData.map((event, index) => (
            <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md"
            >
                {/* Calendar icon with year, month, date, and day */}
                <div className="flex flex-col items-center space-y-1">
                <span className="text-lg font-semibold">2023</span>
                <span>July</span>
                <span>12th Wed</span>
                </div>
                {/* Event Type */}
                <p className="text-blue-500">{event.eventType}</p>
                {/* Provider */}
                <p>Provider: {event.provider}</p>
                {/* Event Header */}
                <p className="font-semibold mt-2">{event.eventHeader}</p>
                {/* Status */}
                <div className="flex justify-between mt-2">
                <p>Status: {event.status}</p>
                <p>Type: {event.resourceType}</p>
                </div>
                {/* Expand Button */}
                {/* Implement expand functionality */}
            </div>
            ))}
        </div>
        </div>

      </main>
    </div>
  );
}

export default Homepage;
