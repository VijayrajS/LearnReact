// A react script to render a simple counter in a HTML webpage

let count = 0;
const addOne=()=>{
    count++;
    console.log(count);
    renderCounterApp();
}

const subtractOne=()=>{
    count--;
    console.log(count);
    renderCounterApp();
}

const resetFunc=()=>{
    count = 0;
    console.log(count);
    renderCounterApp();
}


const renderCounterApp = ()=>{
    // To re-render the page if counter changes
    const appTemplate2 = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={resetFunc}>Reset</button>
            <button onClick={subtractOne}>-1</button>
        </div>
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(appTemplate2, appRoot);
}

renderCounterApp();
