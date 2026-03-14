function TextAreaField({ label, name, value, placeholder, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        id={name}
        rows={10}
      />
    </div>
  );
}

export default TextAreaField;
