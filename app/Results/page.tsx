export default function Results() {
  return (
    <div className="bg-white h-screen mt-24 flex flex-col px-4 sm:px-6 md:px-8">
      <h1 className="text-blue-900 mt-12 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
        Grand Entrance Exam Result
      </h1>

      <div className="mt-10 w-full max-w-md mx-auto">
        <label className="block text-gray-700 font-medium">Registration Number *</label>
        <input
          type="number"
          className="w-full mt-2 p-3 bg-gray-100 border border-black rounded"
          placeholder="Registration Number"
        />
      </div>

      <div className="mt-4 w-full max-w-md mx-auto">
        <label className="block text-gray-700 font-medium">CNIC or B-Form Number *</label>
        <input
          type="number"
          className="w-full mt-2 p-3 bg-gray-100 border border-black rounded"
          placeholder="CNIC or B-Form Number"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <button className="px-6 py-4 bg-blue-900 text-white text-md font-extrabold hover:translate-y-1">
          GET RESULT
        </button>
      </div>
    </div>
  );
}
