import './App.css';

function TextBox(props) {
    return (
        <div className="TextBox">
            <label>
                {props.label + ": "}
                <input type="text" onChange={(event) => {
                    props.change(event.target.value)
                }}/>
            </label>
        </div>
    );
}

export default TextBox;
