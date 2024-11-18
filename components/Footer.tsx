import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:text-left">
        
        <div>
          <h3 className="font-extrabold text-xl mt-4 mb-6">Core Courses</h3>
          <ul className="space-y-3 text-sm cursor-pointer">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-extrabold text-xl mb-6 mt-6">Advanced Courses</h3>
          <ul className="space-y-3 text-sm cursor-pointer">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-xl mb-3">Social Links</h3>
          <div className="flex space-x-4 text-xl justify-center sm:justify-start">
            <a href="https://www.facebook.com/search/top?q=kamran%20tessori"
              target="_blank"
              rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@KamranTessorikk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800">
              <FaYoutube />
            </a>
            <a href="https://x.com/KamranTessoriPk?t=56TDQcydKd2hThzjGoS-pA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/kamrantessoripk/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@KamranTessoriPk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700">
              <FaTiktok />
            </a>
          </div>
          <div className="mt-4 text-blue-600 text-center sm:text-left">
            <a href="mailto:education@governorsindh.com" className="underline">
              education@governorsindh.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
