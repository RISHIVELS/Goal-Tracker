import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const supabase = createClient(
  "https://dgarmemdwvskezsaneaw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXJtZW1kd3Zza2V6c2FuZWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2OTUyMTgsImV4cCI6MjA1NDI3MTIxOH0.AWQFSjNv4lmumZ8_edCyXqiRfwJ8YlfsM3WLFHqQJP8"
);
function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
          console.log(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }
  return (
    <div>
      {Object.keys(user).length > 0 ? (
        navigate("/main")
      ) : (
        <>
          <h1>User is not logged in </h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Goback home!
          </button>
        </>
      )}
    </div>
  );
}

export default Success;
