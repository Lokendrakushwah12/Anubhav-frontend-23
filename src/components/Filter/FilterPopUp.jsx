import React from "react";
import Filter from "./Filter";
import { motion } from "framer-motion";

const FilterPopUp = ({ closeFilterPopUp, company }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("fixed")) {
      closeFilterPopUp();
    }
  };

  return (
    <>
      <div
        onClick={(e) => {
          handleClose(e);
        }}
        className="fixed -top-[280px] inset-0 bg-white bg-opacity-70 z-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 100 }}
          transition={{ duration: 0.15 }}
        >
          <div
            onClick={(e) => {
              handleClose(e);
            }}
            className="overlay flex flex-col w-80 gap-2 md:block bg-white border p-2 px-4 rounded-xl shadow-lg shadow-[rgba(0,0,0,0.1)] overflow-y-auto"
          >
            <Filter closeFilterPopUp={closeFilterPopUp} company={company} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FilterPopUp;
