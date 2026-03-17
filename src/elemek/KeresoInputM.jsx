export default function KeresoInputM({ type, placeholder, value, setValue}){
    return(
        <div>
           <input className="kereso"
           type={type}
           value={value}
           placeholder={placeholder}
           onChange={(e) => setValue(e.target.value)}           
           />
        </div>
    )
}