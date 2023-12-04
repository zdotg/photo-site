import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 gap-y-3 w-full text-center">
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
          <Image src="/images/garage.jpeg" width={300} height={300} alt="" />
        </div>
      </div>
    </div>
  )
}
