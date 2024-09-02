
import SearchBar from "./SearchBar";
import Feature from "../components/Feature";

const research = (props) => {

  const features = [{
    title: "Image enhancement",
    image: "https://img.freepik.com/free-vector/online-photography-courses-isometric-concept_52683-33743.jpg?t=st=1725264775~exp=1725268375~hmac=b11f514fd968a377cda2feb8a4ca55800a94f85e8ba69a738dae548a216b2a82&w=1480",
    description: "Image enhancement is the process of adjusting digital images so that the results are mstep in the workflow of digital image processing.",
  },
  {
    title: "Reidentification",
    image: "https://img.freepik.com/free-vector/laptop-with-personal-data-being-watched-isometric-concept-white_1284-64136.jpg?t=st=1725264996~exp=1725268596~hmac=8b1c26b4bf51b61f5bef6421a2a8cfe1ad719a4f66b3ae16e0d60f8674d6044d&w=1480",
    description: "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image ge processing.",
  },
  {
    title: "Generative AI",
    image: "https://img.freepik.com/free-vector/realistic-3d-shapes-floating-background_52683-60310.jpg?t=st=1725265037~exp=1725268637~hmac=f1448d7121493cd72e9fd2e4ec51e3e440c460c30e9eece3c9beee7408d677b8&w=1480",
    description: "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image analysis. This process ise processing.",
  },
  {
    title: "Segmentation/Detection", 
    image: "https://img.freepik.com/premium-vector/vector-bitcoin-creation-process-search-bitcoin-flat-isometric-alternative-crypto-currency_716020-10.jpg?w=1800",
    description: "Image enhancement is the process of adjusting digital images so that the ",
  }
]

const catgeories = [
  {
    title: "Image enhancement",
    image: "https://img.freepik.com/free-vector/online-photography-courses-isometric-concept_52683-33743.jpg?t=st=1725264775~exp=1725268375~hmac=b11f514fd968a377cda2feb8a4ca55800a94f85e8ba69a738dae548a216b2a82&w=1480",
    description: "Image enhancement is the process of adjusting digital images so that the results are mstep in the workflow of digital image processing.",
  },
  {
    title: "Reidentification",
    image: "https://img.freepik.com/free-vector/laptop-with-personal-data-being-watched-isometric-concept-white_1284-64136.jpg?t=st=1725264996~exp=1725268596~hmac=8b1c26b4bf51b61f5bef6421a2a8cfe1ad719a4f66b3ae16e0d60f8674d6044d&w=1480",
    description: "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image ge processing.",
  },
  {
    title: "Generative AI",
    image: "https://img.freepik.com/free-vector/realistic-3d-shapes-floating-background_52683-60310.jpg?t=st=1725265037~exp=1725268637~hmac=f1448d7121493cd72e9fd2e4ec51e3e440c460c30e9eece3c9beee7408d677b8&w=1480",
    description: "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image analysis. This process ise processing.",
  },
  {
    title: "Segmentation/Detection", 
    image: "https://img.freepik.com/premium-vector/vector-bitcoin-creation-process-search-bitcoin-flat-isometric-alternative-crypto-currency_716020-10.jpg?w=1800",
    description: "Image enhancement is the process of adjusting digital images so that the ",
  }
]
  return (
    <div className="w-full p-10  bg-white dark:bg-gray-900">
      
      <div className="flex flex-col justify-center py-20">
      <SearchBar data={{ filter: catgeories }} />
      </div>
      <section>
      <h2 className="drop-shadow-lg text-black dark:text-white">
    ONGOING RESEARCHS:
    </h2>
    <hr /> 

    <div className="w-full flex flex-wrap items-center justify-center py-20">
      {
        Array.from({ length: 4 }, () => features).flat().map((item, index) => (
          <div className="p-2 transform transition duration-100 hover:scale-105">
            <Feature key={index} className="w-64 from-pink-600"  data={item}></Feature>
          </div>
        ))
      }
    </div>
      </section>
      <section className="w-full">
    <h2 className="drop-shadow-lg text-black dark:text-white">
    RESEARCHS:
    </h2>
    <hr />
    <div className="w-full flex items-center justify-center space-x-4 py-20">
      {
        features.map((item, index) => (
          <Feature key={index} className="w-64"  data={item}></Feature>
        ))
      }
    </div>
    </section>
    </div>
  );
};

export default research;
