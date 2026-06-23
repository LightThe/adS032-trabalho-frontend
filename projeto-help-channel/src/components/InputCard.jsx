export default function InputCard({
  label,
  value,
  onChange,
  error,
  type = "text",
  rows = 1,
}) {
  return (
    <div className="input-card flex flex-col gap-1 m-4 bg-taupe-300 rounded-lg p-2 pb-3">
      <label className="input-card-label">{label}</label>
      {type === "textarea" ? (
        <textarea
          className={`input-card-input ${error ? "input-card-error" : ""} font-bold`}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <input
          className={`input-card-input ${error ? "input-card-error" : ""} font-bold`}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
      {error && (
        <span className="input-card-error-message text-red-600">{error}</span>
      )}
    </div>
  );
}
