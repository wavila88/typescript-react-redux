type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export const StatusComponent = (props: StatusProps) => {
  let message;

  switch(props.status){
    case('loading'):
      message = 'loading...';
    break;
    case('success'):
      message = 'Data fetched successfully!';
    break;
    case('error'):
      message = 'Error fetching Data';
    break;
    default:
      message = 'Error fetching Data';
      break;
  };

  return(
    <>
      <h2>Status - {message}</h2>
    </>
  );
};