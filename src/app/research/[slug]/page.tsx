import Feature from "@/app/components/Feature";
import Link from "next/link";
const Page = ({ params: { slug } }) => {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-center">
          <div className="w-1/3 flex justify-center">
            <Feature
              className="w-64 shadow-2xl"
              data={{
                title: "Image enhancement",
                description:
                  "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image analysis. This process is a key step in the workflow of digital image processing.",
                image:
                  "https://img.freepik.com/free-vector/online-photography-courses-isometric-concept_52683-33743.jpg?t=st=1725264775~exp",
              }}
            />
          </div>
          <div className="w-2/3">
            <div className="">
              <h3 className="font-main font-bold text-sm drop-shadow-lg text-black dark:text-white">
                We are committed to sharing our expertise through a series of
                courses and projects aimed at fostering deep understanding and
                practical skills
              </h3>
              <p className="font-mono text-sm ">AUTHOR: Adam Smith</p>
              <p className="font-mono text-sm ">DATE: 2023-09-01</p>
              <div className="flex justify-end">
                <Link
                  className="font-mono font-bold text-sm text-blue-500"
                  href="#"
                >
                  VIEW PDF
                </Link>
              </div>

              <hr />
              <p className="font-mono text-xs py-10 text-black dark:text-white">
                + Intelligence System (2023, 2024)
                <br />
                + Computer Algorithms
                <br />
                + Data Structures
                <br />
                + Linear Algebra
                <br />
                + Deep Learning for Computer Vision (Graduate Course)
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <div className="w-full h-[90dvh] bg-gray-800 rounded-xl overflow-clip shadow-2xl">
            <div className="w-full h-10 bg-gradient-to-b from-slate-400  to-slate-300 flex justify-between items-center px-2 shadow-lg">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 rounded-full bg-red-600"> </div>
                <div className="w-4 h-4 rounded-full bg-yellow-600"> </div>
                <div className="w-4 h-4 rounded-full bg-green-600"> </div>
              </div>
              <div className="flex justify-center">
                <p className="font-mono text-xs font-bold text-black">
                  Firsh Detetection
                </p>
              </div>
              <div className="">
                <p className="font-mono text-xs font-bold text-black">
                  Loading...
                </p>
              </div>
            </div>
            <iframe
              className="w-full bg-gray-800"
              src="https://www.google.com"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
