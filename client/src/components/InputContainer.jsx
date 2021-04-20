import "./InputContainer.css";

const InputContainer = (props) => {
    return (
        <div className="input-container">
            {props.children}
        </div>
    )
}

export default InputContainer;
