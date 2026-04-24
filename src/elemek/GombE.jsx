export default function Gomb({buttonClass, content, onClick,id}){
    return(
        <button id={id} className={buttonClass} onClick={onClick}>
            {content}
        </button>
    )
}