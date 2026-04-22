export default function ProfileInput({ type, placeholder, value, setValue}){
    return(
        <div>
           <input className="profileInput"
           type={type}
           value={value}
           placeholder={placeholder}
           onChange={(e) => setValue(e.target.value)}           
           />
        </div>
    )
}