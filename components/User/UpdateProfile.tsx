import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";
import UpdateProfileForm from "./UpdateProfileForm";

interface FormObject {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
}
interface Props {
  email: string;
}
const UpdateProfile: React.FC<Props> = ({ email }) => {
  const { users } = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const user = users?.find((user: any) => user.email === email);
  const userId = user?.id;
  console.log(user);
  const getFormDatas = async (formData: FormObject) => {
    const ref = doc(db, "users", userId);
    await updateDoc(ref, {
      lastName: formData.lastName,
      firstName: formData.firstName,
      phone: formData.phone,
      email: email,
    })
      .then(() => {
        console.log("Document successfully updated!", users);
        const usersRef = collection(db, "users");
        return getDocs(usersRef);
      })
      .then((usersSnapshots) => {
        const usersDocs = usersSnapshots.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        dispatch(ProductsActions.addUsers({ users: usersDocs }));
        console.log("again", users);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };
  return (
    <UpdateProfileForm
      onSubmit={getFormDatas}
      email={email}
      firstName={user?.firstName}
      lastName={user?.lastName}
      phone={user?.phone}
    />
  );
};
export default UpdateProfile;
