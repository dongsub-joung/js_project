// ex 1
const NAME= `Josh Perez`;
const element= <h1>Hello, {NAME}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

// ex 2

function formatName(user){
    return USER.firstName + ' ' + USER.lastName;
}
const USER= {
    firstName: 'Harper',
    lastName: 'PErez',
};

const ELEMENT= {
    <h1>
        Hello, {formatName(USER)}!
    </h1>
};

ReactDOM.render(
    ELEMENT,
    document.getElementById('root')
);

// ex 3
function getGreeting(user){
    if (user){
        return <h1> Hello, {formatName(user)}!</h1>;
    } else {
        return <h1> Hello, Stranger.</h1>
    }
}

// ex 4
const ELEMENT= <a href= "https://www.google.com"> link </a>;
const ELEMENT= <img src={user.avatarUrl}></img>;

// ex 5
const ELEMENT= (
    <h1 className= "greeting">
        Hello, world!
    </h1>
);
const ELEMENT= React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);