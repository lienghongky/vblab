'use client'
import {Image, Card, CardHeader, CardFooter,CardBody, Divider, Link} from "@nextui-org/react";
import Book from './book'
import ProfileCell  from "./ProfileCell";
const People = () => {
    return (
        <main className="w-full min-h-screen dark:bg-gray-900 bg-background flex flex-col items-center justify-center">
           
           <div className=" flex h-screen items-center justify-center">
            <div className="w-1/2">
              <Image
                      className="w-full overflow-clip object-cover border-1 border-white"
                      radius="none"
                      shadow='none'
                      src="https://i.pinimg.com/originals/f8/66/8e/f8668e5328cfb4938903406948383cf6.png"
                      alt="NextUI Album Cover"
                      />
            </div>
            <div className="w-1/2">
              <h1></h1>
            </div>
           </div>
           <div className="">

           <h1>Current members</h1>
          <div className="grid grid-flow-row-dense sm:grid-cols-3 grid-rows-3 py-10 gap-14">
          {
          [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
            <ProfileCell key={index} /> 
            ))
          }
          
          </div>
           <h1>sdflumini</h1>
           <div className=" grid grid-flow-row-dense sm:grid-cols-3 grid-rows-3 py-10 gap-4">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
                        <Book key={index}/>
                    ))
                }
            </div>
           </div>
        </main>
        
    )
}

export default People