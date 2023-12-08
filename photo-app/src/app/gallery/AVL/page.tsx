'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { listFiles } from "@/services/dropbox-api";

const AVLpage = () => {
  const [data, setData] = useState<string[]>([]); // Annotate as an array of strings

  useEffect(() => {
    // Fetch data on the client side after hydration
    listFiles(['/ZG/AVL'])
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return null; // You can render a loading indicator here
  }

  return (
    <div className="grid grid-cols-4 gap-4 gap-y-3 w-full text-center">
      {/* Display images from AVL */}
      {data.map((imageUrl, index) => (
         <Image
          key={index}
          src={imageUrl}
          loading="lazy"  
          width={200}
          height={200}
          alt={`Image ${index + 1}`}
          onError={(e) => console.error("Image load error:", e)}
          onLoad={() => console.log("Image loading complete")}
          />
      ))}
    </div>
  );
};

export default AVLpage;
