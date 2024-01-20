import './header.css'
function Header(props){
  const {title} = {...props}
    return (
      <header className="header">
        <a href="#">Logo {title}</a>
        <p><b>First Project</b></p>
      </header>
    )
}
export default Header;