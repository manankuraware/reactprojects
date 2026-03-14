import { useState } from "react";
import InputField from "./fields/InputField";
import TextAreaField from "./fields/TextAreaField";
import SelectField from "./fields/SelectField";

const fieldMap = {
  input: InputField,
  textarea: TextAreaField,
  select: SelectField,
};

function FormWrapper({ config }) {
  const { fields, onSubmit } = config;

  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="formwrapper">
      <form onSubmit={handleSubmit}>
        {fields.map((field) => {
          const FieldComponent = fieldMap[field.type];

          return (
            <FieldComponent
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          );
        })}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWrapper;
