export const Course = () => {
    return (
        <main className="w-full min-h-screen dark:bg-gray-900 bg-background flex flex-col items-center justify-center">

<div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
      <h1 className="text-3xl text-center font-bold text-blue-500">Courses</h1>

   {
   [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
        <div key={index}  className="flex group even:flex-row-reverse">
            <div className="w-1/2 group-even:border-l-4 group-odd:border-r-4 flex  items-center group-even:translate-x-2 group-odd:-translate-x-2">
                <h1 className="px-10 w-full group-even:text-left group-odd:text-right font-bold">2023</h1>
            </div>
            <div className="w-1/2">
            
            <div className="transform transition cursor-pointer hover:-translate-y-2 group-even:mr-10 group-odd:ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded flex-col md:flex-row space-y-4 md:space-y-0">
                

                <div className="w-5 h-5 bg-blue-600 absolute group-even:-right-10 group-odd:-left-10 transform rounded-full z-10 mt-2 md:mt-0"></div>

                
                <div className="w-10 h-1 bg-blue-300 absolute group-even:-right-10 group-odd:-left-10 z-0"></div>


                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                    <h3>Classroom</h3>
                </div>
                <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
            </div>
        </div>
        </div>
    ))
    }

    
    </div>
        </main>
    )
}


export default Course;