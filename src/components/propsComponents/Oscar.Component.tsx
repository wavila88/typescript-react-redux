type OscarProps ={
  children: React.ReactNode
};

export const OscarComponent = (props: OscarProps) => {
  return (
    <>
    {props.children}
    </>
  )
};