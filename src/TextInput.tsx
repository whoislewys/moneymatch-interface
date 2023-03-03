import { TextInputStyle } from './App.css';

interface TextInputProps {
  value: string;
  disabled: boolean;
  onChange: any;
}
const TextInput = (props: TextInputProps) => {
  const value = props.value;
  const disabled = props.disabled;
  const onChange = props.onChange;

  return (
    <input
      value={value}
      className={TextInputStyle}
      disabled={disabled}
      onChange={onChange}
      style={
        {
          // marginTop: '.5rem'
        }
      }
    />
  );
};

export default TextInput;

