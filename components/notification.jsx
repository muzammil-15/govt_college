"use client";
import React, { useEffect, useState } from "react";
import { notifications } from "@/utils/utils";
import { FaBell } from "react-icons/fa";

// import Modal from 'react-modal';

// Modal.setAppElement('#__next'); // Set the root element for accessibility

const Notification = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="bg-gray-200 py-10 px-1 fixed bottom-[45%] right-0 rounded-l-[70%]">
        <button
          className=" text-[#422e59d5] font-bold uppercase tracking-wide text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <FaBell
            style={{ color: "#422e59", fontSize: "30px", cursor: "pointer" }}
          />
        </button>
        <span className="relative top-[-20px] right-2 text-[12px] font-bold  text-[#422e59d5]">
          {notifications.length}
        </span>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-start my-3 flex overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-3 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Notifications</h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {notifications.map((notification) => (
                    <>
                      <div
                        key={notification.id}
                        className="mb-4 flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-lg font-semibold">
                            {notification.title}
                          </h4>
                          <p className="text-gray-600">
                            {notification.message}
                          </p>
                        </div>
                        <p className="text-sm text-gray-400">
                          {notification.date}
                        </p>
                      </div>
                      <hr className="my-2 border-gray-300" />{" "}
                      {/* Horizontal line */}
                    </>
                  ))}
                </div>
                {/*footer*/}
                
                  <button
                    className="text-red-500 absolute top-5 right-2 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Notification;
