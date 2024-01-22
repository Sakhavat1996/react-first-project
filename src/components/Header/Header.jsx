import classes from './header.module.css'
function Header(props){
  const {title} = {...props};

    return (
      <header className={classes.header}>
        <a href="#">Logo {title}</a>
        <p className={classes['header-text']}> Header Text</p>
        <p className={classes['header-text']}><b>First Project</b></p>
      </header>
    )
}
export default Header;