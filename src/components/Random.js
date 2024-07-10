import axios from "axios";
import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  //   const [gif, setGif] = useState(""s

  //   const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  //   const API_KEY = "eYwgaAjnTAfz4o9Px4sreQHJQdo1FvlU";

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const { data } = await axios.get(url);
  //     let imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  // console.log(output);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="flex flex-col w-1/2 bg-green-600  items-center mt-2 rounded-md border border-black">
      <h1 className="text-center text-xl font-bold mt-1 mb-1 underline uppercase">
        Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif" width="450" />}
      <button
        className="w-10/12 bg-white  rounded-md cursor-pointer py-2 mt-2 mb-2 "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
