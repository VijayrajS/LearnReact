class IndecisonApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        let options = ['one', 'two', 'three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options optionList = {options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        console.log(this.props) 
        // ^ This logs anything we put in the tag as a key-value pair
        // Ex. <Header title = "..." /> ==> this.props = Object { title: "Test Value" } 
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handlePick(){
        alert("Nibba");
    }

    render(){
        return(
            <button onClick={this.handlePick}>What should I do?</button>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this)
    }

    removeAll(){
        this.props.optionList = [];
        this.render();
    }

    render(){
        return(
            <div>
                Options here
                <button onClick={this.removeAll}>Remove all</button>
                <div>
                {this.props.optionList.map((element, index)=><Option key ={index} data={element}/>)}
                </div>
                <Option />
            </div>
            );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>{this.props.data}</div>
        );
    }
}

class AddOption extends React.Component{
    submitForm(e){
        e.preventDefault();
        const option = e.target.elements.form_option.value;
        
        console.log(option);
    }

    render(){
        return(
            <form onSubmit={this.submitForm}>
                <input type="text" name="form_option"></input>
                <button>Add option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisonApp />, document.getElementById('app'))
