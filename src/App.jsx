import React from "react";
import TitanicPie from "./components/TitanicPie";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import FacultyManagementPage from "./pages/FacultyManagementPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SemesterRegistrationPage from "./pages/SemesterRegistrationPage";
import AddSubjectPage from "./pages/AddSubjectPage";

const App = () => {
  return (
    <>
      {/* <TitanicPie /> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/dashboard/facultyManagement"
          element={<FacultyManagementPage />}
        />
        <Route
          path="/dashboard/semesterRegistration"
          element={<SemesterRegistrationPage />}
        />
        <Route
          path="/dashboard/semesterRegistration/addSubject"
          element={<AddSubjectPage />}
        />
      </Routes>
    </>
  );
};

export default App;
