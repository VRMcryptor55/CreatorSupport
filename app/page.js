import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
      <div className="font-bold text-5xl flex gap-3 justify-center items-center"><span>CreatorSupport</span> <span><img width={80} src="/logo.gif" alt="/hands.gif" /></span></div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers . Start Now!
      </p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
      </div>
      <div className="bg-white h-1 opacity-10">sdf</div>
      <div className="text-white conatiner mx-auto my-16"> 
        <h2 className="text-3xl font-bold text-center my-10">Your fans can fund you</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 text-center">
            <img width={150} className="bg-purple-400 rounded-full p-2" src="laptop.avif" alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="item space-y-3 text-center">
            <img width={150} className="bg-purple-400 rounded-full p-2" src="laptop.avif" alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="item space-y-3 text-center">
            <img width={150} className="bg-purple-400 rounded-full p-2" src="laptop.avif" alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">sdf</div>

      <div className="text-white conatiner mx-auto py-16 flex flex-col items-center justify-center"> 
        <h2 className="text-3xl font-bold text-center my-10">Learn more About us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KHjHY3HqNDw?si=58EHRTdzXddaPftu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
