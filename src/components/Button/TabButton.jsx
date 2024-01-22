// const styleObj = {
//     background: '#008080',
//     color: '#fff',
//     fontSize : '20px'
// }
function TabButton({children , onMyClick , isSelected}) {
    return(
        <li>
            <button 
                className = {isSelected ? 'active' : undefined}
                onClick = {onMyClick}
                // style={styleObj}
                >
                {children}
            </button>
        </li>
    )
}
export default TabButton;
// export {styleObj};