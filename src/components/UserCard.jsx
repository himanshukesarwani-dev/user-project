import React from "react";

function UserCard({ user, urlImg }) {
  return (
    <>
      <div
        className="user-card"
        style={{ backgroundColor: `${user?.hair_color}` }}
        key={user?.name}
      >
        <img src={urlImg} />
        <h1>{user?.name}</h1>

        <p>
          <strong>Hair Color: </strong>
          {user?.hair_color}
        </p>
        <p>
          <strong>Skin Color: </strong> {user?.skin_color}
        </p>
        <p>
          <strong>Gender: </strong> {user?.gender}
        </p>
        <p>
          <strong>Vehicle Count: </strong>
          {user?.vehicles.length}
        </p>
      </div>
    </>
  );
}

export default UserCard;
