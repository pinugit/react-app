import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const scherma = z.object({
  discription: z.string().min(3),
  amount: z.number({ invalid_type_error: "should not be empty" }),
  catagory: z.string().nonempty("please select a catagory"),
});

type FormData = z.infer<typeof scherma>;

interface props {
  onSutbmitPassDict: (dict: {
    discription: any;
    amount: any;
    catagory: any;
  }) => void;
}

const TheForm = ({ onSutbmitPassDict }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(scherma),
  });

  const onSubmit = (data: FieldValues) => {
    let tempDict = {
      discription: data["discription"],
      amount: data["amount"],
      catagory: data["catagory"],
    };
    onSutbmitPassDict(tempDict);
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
        {errors.discription && (
          <p className="text-danger">{errors.discription.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
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
        {errors.catagory && (
          <p className="text-danger">{errors.catagory.message}</p>
        )}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TheForm;
