function ListGroup() {
  let citis = ["ahmedabad", "bihar", "kankroli", "udaipur"];
  citis = [];
  return (
    <>
      <h1>List</h1>
      {/* this is a control flow statement which will return p if true or null if false  */}
      {citis.length == 0 ? <p>no items found</p> : null}
      <ol className="list-group">
        {citis.map((citis) => (
          <li className="list-group-item" key={citis}>
            {citis}
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListGroup;
