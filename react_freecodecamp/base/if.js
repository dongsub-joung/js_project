// base
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props){
    const isLoggedIn= props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);

// component
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick= this.handleLoginClick.bind(this);
        this.handleLogoutClick= this.handleLogoutClick.bind(this);
        this.state= {isLoggedIn: false};
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn= this.state.isLoggedIn;
        let buttom;
        if(isLoggedIn){
            buttom= <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            buttom= <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {buttom}
            </div>
        );
    }
}


// Block Randering
function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
} 

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state= {showWarning: true};
        this.hanlgeToggleClick= this.hanlgeToggleClick.bind(this);
    }
    hanlgeToggleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <buttom onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'show'}
                </buttom>
            </div>
        );
    }
}