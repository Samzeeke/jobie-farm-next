import ChangePasswordForm from "./ChangePasswordForm";
const ChangePassword = () => {
  const getFormDatas = (data) => {
    console.log(data);
  };
  return <ChangePasswordForm onSubmit={getFormDatas} />;
};
export default ChangePassword;
