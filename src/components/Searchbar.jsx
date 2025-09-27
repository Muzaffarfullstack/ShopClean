import { Link, useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

function Searchbar({ addtoCart }) {
  const location = useLocation();

  const query = location.state?.query || "";
  const { data } = useFetch("/data/db.json");

  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    if (!data) return; // ✅ data bo‘lmasa xatolik chiqmasin
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, data]);

  if (!query) return <p>No search query provided</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="wrapper search-container">
      <div className="mt-4">
        <Link
          className="inline-flex relative left-1  search-btn-back hover:bg-gray-200 hover:text-blue-500 transition- cursor-pointer rounded"
          to="/"
        >
          <FaArrowLeft className="relative right-2 top-0.5 hover:text-blue-500" />
          Back to Home
        </Link>

        <div className="search-title">
          <h1 className="text-3xl font-bold">Search results for "{query}"</h1>
          <p className="text-[#4b5563]">
            {results.length >= 2
              ? `${results.length} products`
              : `${results.length} product`}{" "}
            {""}
            found
          </p>
        </div>
        {results.length > 0 ? (
          <ul className="h-[400px] flex flex-wrap line-clamp-3 gap-20 search-result">
            {results.map((item) => (
              <li
                key={item.id}
                className="shadow-lg border border-gray-200 rounded-xl z-10 h-[384px] w-[308px] cursor-pointer transform scale-100 hover:scale-102 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[308px] h-[66%] rounded-l-xl rounded-r-xl"
                />
                <div className="info-container w-[276px] ">
                  <h2 className="search-title">{item.title}</h2>
                  <div className="holder flex justify-between">
                    <p className="font-bold">${item.price}</p>
                    <small className="flex text-[#6b7280] relative left-2">
                      <FaStar className="relative right-2 top-0.5" />{" "}
                      {item.rating}
                    </small>
                  </div>
                  <button className="flex border-0 border-gray-500 btn w-[110%] justify-center relative rounded-md cursor-pointer bg-blue-600 text-neutral-50 font-medium">
                    <GrCart className="relative right-2 top-0.5" /> Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
