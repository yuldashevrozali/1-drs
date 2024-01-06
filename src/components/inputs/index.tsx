function Input(props:any) {
    const { value , onclick} = props;
  return (
    <>
    <input onClick={onclick} type="button" value={value} />
    </>
  )
}

export default Input