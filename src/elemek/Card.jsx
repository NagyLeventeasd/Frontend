import { Link, useNavigate } from 'react-router-dom'


export default function Card({ src, alt, title, slotClass }) {
    return (
      <div className={slotClass}>
        <img src={src} alt={alt} title={title} />
      </div>
    )
  }