import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-3 text-center bg-dot-black/[0.10]">
      <div className="relative">
        <div className="rounded-md">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Not Found"
            className="rounded-md"
          />
        </div>
        <div className="absolute left-0 right-0 top-12 ">
          <p className="text-xl italic text-gray-700">
            <strong>Ops! </strong> Seems Like The page you are looking for
            doesn't exist <br /> ↯
          </p>
          <div className="text-md mt-1 flex justify-center text-white">
            <Link
              className="w-fit rounded-full bg-black/[0.5] px-2 py-1"
              to={"/"}
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
