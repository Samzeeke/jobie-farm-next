import Form from "./Form";

const Checkouts = () => {
  const getFormDatas = (datas) => {
    console.log(datas);
  };

  return <Form onSubmit={getFormDatas} />;
};
export default Checkouts;
