"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function NotificationsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const response = await api.get("/join-requests/received");
      setRequests(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAccept = async (id: string) => {
    try {
      await api.patch(`/join-requests/${id}/accept`);
      fetchRequests();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await api.patch(`/join-requests/${id}/reject`);
      fetchRequests();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020B28] text-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020B28] text-white p-8">

      <h1 className="text-4xl font-bold text-blue-400">
        Join Requests
      </h1>

      <p className="text-slate-400 mt-2">
        {requests.length} pending requests
      </p>

      <div className="space-y-5 mt-8">

        {requests.map((request) => (

          <div
            key={request._id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
          >

            <h2 className="text-2xl font-semibold">
              {request.applicant.fullName}
            </h2>

            <p className="text-slate-400 mt-2">
              {request.applicant.email}
            </p>

            <p className="mt-4">
              Project :
              <span className="text-blue-400 ml-2">
                {request.project.title}
              </span>
            </p>

            <p className="mt-4 italic text-slate-300">
              "{request.message}"
            </p>

            {request.status === "Pending" ? (
  <div className="flex gap-4 mt-6">

    <button
      onClick={() => handleAccept(request._id)}
      className="flex-1 bg-green-600 rounded-xl py-2"
    >
      Accept
    </button>

    <button
      onClick={() => handleReject(request._id)}
      className="flex-1 bg-red-600 rounded-xl py-2"
    >
      Reject
    </button>

  </div>
) : (
  <div className="mt-6">
    <span className="px-4 py-2 rounded-xl bg-slate-700">
      {request.status}
    </span>
  </div>
)}

          </div>

        ))}

      </div>

    </main>
  );
}