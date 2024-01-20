function ListRow(props) {
    return (
      <li>
        <p>Title: {props.title}</p>
        <p>Brand: {props.brand}</p>
        <p>Year: {props.year}</p>
      </li>
    );
}
export {ListRow}