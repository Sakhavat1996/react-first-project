function TabButton({children , onMyClick , isSelected}) {
    return(
        <li>
            <button 
                className = {isSelected ? 'active' : undefined}
                onClick = {onMyClick}>
                {children}
            </button>
        </li>
    )
}
export default TabButton;