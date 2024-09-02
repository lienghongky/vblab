import Feature from "./components/Feature";

export default function Home() {
  const features = [{
    title: "Image enhancement",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/image-3d-icon-download-in-png-blend-fbx-gltf-file-formats--photo-picture-landscape-thumbnail-user-interface-pack-icons-4996992.png?f=webp",
    description: "Image enhancement is the process of adjusting digital images so that the results are mstep in the workflow of digital image processing.",
  },
  {
    title: "Reidentification",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/image-3d-icon-download-in-png-blend-fbx-gltf-file-formats--photo-picture-landscape-thumbnail-user-interface-pack-icons-4996992.png?f=webp",
    description: "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image ge processing.",
  },
  {
    title: "Generative AI",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/image-3d-icon-download-in-png-blend-fbx-gltf-file-formats--photo-picture-landscape-thumbnail-user-interface-pack-icons-4996992.png?f=webp",
    description: "Image enhancement is the process of adjusting digital images so that the results are more suitable for display or further image analysis. This process ise processing.",
  },
  {
    title: "Segmentation/Detection", 
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/image-3d-icon-download-in-png-blend-fbx-gltf-file-formats--photo-picture-landscape-thumbnail-user-interface-pack-icons-4996992.png?f=webp",
    description: "Image enhancement is the process of adjusting digital images so that the ",
  }
]

const PROJECT = [{
  title: "Linc 3.0 CCTV Image enhancement",
  image: "https://static.vecteezy.com/system/resources/previews/022/187/193/original/cctv-camera-3d-icon-illustration-png.png",
  description: "2020-Now",
},
{
  title: "AI Center Reidentification",
  image: "https://static.vecteezy.com/system/resources/previews/010/851/581/non_2x/3d-illustration-magnifying-glass-and-usability-audit-png.png",
  description: "2020-Now",
},

]

const COURSES = [{
  title: "Data Structure",
  courseCode: "CSE 220",
  image: "https://cdn3d.iconscout.com/3d/premium/thumb/algorithm-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-structure-distributed-documents-computer-science-pack-technology-icons-6634319.png?f=webp",
  description: "CSE 59 \n2024 Fall Semester",
},
{
  title: "Inteligent System",
  courseCode: "CSE 220",
  image: "https://static.vecteezy.com/system/resources/previews/029/887/651/original/3d-drone-icon-png.png",
  description: "CSE 60 \n2024 Fall Semester",
  
},]

return (
   <>
   <div className="p-10 bg-white dark:bg-gray-900">
    <section >
    <h2 className="drop-shadow-lg text-black dark:text-white">
    Research Area:<br/>
    Computer Vision & Biomedical Informatics/Healthcare
    </h2>
    <hr />
    <div className="flex items-center justify-center space-x-4 py-20">
      {
        features.map((item, index) => (
          <Feature key={index} className="w-64"  data={item}></Feature>
        ))
      }
    </div>
    </section>
    <section className="py-20">
    <h2 className="drop-shadow-lg text-black dark:text-white">
    COURSES:<br/>
    </h2>
    <hr />
    <div className="flex items-center justify-center py-20 divide-x-1">
      <div className="w-1/2 flex justify-center items-center space-x-2">
      {
        COURSES.map((item, index) => (
          <Feature key={index} className="w-64 bg-gradient-to-b from-teal-500 to-blue-500"  data={item}></Feature>
        ))
      }
      </div>
      <div className="w-1/2 flex justify-center px-10">
     <div className="">
     <p className="font-mono text-center font-bold text-sm drop-shadow-lg text-black dark:text-white">
      We are committed to sharing our expertise through a series of courses and projects aimed at fostering deep understanding and practical skills:
     </p>
     <p className="font-mono text-xs py-10 text-black dark:text-white">
      + Intelligence System (2023, 2024)<br/>
      + Computer Algorithms<br/>
      + Data Structures<br/>
      + Linear Algebra<br/>
      + Deep Learning for Computer Vision (Graduate Course)<br/>
     </p>
     </div>
      </div>
    </div>
    </section>

    <section className="py-20">
    <h2 className="drop-shadow-lg text-black dark:text-white">
    ONGOING PROJECT:<br/>
    </h2>
    <hr />
    <div className="flex items-center justify-center py-20">
      <div className="grid grid-cols-2 gap-4">
      {
        PROJECT.map((item, index) => (
          <Feature key={index} className="bg-gradient-to-b from-pink-500 to-blue-500"  data={item}></Feature>
        ))
      }
      </div>
    </div>
    </section>

    <section className="py-20">
    <p className="font-mono text-center font-bold text-sm drop-shadow-lg text-black dark:text-white">
    Join us in our mission to advance healthcare through innovative research and education. Explore our courses, engage in groundbreaking projects, and become a part of the future of medical technology.
    </p>
    </section>

   </div>
   </>
  );
}
