import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const scherma = z.object({
  discription: z.string().min(3),
  amount: z.number(),
  catagory: z.string().nonempty(),
});

type FormData = z.infer<typeof scherma>;

interface props {
  onClickSubmit: () => void;
}

const TheForm = ({ onClickSubmit }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(scherma),
  });

  const [items, setItems] = useState({
    discription: "",
    ammount: 0,
    catagory: "",
  });

  const onSubmit = (data: FieldValues) => {
    setItems({ ...items, ...data });
    console.log({ ...data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="discription" className="form-label">
          Discription
        </label>
        <input
          {...register("discription")}
          type="text"
          id="discription"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          type="number"
          id="amount"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="catagory" className="form-label">
          Catagory
        </label>
        <select
          {...register("catagory")}
          id="catagory"
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue={""}></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TheForm;
