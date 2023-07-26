interface Item {
  discription: any;
  amount: any;
  catagory: any;
}

interface props {
  items: Item[];
  onClickDelete: (index: number) => void;
}
const Table = ({ items, onClickDelete }: props) => {
  return (
    <table className="mu-10 table table-striped table-bordered ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Discription</th>
          <th scope="col">Amount</th>
          <th scope="col">Catagory</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.discription}</td>
            <td>{item.amount}</td>
            <td>{item.catagory}</td>
            <td>
              <button
                onClick={() => onClickDelete(index)}
                type="button"
                className="btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
