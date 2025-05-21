import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <div className="grid grid-cols-12 bg-pure-black lg:h-[106px] items-center px-24">
      <div className="col-span-3 border-r-[1px] border-gray-700">
        <h2 className="font-bold text-3xl">
          Daryl <span className="gradient-text">Smith</span>
        </h2>
        <p className="text-lg text-pure-off-white">UI/UX designer</p>
      </div>
      <div className="col-span-9 flex justify-between items-center px-10">
        <Link href="/" className="flex gap-x-3 items-center">
          <div className="gradient-bg size-7 rounded flex justify-center items-center">
            <FontAwesomeIcon icon={faHome} width={24} height={24} />
          </div>
          <span className="text-2xl font-bold">Home</span>
        </Link>
        {/* talk to me button */}
        <button className="border-2 border-primary text-primary rounded-full px-6 py-2 hover:bg-primary hover:text-pure-black transition duration-300 ease-in-out">
          Talk to me
        </button>
      </div>
    </div>
  );
};

export default Header;
