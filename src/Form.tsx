import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
    // setValue(event.currentTarget.value);
    // console.log(event.currentTarget.value);
  };
  const onSubmit = (event:React.FocusEvent<HTMLFormElement>) => {event.preventDefault()}

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </>
  );
}

export default Form;
