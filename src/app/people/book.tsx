'use client'
import {Image, Card, CardHeader, CardFooter,CardBody, Divider, Link} from "@nextui-org/react";
import { EmailIcon,FacebookIcon, TwitterIcon,GithubIcon } from '../components/Icons';
const Book = () => {
    return (
        <div className="relative group bookWraper w-52 h-56 transform duration-75 hover:-translate-x-8  hover:rotate-12  shadow-lg hover:shadow-2xl"
            >
                <Image
                isBlurred
                className="rounded-xl absolute w-52 h-56 object-cover duration-1000 origin-left group-hover:open bg-gray-100 dark:bg-gray-600 border-l-2 border-gray-500 group-hover:border-l-0"
                radius="none"
                shadow="lg"
                width="h-52"
                height="h-56"
                src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg"
                alt="NextUI Album Cover"
                />
                <div className="absolute w-full h-full top-0 left-0  text-black dark:text-white">
                <Card className="max-w-[400px] h-full">
                    <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        width={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                       
                    />
                    <div className="flex flex-col">
                        <p className="text-md">NextUI</p>
                        <p className="text-small text-default-500">nextui.org</p>
                    </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                    <div className="py-1 space-y-1">
                        <div className="flex space-x-1 items-center">
                            <EmailIcon/><p className="text-xs font-thin ">leedoohoon@pusan.ac.kr</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <EmailIcon/><p className="text-xs font-thin ">+8210 993 999</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <EmailIcon/><p className="text-xs font-thin ">www.vb.com</p> 
                        </div> 
                    </div> 
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex flex-row justify-center">
                    
                                <FacebookIcon/>
                                <TwitterIcon/>
                                <GithubIcon/>
                    </CardFooter>
                </Card>
                </div>
            </div>
        
    )
}

export default Book