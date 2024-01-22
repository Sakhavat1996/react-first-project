import classes from './footer.module.css';
const styleOBJ = {
    backgroundColor: 'yellow',
    padding: '10px',
    color: 'black'
}
function Footer(props){
    let IsAytacSmartStudent = 5;
    return(
        <footer 
            style={{
                backgroundColor: IsAytacSmartStudent ? 'blue' : 'red'
            }}
        >
            <a href="#" className="footer-logo">{props.logo}</a>
            <div className="link-list">
                <button 
                    >
                    Button 1
                </button>
                <button className='button'>Button 2</button>
            </div>
            <p 
                className='text'
                style={styleOBJ}
            >{props.name}</p>
            <p className={classes.text}> Website</p>
            <p className='header-text'>Footer Text</p>
        </footer>
    )
}
export {Footer};