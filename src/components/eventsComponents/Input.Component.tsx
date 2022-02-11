
type InputProps = {
  value: string
//  handleChange: (event: React.ChangeEvent<HTMLInputElement>)
  other?: string
};

export const InputComponent = ({value, other}: InputProps) => {
  
  return <input type={'text'} value={value}/> //onChange={handleChange}/>
};