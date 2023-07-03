function Control({onChangeMode = () => {}}) {
    return (
        <div className="buttons">
            <button onClick={() => onChangeMode("create")}>Create</button>
            <button onClick={() => onChangeMode("update")}>Update</button>
            <button onClick={() => onChangeMode("delete")}>Delete</button>
        </div>
    );
}

export default Control;