import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "../leaderboard.css";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const supabaseUrl = "https://dgarmemdwvskezsaneaw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXJtZW1kd3Zza2V6c2FuZWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2OTUyMTgsImV4cCI6MjA1NDI3MTIxOH0.AWQFSjNv4lmumZ8_edCyXqiRfwJ8YlfsM3WLFHqQJP8";
const supabase = createClient(supabaseUrl, supabaseKey);

const Leaderboard = () => {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    fetchLeaderboard();
    const emailInterval = setInterval(() => sendEmailsToAllUsers(), 60000);
    return () => clearInterval(emailInterval);
  }, []);

  const fetchLeaderboard = async () => {
    const { data, error } = await supabase
      .from("leaderboard")
      .select("*")
      .order("points", { ascending: false });

    if (error) {
      console.log("Error fetching leaderboard:", error);
    } else {
      setLeaderboard(data);
    }
  };

  const sendEmailNotification = (toName, message) => {
    const templateParams = {
      to_name: toName,
      message: message,
    };

    emailjs
      .send(
        "service_ts16meq",
        "template_sg3l5je",
        templateParams,
        "M2PPg2CmcOWPoYuHB"
      )
      .then(
        (response) => {
          console.log(`Email successfully sent to ${toName}!`, response.status);
        },
        (err) => {
          console.log(`Failed to send email to ${toName}. Error: `, err);
        }
      );
  };

  const sendEmailsToAllUsers = () => {
    leaderboard.forEach((user, index) => {
      const rankEmoji =
        index === 0
          ? "🥇"
          : index === 1
          ? "🥈"
          : index === 2
          ? "🥉"
          : `${index + 1}`;
      const message = `Hello ${user.name}, you are currently ranked ${rankEmoji} with ${user.points} points. Keep competing and reach for the top! 🎮`;
      sendEmailNotification(user.name, message);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: existingUser, error: fetchError } = await supabase
      .from("leaderboard")
      .select("*")
      .eq("name", name)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.log("Error checking existing user:", fetchError);
      return;
    }

    if (existingUser) {
      const { error: updateError } = await supabase
        .from("leaderboard")
        .update({ points })
        .eq("name", name);

      if (updateError) {
        console.log("Error updating points:", updateError);
      }
    } else {
      const { error: insertError } = await supabase
        .from("leaderboard")
        .insert([{ name, points }]);

      if (insertError) {
        console.log("Error adding entry:", insertError);
      }
    }

    await fetchLeaderboard();

    const sortedLeaderboard = [...leaderboard].sort(
      (a, b) => b.points - a.points
    );
    const userIndex = sortedLeaderboard.findIndex((user) => user.name === name);

    const rankEmoji =
      userIndex === 0
        ? "🥇"
        : userIndex === 1
        ? "🥈"
        : userIndex === 2
        ? "🥉"
        : `${userIndex + 1}`;

    const message = `Hi ${name}, your points have been updated to ${points}. You are currently ranked ${rankEmoji}. Keep pushing forward to reach the top! 🎮`;
    sendEmailNotification(name, message);
  };

  return (
    <>
      <button
        className="button"
        onClick={() => {
          navigate("/main");
        }}
      >
        Go Back
      </button>

      <div>
        <h1 className="leaderboard-title">Leaderboard</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Name...."
            className="input"
            name="text"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="num"
            type="number"
            placeholder="Points"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />

          <button className="pushable" type="submit">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Add/Update</span>
          </button>
        </form>

        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th>Name</th>
              <th>Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {leaderboard.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.points}</td>
                {index === 0 ? (
                  <td>🥇</td>
                ) : index === 1 ? (
                  <td>🥈</td>
                ) : index === 2 ? (
                  <td>🥉</td>
                ) : (
                  <td>{index + 1}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
