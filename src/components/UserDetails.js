import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDetails() {
  const [topics, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://signupbackend-env.eba-4jmp2pfv.eu-north-1.elasticbeanstalk.com/topics")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h3>Registered Users</h3>
      {topics.map((topic) => (
        <div key={topic.id} className="user-card">
          <p><strong>Name:</strong> {topic.name}</p>
          <p><strong>Email:</strong> {topic.email}</p>
          <p><strong>Password:</strong> {topic.password}</p>
        </div>
      ))}
    </div>
  );
}

export default UserDetails;