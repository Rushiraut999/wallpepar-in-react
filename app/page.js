"use client";
import react, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/card";
import Link from "next/link";
export default function Home() {
  // call api using axios
  const [number, setnumber] = useState(12);
  let [images, setimages] = useState([]);
  const getimages = async () => {
    const data = await axios.get(
      `https://picsum.photos/v2/list?$page=2&limit=${number}`
    );
    setimages(data.data);
  };
  const addnew = () => {
    const more = number + 8;
    setnumber(more);
    getimages();
  };

  console.log(images);
  useEffect(() => {
    getimages();
  }, []);

  return (
    <>
      <h1 class="wallpaper">wallpaper</h1>
      <div class="image">
        {images.map((item, index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Link className="seemore" href="" onClick={addnew}>
        see more
      </Link>
    </>
  );
}
