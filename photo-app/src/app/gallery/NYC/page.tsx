'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { listFiles } from "@/services/dropbox-api";
import Loading from "../loading";

const NYCpage = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    listFiles(["/ZG/NYC/NYC-portfolio"])
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading images.</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 gap-y-3 w-full text-center">
      {data.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          priority={false}
          loading="lazy"  
          width={200}
          height={200}
          alt={`Image ${index + 1}`}
          onError={(e) => console.error("Image load error:", imageUrl,e)}
          onLoad={() => console.log("Image loaded", imageUrl)}
        />
      ))}
    </div>
  );
};

export default NYCpage;
