import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTicketStore } from "../store/ticketstore";
import type { Ticket } from "../store/ticketstore";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const { tickets, addTicket, updateTicket, deleteTicket } = useTicketStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open" as "open" | "in-progress" | "closed",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "open" | "in-progress" | "closed">("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      toast.error("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedTicket: Ticket = {
        id: editId,
        title: form.title,
        description: form.description,
        status: form.status,
        date: new Date().toLocaleDateString(),
      };
      updateTicket(updatedTicket);
      toast.success("Ticket updated successfully");
      setEditId(null);
    } else {
      const newTicket: Ticket = {
        id: uuidv4(),
        title: form.title,
        description: form.description,
        status: form.status,
        date: new Date().toLocaleDateString(),
      };
      addTicket(newTicket);
      toast.success("Ticket added successfully");
    }

    setForm({ title: "", description: "", status: "open" });
  };

  const handleEdit = (ticket: Ticket) => {
    setEditId(ticket.id);
    setForm({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
    });
  };

  const handleDelete = (id: string) => {
    deleteTicket(id);
    toast.success("Ticket deleted");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const filteredTickets =
    filter === "all" ? tickets : tickets.filter((t) => t.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 border-green-400";
      case "in-progress":
        return "bg-amber-100 border-amber-400";
      case "closed":
        return "bg-gray-100 border-gray-400";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Ticket Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 shadow-md rounded-md mb-6 max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="Title"
          className="border w-full p-2 mb-3 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border w-full p-2 mb-3 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <select
          className="border w-full p-2 mb-3 rounded"
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value as "open" | "in-progress" | "closed",
            })
          }
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          {editId ? "Update Ticket" : "Add Ticket"}
        </button>
      </form>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-6">
        {(["all", "open", "in-progress", "closed"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded capitalize ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {f.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Ticket List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {filteredTickets.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">
            No tickets available
          </p>
        ) : (
          filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`p-4 rounded-md shadow-sm border ${getStatusColor(
                ticket.status
              )}`}
            >
              <h2 className="font-semibold text-lg">{ticket.title}</h2>
              <p className="text-gray-700">{ticket.description}</p>
              <p className="text-sm mt-2 font-medium capitalize">
                Status: {ticket.status.replace("-", " ")}
              </p>
              <p className="text-sm text-gray-500">Date: {ticket.date}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleEdit(ticket)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
