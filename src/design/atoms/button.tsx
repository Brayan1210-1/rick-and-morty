
//type  buttonType = {}


export function Button(props: {text: string}) {
    return (
       
        <div className="flex items-center justify-center p-2 ">
        <button className="border-2 border-solid font-bold bg-button shadow-custom p-1.5 rounded-b-sm "> {props.text} </button>
        </div>
    )
};

