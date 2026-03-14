function SelectField({ label, name, options, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        id={name}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
