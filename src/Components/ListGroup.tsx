function ListGroup() {
  let citis = ["ahmedabad", "bihar", "kankroli", "udaipur"];
  citis = [];
  if (citis.length == 0) {
    return (
      <>
        <h1>List</h1>
        <h2>no items found</h2>
      </>
    );
  }
  return (
    <>
      <h1>List</h1>
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
