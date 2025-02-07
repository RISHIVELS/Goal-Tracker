import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "../leaderboard.css";

const supabaseUrl = "https://dgarmemdwvskezsaneaw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXJtZW1kd3Zza2V6c2FuZWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2OTUyMTgsImV4cCI6MjA1NDI3MTIxOH0.AWQFSjNv4lmumZ8_edCyXqiRfwJ8YlfsM3WLFHqQJP8";
const supabase = createClient(supabaseUrl, supabaseKey);

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    const { data, error } = await supabase
      .from("leaderboard")
      .select("*")
      .order("points", { ascending: false });

    if (error) console.log("Error fetching leaderboard:", error);
    else setLeaderboard(data);
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

      if (updateError) console.log("Error updating points:", updateError);
    } else {
      const { error: insertError } = await supabase
        .from("leaderboard")
        .insert([{ name, points }]);

      if (insertError) console.log("Error adding entry:", insertError);
    }

    fetchLeaderboard();
  };

  return (
    <>
      <button class="button">
        {" "}
        <a href="/main">GO Back</a>
      </button>

      <div>
        <h1 className="leaderboard-title">Leaderboard</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Name...."
            class="input"
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

          <button class="pushable" type="submit">
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">Add/Update </span>
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
