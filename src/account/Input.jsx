function Input({label,id,value,type,name,onBlur,onChange,touched,error,icon: Icon, placeholder}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative mb-3">
      {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />}
        <input
          value={value}
          type={type}
          id={id}
          name={name}
          onBlur={onBlur}
          required
          onChange={onChange}
          className="border border-gray-400 pl-10 py-1 rounded-md w-80"
          placeholder={placeholder}
          style={{ fontSize: "0.875rem", color: "#000000c4" }}
        />
      </div>
      {touched && error && (
        <div className="text-red-500">{error}</div>
      )}
    </div>
  );
}

export default Input;
