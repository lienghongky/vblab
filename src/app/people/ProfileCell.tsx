import React from 'react';
import { Image, Divider, LinkIcon } from '@nextui-org/react';
import { TwitterIcon,EmailIcon, FacebookIcon, GithubIcon } from '../components/Icons';
const ProfileCell = () => {
    return (
        <div className="relative">
            <div className="z-0 absolute left-0 right-8 top-0 bottom-0 bg-blue-100 ">
                <div className="text-black flex flex-col divide-y p-4">
                    <div className="px-2">
                        <p className="text-sm font-bold text-center">
                        Jang Min Lee, Ph.D
                        </p>
                        <p className="text-xs font-thin text-center">Doctoral Course of AI</p>
                    </div>
                    <div className="py-1 space-y-1 divide-y-1 divide-gray-400">
                       
                        <div className="flex space-x-1 items-center py-1">
                            <EmailIcon/><p className="text-xs font-thin ">+8210 993 999</p>
                        </div>
                        <div className="flex space-x-1 items-center py-1">
                            <EmailIcon/><p className="text-xs font-thin ">www.vb.com</p> 
                        </div> 
                        <div className="flex items-center justify-center py-2">
                                <FacebookIcon/>
                                <TwitterIcon/>
                                <GithubIcon/>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="group duration-500   bg-white  w-52  overflow-clip flex flex-row shadow-xl">
          
            <div className="z-10 bg-white transition duration-1000 shadow-sm group-hover:-translate-x-52 flex flex-col items-center justify-center ">
                <div className="w-full  flex justify-center items-center py-2">
                    <div className="w-8 h-2 rounded-full bg-black"></div>
                </div>
                <Image
                    className="w-full overflow-clip h-56 object-cover border-8 border-white"
                    radius="none"
                    shadow='none'
                    src="https://i.pinimg.com/originals/f8/66/8e/f8668e5328cfb4938903406948383cf6.png"
                    alt="NextUI Album Cover"
                    />
                
                <div className="text-black flex flex-col divide-y">
                    <div className="px-2">
                        <p className="text-sm font-bold text-center">
                        Jang Min Lee, Ph.D
                        </p>
                        <p className="text-xs font-thin text-center">Doctoral Course of AI</p>
                      
                    </div>
                    <div className="flex space-x-1 items-center py-1">
                            <EmailIcon/><p className="text-xs font-thin ">leedoohoon@pusan.ac.kr</p>
                        </div>
                </div>
            </div>
            
            <div className="bg-gray-800 group-hover:bg-blue-700 flex justify-center items-center w-16 overflow-clip">
             <p className="[writing-mode:vertical-lr] text-4xl font-bold font-sans transform rotate-180  scale-105">
                VB LABORATORY
             </p>
             </div>
        </div>
        </div>
        
    );
};

export default ProfileCell;
