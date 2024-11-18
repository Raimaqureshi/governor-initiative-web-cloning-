export default function Form() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-blue-900 text-2xl font-extrabold mb-4 text-center mt-8">
        Student Course Registration Form
      </h1>
      <p className="mt-3 text-sm">Already applied? <span className="cursor-pointer text-sky-600 underline">Get Admit Card</span></p>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg sm:max-w-md space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Full Name *</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="Full Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Father's Full Name *</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="Father's Full Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email *</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">OTP *</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="OTP"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">CNIC or B-Form Number *</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="CNIC or B-Form Number"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">City</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="Karachi"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Date of Birth *</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="mm/dd/yyyy"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Gender *</label>
          <div className="flex justify-center space-x-10 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="gender" value="male" className="hidden peer" />
              <span className="w-5 h-5 border-2 rounded-full flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
              <span className="text-gray-700">Male</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="gender" value="female" className="hidden peer" />
              <span className="w-5 h-5 border-2 rounded-full flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Highest Qualification *</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border-2 focus:outline-none focus:border-blue-500 bg-gray-100 rounded"
            placeholder="Highest Qualification"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
