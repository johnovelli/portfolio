import "./btnblue.css"

function BtnBlue({ name, link }) {
    return (
        <button className="Btn-Blue">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </button>
    )
}

export default BtnBlue;