'use client'
import {Image, Card, CardHeader, CardFooter,CardBody, Divider, Link} from "@nextui-org/react";
import Book from './book'
import ProfileCell  from "./ProfileCell";
const People = () => {
    return (
        <div className="p-20">
           <section >
            <h2 className="drop-shadow-lg">
            OUR PROFESSOR:
            </h2>
            <hr />
            <div className="flex justify-center items-center">
            <div className=" flex py-36 items-center justify-center">
            <div className="w-1/2 flex justify-center">
              <div className="flex flex-col items-center justify-center transition duration-1000  hover:-translate-y-4">
              <div className="w-2 h-2 rounded-full bg-gray-600 dark:bg-white mx-1"></div>
                      <div className="w-1/4 h-1  bg-gray-600 dark:bg-white mt-1 "></div>
                      <div className="w-2/4 h-1 bg-gray-600 dark:bg-white mt-1"></div>
                      <div className="w-3/4 h-1 bg-gray-600 dark:bg-white mt-1 mb-1 "></div>
                <Image
                        className=" h-64 overflow-clip object-cover border-4 border-gray-600 dark:border-white"
                        radius="none"
                        shadow='none'
                        src="https://ai.pusan.ac.kr/sites/ai/atchmnfl/pnuProfl/2087/temp_1622167215445100.jpg"
                        alt="NextUI Album Cover"
                        />
                        <div className="w-3/4 h-1 bg-gray-600 dark:bg-white mt-1"></div>
                      <div className="w-2/4 h-1 bg-gray-600 dark:bg-white mt-1"></div>
                      <div className="w-1/4 h-1 bg-gray-600 dark:bg-white mt-1"></div>
                      <div className="flex justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-gray-600 dark:bg-white mx-1"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-600 dark:bg-white mx-1"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-600 dark:bg-white mx-1 "></div>
                      </div>
              </div>
            </div>
            <div className=" w-36"></div>
            <div className="w-1/2 flex flex-col items-center justify-start dark:text-white text-gray-950">
             <h1 className="font-bold text-3xl">DoHoon Lee, Ph.D</h1>
            <p className="font-mono whitespace-nowrap">Department of Computer Science and Engineering</p>
            <div className="pt-10 text-sm dark:text-white text-gray-950">
      
              <table>
                <tbody className="font-mono ">
                  <tr>
                    <td>TEL</td>
                    <td className="font-bold px-4 text-left">(051) 510-2491</td>
                  </tr>
                  <tr>
                    <td>FAX</td>
                    <td className="font-bold px-4 text-left">(051) 515-2208</td>
                  </tr>
                  <tr>
                    <td>EMAIL</td>
                    <td className="font-bold px-4 text-left">dohoon@pnu.edu</td>
                  </tr>
                  <tr>
                    <td>HOMEPAGE</td>
                    <td className="font-bold px-4 text-left"><a href="http://visbic.cse.pusan.ac.kr/~dhlee/">http://visbic.cse.pusan.ac.kr/~dhlee/</a></td>
                  </tr>
                  <tr>
                    <td>LOCATION</td>
                    <td className="font-bold px-4 text-left">313-312(Research Lab Bldg #313)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
           </div>
            </div>
           
          </section>
          
          <section className="py-20">
          <h2 className="drop-shadow-lg">
            OUR MEMBERS:
            </h2>
            <hr />
          <div className="flex items-center justify-center">
              <div className="grid grid-flow-row-dense sm:grid-cols-3 grid-rows-3 py-10 gap-14">
              {
              [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
                <ProfileCell key={index} /> 
                ))
              }
              
              </div>
           
           </div>
          </section>


          <section className="py-20">
          <h2 className="drop-shadow-lg">
            OUR ALUMINI:
            </h2>
            <hr />
           <div className="flex items-center justify-center">
           <div className=" grid grid-flow-row-dense sm:grid-cols-3 grid-rows-3 py-10 gap-8">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
                        <Book key={index}/>
                    ))
                }
            </div>
           </div>
            </section>
          
        </div>
        
    )
}

export default People