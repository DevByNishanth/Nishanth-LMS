import React from "react";
import TitanicPie from "./components/TitanicPie";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import FacultyManagementPage from "./pages/FacultyManagementPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SemesterRegistrationPage from "./pages/SemesterRegistrationPage";
import AddSubjectPage from "./pages/AddSubjectPage";
import HodSubjectmanagementpage from "./pages/HodSubjectmanagementpage";
import ProtectedRoute from "./components/ProtectedRoute";
import TestingComponent from "./components/TestingComponent";
import StudentManagement from "./pages/StudentManagement";
import SectionManagementPage from "./pages/SectionManagementPage";

const App = () => {
  return (
    <>
      {/* <TitanicPie /> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/facultyManagement"
          element={
            <ProtectedRoute>
              <FacultyManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/semesterRegistration"
          element={
            <ProtectedRoute>
              <SemesterRegistrationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/semesterRegistration/addSubject"
          element={
            <ProtectedRoute>
              <AddSubjectPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/hod_subjectmanagement"
          element={
            <ProtectedRoute>
              <HodSubjectmanagementpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/subjectManagement"
          element={
            <ProtectedRoute>
              <HodSubjectmanagementpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/studentManagement"
          element={
            <ProtectedRoute>
              <StudentManagement/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/sectionManagement"
          element={
            <ProtectedRoute>
              <SectionManagementPage/>
            </ProtectedRoute>
          }
        />
        {/* <Route path="/testing" element={<TestingComponent />} /> */}
      </Routes>
    </>
  );
};

export default App;
