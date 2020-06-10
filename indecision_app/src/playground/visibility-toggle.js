
let isVisible = false;

const toggleVisibile = ()=>{
    isVisible = !isVisible;
    renderDetails();
}

const renderP = ()=>{
    if(isVisible){
        return  <p>First demo app</p>;
    }
    return <p></p>;
}

const appRoot = document.getElementById('app');

const renderDetails = ()=>{
    const appTemplate = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibile}>{isVisible?"Hide Details":"Show details"}</button>
            {renderP()}
        </div>
    )
    
    ReactDOM.render(appTemplate, appRoot);
}


renderDetails();
