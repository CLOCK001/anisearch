import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, loading] = useFetch(
    `https://api.jikan.moe/v4/top/anime?page=${pageNumber}`
  );
  console.log(data);

  return (
    <div>
      <NavBar />
      <div>{loading ? <Loading /> : <Grid data={data} />}</div>
      <div className="m-6 flex justify-around">
        {pageNumber == 1 ? (
          ""
        ) : (
          <Button
            buttonLable={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            }
            buttonFunc={() => {
              setPageNumber((prevPage) => prevPage - 1);
            }}
          />
        )}
        <h1 className="text-black text-lg">{pageNumber}</h1>
        <Button
          buttonLable={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          }
          buttonFunc={() => {
            setPageNumber((prevPage) => prevPage + 1);
          }}
        />
      </div>
    </div>
  );
}

export default App;
