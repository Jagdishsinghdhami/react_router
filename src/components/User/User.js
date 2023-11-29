import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-white py-4 text-3xl text-center">
        This is user page. {userid}
      </div>
    </>
  );
};

export default User;
