
export  function Input(props: {text: string}){
    return(
        <div className="p-2">
        <input className="bg-input text-white placeholder:text-white/70 p-2 rounded border-none outline-none" placeholder={props.text}/>
        </div>
    );
}