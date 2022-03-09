// prevent Event :false
function Form(){
    function handleSubmit(e){
        e.preventDefault();
        console.log('You clicked submit');
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit"> Submit </button>
        </form>
    );
}

// toggle
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state= {isToggleOn: true};
    
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);