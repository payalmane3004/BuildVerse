"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";

export default function ProjectRequests() {
  const params = useParams();
  const projectId = params.id as string;

  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const response = await api.get(
        `/join-requests/project/${projectId}`
      );

      setRequests(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load join requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020B28] flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }


const acceptRequest = async (requestId: string) => {
  try {
    await api.patch(`/join-requests/${requestId}/accept`);

    alert("Request Accepted");

    fetchRequests(); // refresh list
  } catch (error) {
    console.error(error);
    alert("Failed to accept request");
  }
};

const rejectRequest = async (requestId: string) => {
  try {
    await api.patch(`/join-requests/${requestId}/reject`);

    alert("Request Rejected");

    fetchRequests();
  } catch (error) {
    console.error(error);
    alert("Failed to reject request");
  }
};

  return (
    <main className="min-h-screen bg-[#020B28] text-white p-8">

      <h1 className="text-4xl font-bold text-blue-400">
        Join Requests
      </h1>

      <p className="text-slate-400 mt-2">
        Total Requests: {requests.length}
      </p>

      <div className="space-y-6 mt-8">

        {requests.length === 0 && (
          <div className="text-slate-400">
            No join requests yet.
          </div>
        )}

        {requests.map((request) => (
          <div
            key={request._id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
          >

            <h2 className="text-2xl font-semibold">
              {request.applicant.fullName}
            </h2>

            <p className="text-slate-400 mt-1">
              {request.applicant.email}
            </p>

            <p className="mt-4">
              <span className="font-semibold">
                Message:
              </span>{" "}
              {request.message}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Status:
              </span>{" "}
              {request.status}
            </p>

            <div className="flex gap-4 mt-6">
<button
  onClick={() => acceptRequest(request._id)}
  className="bg-green-600 px-4 py-2 rounded-xl"
>
  Accept
</button>

             <button
  onClick={() => rejectRequest(request._id)}
  className="bg-red-600 px-4 py-2 rounded-xl"
>
  Reject
</button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}