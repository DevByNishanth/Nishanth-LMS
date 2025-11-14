import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  // Auth
  const token = localStorage.getItem("LMSToken");
  console.log("token : ", token);

  useEffect(() => {
    if (!token || token == null) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <>
      <section>
        <Sidebar />
      </section>
    </>
  );
};

export default DashboardPage;
