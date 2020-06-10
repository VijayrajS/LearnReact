console.log("App.js running bruh");

// JSX
// var template = React.createElement("p", null, "This is JSX from app.js");

// "All Supported HTML Attributes" in the https://reactjs.org/docs/dom-elements.html
// documentation page tells you what html attributes can be used and in what form
// Ex. we can't use the 'class' attribute, but use it as 'classname' instead.

// Supported Events <- https://reactjs.org/docs/events.html to check all the 
// supported events in input/forms

const app = {
    title: "Indecison app",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
}

function renderOptions(options){
    if(options.length > 0){
        let div = [];

        div.push(<p key="title">Here are your options</p>);
        let u_list = options.map((element, index) => <li key={index}>{element}</li>);

        div.push(<ul key="taskList">{u_list}</ul>)
        return div;
    }

    return "No options"
}

// How to deal with form submits from the frontend
const onFormSubmit = (e)=>{
    e.preventDefault(); 
    // Usually on form submisson, the entire page refreshes by default. The above
    // line stops that from happening
    console.log('Form submitted');
    
    // target -> the form, elements-> list of elements under the form
    // option -> each element of a form are labelled by their name 
    const option = e.target.elements.form_option.value;
    
    if(option){
        app.options.push(option);
        // console.log(option);
        renderAfterSubmit();
        e.target.elements.form_option.value = ''; // Reset text box
    }
}

const removeAll = ()=>{
    app.options = [];
    renderAfterSubmit();
}

const makeDecision = ()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    console.log(randomNum);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderAfterSubmit = ()=>{
    const appTemplate = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

        <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do</button>
        <button onClick={removeAll}>Remove All</button><br></br>

        {renderOptions(app.options)}
        <form onSubmit={onFormSubmit}>
            <input type="text" name="form_option"></input>
            <button>Add option</button>
        </form>
    </div>
    );
    
    ReactDOM.render(appTemplate, appRoot);
}

renderAfterSubmit();
