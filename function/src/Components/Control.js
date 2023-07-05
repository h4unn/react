<<<<<<< HEAD
function Control({onChangeMode = () => {}}) {
=======
function Control({onChangeMode = f => f}) {
>>>>>>> 0f96c1f10681a36e39ae5c9279c4d72144cb3de2
    return (
        <div className="buttons">
            <button onClick={() => onChangeMode("create")}>Create</button>
            <button onClick={() => onChangeMode("update")}>Update</button>
            <button onClick={() => onChangeMode("delete")}>Delete</button>
        </div>
    );
}

export default Control;