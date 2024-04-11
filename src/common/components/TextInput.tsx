import { ChangeEvent, useEffect, useState } from "react";

type TextInputProps = {
  required: boolean;
  onChange: ({
    value,
    error,
    touched,
    field,
  }: {
    value: string;
    error: string;
    touched: boolean;
    field: string;
  }) => void;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  maxLength: number;
  inputClass?: string;
  field: string;
  className?: string;
};

function TextInput(props: TextInputProps): JSX.Element {
  const {
    onChange,
    field,
    maxLength,
    required,
    className,
    id,
    label,
    inputClass,
    type,
    placeholder,
    value,
  } = props;

  const [touched, setTouch] = useState(false);
  const [error, setError] = useState("");
  const [htmlClass, setHtmlClass] = useState("");
  const [inputValue, setInputValue] = useState(value);

  function onValueChanged(event: ChangeEvent<HTMLInputElement>): void {
    let [validationError, validClass, elementValue] = [
      "",
      "",
      event.target.value,
    ];

    [validationError, validClass] =
      !elementValue && required
        ? ["Value cannot be empty", "is-invalid"]
        : ["", "is-valid"];

    if (!validationError) {
      [validationError, validClass] =
        maxLength && elementValue && elementValue.length > maxLength
          ? [`Value can't have more than ${maxLength} characters`, "is-invalid"]
          : ["", "is-valid"];
    }

    setTouch(true);
    setError(validationError);
    setHtmlClass(validClass);
    setInputValue(elementValue);
  }

  useEffect(() => {
    const isValid = inputValue !== "";
    if (touched && isValid) {
      onChange({
        value: inputValue,
        error,
        touched,
        field,
      });
    }
  }, [inputValue, touched, onChange, field, error]);

  return (
    <div className={className}>
      <label htmlFor={id.toString()}>{label}</label>
      <input
        value={inputValue}
        type={type}
        onChange={onValueChanged}
        className={`form-control ${inputClass} ${htmlClass}`}
        id={`id_${label}`}
        placeholder={placeholder}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
}

export default TextInput;
