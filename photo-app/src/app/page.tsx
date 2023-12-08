import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3 gap-y-3 w-full ">
          <Image src="/images/jan2020-14.jpg" width={400} height={400} alt="" />
          <Image src="/images/jan2020-15.jpg" width={400} height={400} alt="" />
          <Image src="/images/jan2020-16.jpg" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  )
}
