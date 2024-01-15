import React from 'react';
import { Image, Divider } from '@nextui-org/react';
import { SunIcon,EmailIcon } from '../components/Icons';
const ProfileCell = () => {
    return (
        <div className="w-52  bg-white overflow-clip flex flex-row shadow-xl">
            <div className="  flex flex-col items-center justify-center ">
                <div className="w-full bg-white flex justify-center items-center py-2">
                    <div className="w-8 h-2 rounded-full bg-black"></div>
                </div>
                <Image
                    
                    className="w-full overflow-clip h-56 object-cover border-8 border-white"
                    radius="none"
                    shadow='none'
                    src="https://i.pinimg.com/originals/f8/66/8e/f8668e5328cfb4938903406948383cf6.png"
                    alt="NextUI Album Cover"
                    />
                
                <div className=" text-black flex flex-col divide-y">
                    <div className="px-2">
                        <p className="text-sm font-bold text-center">
                        Jang Min Lee, Ph.D
                        </p>
                        <p className="text-xs font-thin text-center">Doctoral Course of AI</p>
                    </div>
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
                    <div className="flex justify-center">
                        <SunIcon/>
                        <SunIcon/>
                        <SunIcon/>
                        <SunIcon/>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 flex justify-center items-center w-16 overflow-clip">
             <p className="[writing-mode:vertical-lr] text-4xl font-bold font-sans transform rotate-180  scale-105">
                VB LABORATORY
             </p>
             </div>
        </div>
        
    );
};

export default ProfileCell;
