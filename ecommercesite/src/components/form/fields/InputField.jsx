function InputField({ label, name, value, placeholder, onChange, inputType }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={inputType}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
}

export default InputField;
