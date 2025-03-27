import React, { useState } from "react";

interface Reservation {
  id: string;
  courtName: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
}

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reservations] = useState<Reservation[]>([
    {
      id: "1",
      courtName: "Central Park Courts",
      date: "2024-03-28",
      time: "14:00",
      status: "confirmed",
    },
    {
      id: "2",
      courtName: "Riverside Sports Complex",
      date: "2024-03-30",
      time: "16:00",
      status: "pending",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                PickleBall
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Profile
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Find Nearby Courts
            </h2>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search for courts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Reservations Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Reservations
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {reservation.courtName}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        reservation.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : reservation.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {reservation.status.charAt(0).toUpperCase() +
                        reservation.status.slice(1)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Date:</span>{" "}
                      {reservation.date}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Time:</span>{" "}
                      {reservation.time}
                    </p>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                      View Details
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition duration-200">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
