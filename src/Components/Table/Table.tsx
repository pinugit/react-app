interface Item {
  description: string;
  amount: number;
  category: string;
}

interface props {
  items: object[];
}
const Table = ({ items }: props) => {
  return (
    <table className="mu-10 table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Discription</th>
          <th scope="col">Amount</th>
          <th scope="col">Catagory</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.value["dicription"]}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
