import { ErrorMessProp } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessProp> = ({ message }) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
