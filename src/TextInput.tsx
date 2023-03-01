interface TextInputProps {
    value: string
    disabled: boolean
    onChange: any
}
const TextInput = (props: TextInputProps) => {
    const value = props.value;
    const disabled = props.disabled;
    const onChange = props.onChange;
    let background = 'grey';

    if (disabled) {
        background = '#36454F';
    }

    return (
        <input 
            value={value}
            disabled={disabled}
            onChange={onChange}
            style={{
                height: '2rem',
                width: '15rem',
                fontSize: '1.5rem',
                backgroundColor: background,
                border: 'none',
                borderRadius: '.5rem',
                // marginTop: '.5rem'
            }}  
        />
    )
}

export default TextInput;