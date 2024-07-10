import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  //   const API_KEY = "eYwgaAjnTAfz4o9Px4sreQHJQdo1FvlU";

  //   async function fetchData() {
  //     setLoading(true);
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  function clickHandler() {
    fetchData(tag);
  }

  //   function changeHandler(event) {
  //     setTag(event.target.value);
  //   }

  return (
    <div className="flex flex-col w-1/2 bg-blue-600  items-center mt-2 rounded-md border border-black">
      <h1 className="text-center text-xl font-bold mt-1 mb-1 underline uppercase">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <input
        type="text"
        value={tag}
        // onChange={changeHandler}
        onChange={(event) => setTag(event.target.value)}
        className="w-10/12 bg-white  rounded-md cursor-pointer py-2 mt-2 text-center"
      />

      <button
        className="w-10/12 bg-white  rounded-md cursor-pointer py-2 mt-2 mb-2 "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
