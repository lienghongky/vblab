import Feature from "../components/Feature"

export default function Course() {


    const colors = ["teal", "red","blue", "indigo", "purple", "pink", "orange", "yellow", "green", "gray"]
    const courses = [
        {
          "term": "2021 Fall",
          "courses": [
            {"id": "CP20330(061)", "name": "Data Structures / ESPA"},
            {"id": "CP20330(062)", "name": "Data Structures / ESPA"},
            {"id": "CE75839(001)", "name": "Advanced Computer Vision"}
          ]
        },
        {
          "term": "2021 Spring",
          "courses": [
            {"id": "CB35573-061", "name": "Engineering Linear Algebra"},
            {"id": "CP20337-060", "name": "Computer Algorithm / ESPA"}
          ]
        },
        {
          "term": "2020 Fall",
          "courses": [
            {"id": "CP20330(060)", "name": "Data Structure / ESPA"},
            {"id": "CP20332(059)", "name": "Computer Graphics"},
            {"id": "CE75839(001)", "name": "Advanced Computer Vision"}
          ]
        },
        {
          "term": "2020 Spring",
          "courses": [
            {"id": "CP15570(061)", "name": "Engineering Linear Algebra"},
            {"id": "CP20337(060)", "name": "Computer Algorithm"},
            {"id": "GL75049(001)", "name": "Smart Society & ICT Technology"}
          ]
        },
        {
          "term": "2019 Fall",
          "courses": [
            {"id": "CP20330(061)", "name": "Data Structure"},
            {"id": "CP20332(060)", "name": "Computer Graphics"},
            {"id": "EB74978(001)", "name": "Machine Learning for Visual Computing"},
            {"id": "GL75069(001)", "name": "Big Data Analysis"}
          ]
        },
        {
          "term": "2019 Spring",
          "courses": [
            {"id": "CP15570(061)", "name": "Engineering Linear Algebra"},
            {"id": "CP20337(060)", "name": "Computer Algorithm"},
            {"id": "GL75049(001)", "name": "Smart Society & ICT Technology"}
          ]
        },
        {
          "term": "2018 Fall",
          "courses": [
            {"id": "CP20330(062)", "name": "Data Structure"},
            {"id": "CP20332(059)", "name": "Computer Graphics"}
          ]
        },
        {
          "term": "2018 Spring",
          "courses": [
            {"id": "CP15570(060)", "name": "Engineering Linear Algebra"},
            {"id": "CP20337(060)", "name": "Computer Algorithm"},
            {"id": "EB70634(001)", "name": "Visual Computing"}
          ]
        },
        {
          "term": "2017 Fall",
          "courses": [
            {"id": "CP20330(062)", "name": "Data Structure"},
            {"id": "CP20332(060)", "name": "Computer Graphics"}
          ]
        },
        {
          "term": "2017 Spring",
          "courses": [
            {"id": "CP15570(060)", "name": "Engineering Linear Algebra"},
            {"id": "EI16482(005)", "name": "Introduction to Computer System"},
            {"id": "EB74117(001)", "name": "Computational Behavior Recognition"}
          ]
        },
        {
          "term": "2016 Fall",
          "courses": [
            {"id": "CP20330(062)", "name": "Data Structures"},
            {"id": "CP20332(060)", "name": "Computer Graphics"},
            {"id": "EB70634(001)", "name": "Topics in Visual Computing"}
          ]
        },
        {
          "term": "2016 Spring",
          "courses": [
            {"id": "EI16482(004)", "name": "Intro. to Computer System"},
            {"id": "CP15570(061)", "name": "Engineering Linear Algebra"}
          ]
        }
      ]
    const newCourses = [
        {
          "term": "2024 Fall",
          "id": "CP20330(061)",
          "name": "Data Structures / ESPA",
          "image":"https://assets.entrepreneur.com/content/3x2/2000/20180710204929-GettyImages-802824564.jpeg"
        },
        {
            "term": "2024 Fall",
            "id": "CP20330(061)",
            "name": "Visual Computing / ESPA",
            "image":"https://www.irishtimes.com/resizer/S-UJtnhBmtlqN-FwPpmtDb2FaGg=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/U5VYE7HAK2ZURURTKMUKSLQ7GI.jpg"
          },
          {
            "term": "2024 Fall",
            "id": "CP20330(061)",
            "name": "Vision Data / ESPA",
            "image":"https://media.sproutsocial.com/uploads/2022/05/tiktok-algorithm.jpg"
          },
          {
            "term": "2024 Fall",
            "id": "CP20330(061)",
            "name": "Smart system / ESPA",
            "image":"https://www.analytixlabs.co.in/blog/wp-content/uploads/2023/08/Guest_Post_100.png"
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
   <div className=" p-10 bg-white dark:bg-gray-900">
  
    <section className="py-20">
    <h2 className="drop-shadow-lg">
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
     <h3 className="drop-shadow-lg">We are committed to sharing our expertise through a series of courses and projects aimed at fostering deep understanding and practical skills:
     </h3>
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

      <section>
      <h2 className="drop-shadow-lg">
    ALL COURSES:<br/>
    </h2>
    <hr />

    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
    {
        courses.map((item, index) => (
            <div key={index}  className="flex group flex-col sm:flex-row sm:even:flex-row-reverse even:-translate-x-[0.125rem] odd:translate-x-[0.125rem]">
                <div className="w-full text-xs sm:text-lg sm:w-1/2  border-blue-300  sm:group-even:border-l-4 sm:group-odd:border-r-4  flex  items-center ">
                    <h2 className="px-10 pt-10 w-full group-even:text-left group-odd:text-right font-bold dark:text-white text-black">{item.term}</h2>
                </div>
                <div className="w-full sm:w-1/2">
                {
                    item.courses.map((course, index1) => (
                        <div key={index1} className={`mt-4 transform transition cursor-pointer hover:-translate-y-2 group-even:mr-10 group-odd:ml-10 relative flex items-center  bg-${colors[(index+index1)%colors.length]}-600 text-white rounded-2xl flex-col md:flex-row space-y-4 md:space-y-0`}>
                    

                        <div className="w-5 h-5 bg-blue-600 absolute group-even:-right-10 group-odd:-left-10 transform rounded-full z-10 mt-2 md:mt-0 group-even:translate-x-3 group-odd:-translate-x-3"></div>
        
                        
                        <div className="w-10 h-[1px] bg-blue-300 absolute group-even:-right-10 group-odd:-left-10 z-0"></div>
        
                        <div className="flex p-2">
                        <img
                            className="w-20 h-20 rounded-full object-cover"
                            alt="NextUI Fruit Image with Zoom"
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/algorithm-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-structure-distributed-documents-computer-science-pack-technology-icons-6634319.png?f=webp"
                            />
                        <div className="flex-auto px-2">
                            <h3 className="text-sm">{course.id}</h3>
                            <h3 className="text-md font-bold">{course.name}</h3>
                            <div className="flex justify-end">
                                <h3 className="text-sm px-1 rounded-full border-1">Classroom</h3>
                            </div>
                        </div>
                        </div>
                        {/* <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a> */}
                    </div>
                    ))
                }
                </div>
            </div>))
    }
        </div>
      </section>
   </div>
   </>
    )
}