import React from "react";

const SearchBox = ({ searchTerm, originalUsers, setUsers, setSearchTerm }) => {
  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="Search Name"
        onChange={(event) => {
          const search = event.target.value.toLowerCase();
          setSearchTerm(search);

          if (search === "") {
            setUsers(originalUsers);
          } else {
            const filteredUsers = originalUsers.filter((user) =>
              user.name.toLowerCase().includes(search)
            );
            setUsers(filteredUsers);
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
