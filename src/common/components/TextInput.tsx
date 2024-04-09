import React, {useState, ChangeEvent, useEffect} from "react";

type TextInputProps = {
  required: boolean,
  onChange: ({ value, error, touched, field }: { value: string, error: string, touched: boolean, field: string }) => void,
  id: string,
  label: string,
  placeholder: string,
  value: string,
  type?: string,
  maxLength: number,
  inputClass?: string,
  field: string
  className?: string
};

function TextInput(props: TextInputProps): JSX.Element {
  const [touched, setTouch] = useState(false);
  const [error, setError] = useState("");
  const [htmlClass, setHtmlClass] = useState("");
  const [value, setValue] = useState("");


  function onValueChanged(event: ChangeEvent<HTMLInputElement>): void {
    let [error, validClass, elementValue] = ["", "", event.target.value];

    [error, validClass] = (!elementValue && props.required) ?
      ["Value cannot be empty", "is-invalid"] : ["", "is-valid"];

    if (!error) {
      [error, validClass] = (props.maxLength && elementValue && elementValue.length > (props.maxLength)) ?
        [`Value can't have more than ${props.maxLength} characters`, "is-invalid"] : ["", "is-valid"];
    }

    setTouch(true);
    setError(error);
    setHtmlClass(validClass);
    setValue(elementValue);
  }


  useEffect(() => {
    const isValid = value !== '';
    if (touched && isValid) {
      props.onChange({ value: value, error: error, touched: touched, field: props.field });
    }
  }, [value, props.value, props.onChange, touched]);


  return (
    <div className={props.className}>
      <label htmlFor={props.id.toString()}>{props.label}</label>
      <input
        value={value}
        type={props.type}
        onChange={onValueChanged}
        className={`form-control ${props.inputClass} ${htmlClass}`}
        id={`id_${props.label}`}
        placeholder={props.placeholder} />
      {error ?
        <div className="invalid-feedback">
          {error}
        </div> : null
      }
    </div>
  );
}

export default TextInput;
