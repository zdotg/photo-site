import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3 gap-y-3 w-full ">
          <h1 className="text-3xl text-center">Welcome to my photo gallery</h1>
        </div>
      </div>
    </div>
  )
}
