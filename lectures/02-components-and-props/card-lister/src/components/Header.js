function Header({ firstName, lastName }) {
    return (
        <header className="header">
                {/* <h2 className="component-name">Header Component</h2> */}
                <h1>Welcome, {firstName + ' ' + lastName}!</h1>
        </header>
    );
}

/* ❗ your code here */
export default Header