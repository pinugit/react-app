import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number({ invalid_type_error: "should not be empty" }),
  category: z.string().nonempty("please select a category"),
});

type FormData = z.infer<typeof schema>;

interface props {
  onSutbmitPassDict: (dict: {
    description: any;
    amount: any;
    category: any;
  }) => void;
}

const TheForm = ({ onSutbmitPassDict }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  interface items {
    description: any;
    amount: any;
    category: any;
  }

  const onSubmit = (data: FieldValues) => {
    let tempDict = {
      description: data["description"],
      amount: data["amount"],
      category: data["category"],
    };
    onSutbmitPassDict(tempDict);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
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
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue={""}></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="mb-3 btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default TheForm;
