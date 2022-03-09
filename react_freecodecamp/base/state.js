// from function to obj
class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// add state
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state= { date: new Date() };
    }

    componentDidMount(){
        this.timerID= setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


// setState()
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
this.setState(function(state, props) {
    return {
        counter: state.counter + props.increment
    };
});