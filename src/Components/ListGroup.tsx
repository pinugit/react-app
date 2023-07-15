function ListGroup() {
  const citis = ["ahmedabad", "bihar", "kankroli", "udaipur"];

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
