import React from "react";

const UserStatus = ({ email }: { email: string }) => {
  return (
    <div>
      {email ? <h1 className="text-5xl">Welcome {email} </h1> : "Sign Up"}
    </div>
  );
};

export default UserStatus;
