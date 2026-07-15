import "./Admin.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);

      alert("Message Deleted Successfully");

      fetchMessages();
    } catch (error) {
      console.log(error);
      alert("Failed to delete message.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Portfolio Admin Dashboard</h1>

      <div className="dashboard-card">
        <h2>Contact Messages</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="6">No Messages Found</td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.subject}</td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.createdAt).toLocaleDateString()}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteMessage(msg._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;