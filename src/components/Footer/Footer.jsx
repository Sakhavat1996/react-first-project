import './footer.css'
function Footer(props){
    return(
        <footer>
            <a href="#" className="footer-logo">{props.logo}</a>
            <p>{props.name}</p>
        </footer>
    )
}
export {Footer};