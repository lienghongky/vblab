
export default function Feature(props) {
    return (
        <>
        <div className={`flex flex-col justify-center h-96 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 shadow-2xl ${props.className}`}>
            <div className="flex justify-center">
                <img className="w-64" src={props.data.image} alt="" />
            </div>
            <div className="h-1/3">
                <h3 className="">
                {props.data.title}
                </h3>
                <hr />
                <p className="font-mono text-xs">{props.data.description}</p>
            </div>
           

        </div>
        </>
    );
    }