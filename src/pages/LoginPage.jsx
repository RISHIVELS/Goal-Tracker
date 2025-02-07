import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
//import "./../App.css";
import "./../custom.css";

const supabase = createClient(
  "https://dgarmemdwvskezsaneaw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXJtZW1kd3Zza2V6c2FuZWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2OTUyMTgsImV4cCI6MjA1NDI3MTIxOH0.AWQFSjNv4lmumZ8_edCyXqiRfwJ8YlfsM3WLFHqQJP8"
);

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth event:", event);
        console.log("Session:", session);

        if (event === "SIGNED_IN" && session) {
          navigate("/success");
        }
      }
    );

    return () => {
      subscription?.data?.unsubscribe();
    };
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "100vh",
        padding: "10rem",
        overflow: "hidden",
      }}
    >
      <div className="login-container">
        <h1 className="login-title">Login Page</h1>
        <header className="login-header">
          <Auth
            supabaseClient={supabase}
            theme="dark"
            appearance={{ theme: ThemeSupa }}
            providers={["discord", "google"]}
          />
        </header>
      </div>
    </div>
  );
}

export default Login;
