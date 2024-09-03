import { TinaMarkdown } from "tinacms/dist/rich-text";
export default function Feature(props) {
    const safeMarkdown =  (content)=>{
        if (typeof content === 'string'){
            return <p className="font-mono drop-shadow-lg line-clamp-3 text-black dark:text-white text-xs">{content}</p>
        } 
        else {
           return <TinaMarkdown 
        components={{
            h1: (props) => <h1 className="drop-shadow-lg text-black dark:text-white">{props.children}</h1>,
            p: (props) => <p className="font-mono drop-shadow-lg line-clamp-3 text-black dark:text-white text-xs">{props.children}</p>,
           }} 
        content={content} />
        }
       }
    return (
        <>
        <div className={`flex flex-col justify-center h-96 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 shadow-2xl ${props.className}`}>
            <img className="w-64 h-2/3 object-cover overflow-clip" src={props.data.image} alt="" />
            <div className="h-1/3">
                <h3 className="">
                {props.data.title}
                </h3>
                <hr className="py-2"/>
                {
                  safeMarkdown(props.data.description)
                }
                
            </div>
           

        </div>
        </>
    );
    }