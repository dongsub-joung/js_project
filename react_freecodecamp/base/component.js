// Simple component
function welcom(props){
    return (<h1>hello, {props.name}</h1>);
}

// ES6 class
class Welcom extends React.Component{
    render() {
        return (<h1> Hello, {this.props.name} </h1>);
    }
}

// user define
const ELEMENT= <div />;
const ELEMENT= <Welcome name="Sara" />;

function Welcome(props){
    return <h1> Hello, {props.name} </h1>;
}
const ELEMENT= <Welcom name="Sara" />;
ReactDOM.render(
    ELEMENT,
    document.getElementById('root')
);

// mix 
function Welcome(props){
    return (<h1> Hello, {props.name}</h1>);
}
function App(){
    return (
        <div>
            <Welcom name="Sara"/>
            <Welcom name="zxcv"/>
            <Welcom name="asdf"/>
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// extraction
function Comment(props){
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}>
                </img>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props){
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}>
        </img>
    );
}
<Avatar user={props.author} />

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
<UserInfo user={props.author} />

// init
const COMMENT= {
    date: new Date(),
    text: "I hope ..",
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://...',
    }
};
ReactDOM.render(
    <Comment 
        date= {COMMENT.date}
        text= {COMMENT.text}
        author= {COMMENT.author}
    />,
    document.getElementById('root')
);

function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );  
}