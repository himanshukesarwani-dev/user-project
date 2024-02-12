import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";
import SearchBox from "./components/SearchBox";
import PaginationControl from "./components/PaginationControl";
import Navbar from "./components/Navbar";

function App() {
  const [originalUsers, setOriginalUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [urlImg, setUrlImg] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setUsers(result.results);
      setOriginalUsers(result.results);
      const totalItemsPerPage = 10;
      setTotalPages(Math.ceil(result.count / totalItemsPerPage));
      console.log(totalPages, currentPage);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getRandomProfilePic = async () => {
    const response = await fetch("https://picsum.photos/200/300");
    const imgURL = response.url;
    setUrlImg(imgURL);
  };

  useEffect(() => {
    fetchData(currentPage);
    getRandomProfilePic();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && !error && (
        <div>
          <Navbar />

          <SearchBox
            originalUsers={originalUsers}
            setUsers={setUsers}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />

          <PaginationControl
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
          <div className="user-card-container">
            {users.map((user) => (
              <UserCard key={user.name} user={user} urlImg={urlImg} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
