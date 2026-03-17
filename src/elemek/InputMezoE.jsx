export default function InputMezo({label, type, placeholder, value, setValue}){
    return(
        <div>
           <label className="labelI">{label}</label>
           <input className="regInput"
           type={type}
           value={value}
           placeholder={placeholder}
           onChange={(e) => setValue(e.target.value)}           
           />
        </div>
    )
}