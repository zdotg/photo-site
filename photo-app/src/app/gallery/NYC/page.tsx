'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAlbumImages } from '@/services/Imgur-api'; 
import Loading from '../loading';

const NYCpage = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getAlbumImages('0SW5APn') // Replace with the actual Imgur album hash
      .then((images) => {
        setData(images);
        setLoading(false);
      })
      .catch((error: Error) => {
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
          loading="lazy"
          width={200}
          height={200}
          alt={`NYC Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NYCpage;
