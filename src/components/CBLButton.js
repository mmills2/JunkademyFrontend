function CBLButton(){

    function handleClick() {
        console.log("clicked");
    }

    return(
        <div onClick = {handleClick} className="CBLBlock">
            Click me
        </div>
    );
}

export {CBLButton};