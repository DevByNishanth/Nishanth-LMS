import React from "react";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/HeaderComponent";
import HodSubjectDetailsComponent from "../components/HodSubjectDetailsComponent";
const HodSubjectmanagementpage = () => {
  const dept = "CSE";
  return (
    <>
      <section className="w-[100%] h-[100vh] flex">
        <div className="container-1 w-[20%] h-[100%]">
          <Sidebar />
        </div>
        <div className="container-2 w-[80%] h-[100%]">
          <HeaderComponent
            title={"Subject Management"}
            secondColor="text-blue-700"
            second={dept}
          />
          {/* --------------- hod subject details and faculty allocation table -----------  */}
          <div className="mx-6 ">
            <HodSubjectDetailsComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default HodSubjectmanagementpage;
