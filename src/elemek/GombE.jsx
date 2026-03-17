export default function Gomb({buttonClass, content, onClick}){
    return(
        <button className={buttonClass} onClick={onClick}>
            {content}
        </button>
    )
}