function CBLButton(props){
    let updateText = props.updateText;
    let name = props.name;
    let content = props.content;

    function handleClick() {
        updateText(content);
    }

    return(
        <div onClick = {handleClick} className="CBLBlock">
            {name}
        </div>
    );
}

export {CBLButton};