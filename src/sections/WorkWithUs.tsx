export default function WorkWithUs() {
  return (
    <section>
      <div className="relative h-[720px] bg-[url('/cozy-living-room.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="relative font-serif z-10 flex flex-col justify-between h-full text-white">
          <div className="flex flex-col gap-12 justify-center mb-14 items-center h-full">
            <h1 className="text-5xl md:text-7xl ">Work With Us</h1>
            <p className="max-w-2xl font-medium text-sm md:text-xl text-center p-5 md:p-0">
              With decades of experience in luxurious Tri Valley real estate,
              our team is here to ensure that your dreams are a reality. Let us
              guide you through your home buying journey, contact us today!
            </p>
            <button className="text-base md:text-xl rounded-md px-8 py-3 font-medium uppercase border-2 hover:bg-gray-50 hover:text-gray-800 cursor-pointer transition-colors duration-200 border-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
