import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      
      <div className="min-h-1/2 bg-gray-200">
        <main className="container mx-auto px-4 flex flex-col md:flex-row md:items-center py-10">
    
          <div className="bg-gray-200 md:w-1/2 space-y-4 text-center mt-24 md:text-left">
            <h1 className="text-5xl md:text-5xl font-extrabold text-blue-900">Governor Sindh</h1>
            <h2 className="text-2xl md:text-5xl sm:text-4xl text-blue-900 mt-4">Kamran Khan Tessori</h2>
            <h2 className="text-xl md:text-4xl sm:text-4xl font-extrabold text-sky-400 p-4">
              Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
            </h2>
            <h2 className="text-sky-700 text-base md:text-2xl sm:text-2xl font-extrabold">Earn up to $5,000/month</h2>
            <p className="text-sky-700 text-sm md:text-2xl sm:text-2xl font-extrabold">Now admissions are open in Hyderabad</p>
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
              <button className="bg-blue-900 text-white py-3 px-10 md:px-20 rounded-lg font-semibold hover:bg-blue-800 mt-4 md:mt-0">
                APPLY NOW
              </button>
              <p className="text-blue-900 mt-2 md:mt-0 text-center md:text-right">
                <span className="text-2xl md:text-3xl font-extrabold">562,143</span>
                <br />
                <span className="font-light text-sm md:text-base">Accepted Applications</span>
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="/pictures/side.png"
              alt="pic"
              width={1200}
              height={700}
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </main>
      </div>

      <div className="mt-16 flex flex-col items-center px-4 bg-white">
        <h1 className="font-extrabold text-blue-950 text-center text-2xl md:text-3xl max-w-4xl">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="text-base md:text-xl mt-6 text-center max-w-4xl leading-relaxed">
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing  infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
      </div>
<hr className='mt-8 border-gray-300' />
      <div className="text-center mt-16 px-4 bg-white">
        <h1 className="font-extrabold text-blue-950 text-2xl md:text-4xl max-w-4xl text-left ml-2">
          Core Courses Sequence
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              src: "https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg",
              title: "Programming Fundamentals",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg",
              title: "Web 2.0 using NextJS",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg",
              title: "Earn as You Learn",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={course.src}
                alt={course.title}
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm md:text-xl font-bold text-gray-800">{course.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16 px-4 bg-white">
        <h1 className="font-extrabold text-blue-950 text-2xl md:text-4xl text-left ml-3">
          Advanced Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-6">
          {[
            {
              src: "https://www.governorsindh.com/_next/static/media/AI.39397d24.jpg",
              title: "Artificial Intelligence",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/metaverse.06eccb60.jpg",
              title: "Web 3 and Metaverse",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/cloudComputing.7260492c.jpg",
              title: "Cloud-Native Computing",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/iot.16f7b003.jpg",
              title: "Ambient Computing and IoT",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg",
              title: "Genomics and Bioinformatics",
            },
            {
              src: "https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg",
              title: "Network Programmability and Automation",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={course.src}
                alt={course.title}
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm md:text-xl font-bold text-gray-800">{course.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
