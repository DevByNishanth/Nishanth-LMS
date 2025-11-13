import React, { useEffect, useRef } from "react";
import manImg from "../assets/man.svg";
const DetailViewCanvas = ({ setIsDetailCanvas }) => {
  // ref's
  const canvasRef = useRef(null);

  // useEffect's
  useEffect(() => {
    function handleOutsideClick(e) {
      if (canvasRef.current && !canvasRef.current.contains(e.target)) {
        setIsDetailCanvas(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-50"></div>
      <section
        ref={canvasRef}
        className="w-[45%] bg-white h-[100vh] z-[60] fixed right-0 top-0 shadow-xl transition-all duration-300 overflow-y-auto"
      >
        <div className="content-container mt-4 px-3 ">
          <div className="header flex gap-2">
            <div className="img-container w-[30%] h-[190px] rounded-lg ">
              <img
                src={manImg}
                className="h-[100%] w-[100%] object-cover rounded-lg"
              />
            </div>
            <div className="personal-details-container bg-gray-50 border border-gray-200 rounded-md p-2 h-[190px] w-[70%]">
              {/* <h1 className="font-medium">Personal Information</h1> */}
              <table className="text-[12px]">
                <tr>
                  <td className="text-gray-800 w-[100px] ">First Name</td>
                  <td className="text-gray-600 w-[200px]">Surya</td>
                </tr>
                <tr>
                  <td className="text-gray-800 w-[100px] pt-2">Last Name</td>
                  <td className="text-gray-600 w-[200px] pt-2">Chandran</td>
                </tr>
                <tr>
                  <td className="text-gray-800 w-[100px] pt-2">Email</td>
                  <td className="text-gray-600 w-[200px] overflow-hidden pt-2">
                    suryachandran@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 w-[100px] pt-2">
                    Qualification
                  </td>
                  <td className="text-gray-600 w-[200px] overflow-hidden pt-2">
                    M.Tech
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 w-[100px] pt-2">
                    Date of birth
                  </td>
                  <td className="text-gray-600 w-[200px] pt-2">
                    02 June, 1995
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 w-[100px] pt-2">Gender</td>
                  <td className="text-gray-600 w-[200px] pt-2">Male</td>
                </tr>
                <tr>
                  <td className="text-gray-800 w-[100px] pt-2">Phone</td>
                  <td className="text-gray-600 w-[200px] pt-2">1234567890</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="employe-details-container mt-4">
            <h1 className="font-medium text-lg text-[#333333]">
              Employee Details
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailViewCanvas;
