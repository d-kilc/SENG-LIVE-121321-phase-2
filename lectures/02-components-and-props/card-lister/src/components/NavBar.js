// function NavBar({isLoggedIn}) {
//     if (isLoggedIn) {    
//         return (
//             <nav className="nav">
//                 <p>You're Logged In</p>
//             </nav>
//         )
//     } else {    
//         return (
//             <nav className="nav">
//                 <p>You're logged out.</p>
//             </nav>
//         )
//     }
// }

//ternary
function NavBar({isLoggedIn}) {
    return (
        <nav className="nav">
            <p>{ isLoggedIn ? "You're Logged In" : "You're Logged Out" }</p>
        </nav>
    )
}

export default NavBar