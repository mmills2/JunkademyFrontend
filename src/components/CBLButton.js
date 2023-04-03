function CBLButton(props){
    let updateText = props.updateText;
    let updateTitle = props.updateTitle;
    let updateCodeSnippet = props.updateCodeSnippet;
    let name = props.name;
    let content = props.content;
    let codeSnippet = props.codeSnippet;

    function handleClick() {
        /*
        updateText(content);
        updateTitle(name);
        updateCodeSnippet(codeSnippet);
        */
    }

    return(
        <div onClick = {handleClick} className="CBLBlock">
            {name}
        </div>
    );
}

export {CBLButton};