"use client"
import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#__next'); // Set the root element for accessibility

const Scolarships = () => {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button
          className="bg-[#422e59d5] text-white fixed bottom-3 right-3 active:bg-[#422e59] font-bold uppercase tracking-wide text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          ScolarShips & Stephens
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-10"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold">
                      Apply for Scolarships & Staphens
                    </h3>
                    
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Applications are invited from regular students (Undergraduate and Graduate programs) of all disciplines of Governament Boys Degree College Danyore under “China-Pakistan Friendship  Ambassadorial Merit-cum-Need Scholarship”. Complete application forms in all respects must reach the Financial AID Office KIU w.e.f 25th September to 15th October 2023.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 absolute top-5 right-2 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
};

export default Scolarships;
