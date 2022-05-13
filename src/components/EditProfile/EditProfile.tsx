import React, { ChangeEvent, useState } from "react";
import { editUser } from "../../redux/actions/user";
import { useAppDispatch } from "../../hooks/useTypesDispatch";
import { IUserObject } from "../../redux/types/application";

type IEditUserObject = Pick<IUserObject, "firstname" | "lastname" | "login">;

const EditProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const [img, setImg] = useState<File | null>(null);
  const [userData, setUserData] = useState<IEditUserObject>({
    firstname: "",
    lastname: "",
    login: "",
  });

  const handleGetUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmitForm = () => {
    const data = new FormData();
    img && data.append("img", img);
    userData.firstname && data.append("firstname", userData.firstname);
    userData.lastname && data.append("lastname", userData.lastname);
    userData.login && data.append("login", userData.login);
    dispatch(editUser(data));
    setImg(null);
  };

  return (
    <div className="example-1">
      <div className="form-group">
        {
          <label className="label">
            <input
              type="file"
              onChange={(e) => {
                const imgFile = e.target.files?.[0] || null;
                setImg(imgFile);
              }}
            />
          </label>
        }
      </div>
      <div className="inpValue">
        <input
          placeholder="Введите имя"
          type="text"
          name="firstname"
          value={userData.firstname}
          onChange={(e) => handleGetUserData(e)}
        />
      </div>
      <div className="inpValue">
        <input
          placeholder="Введите фамилию"
          type="text"
          name="lastname"
          value={userData.lastname}
          onChange={(e) => handleGetUserData(e)}
        />
      </div>
      <div className="inpValue">
        <input
          placeholder="Введите логин"
          type="text"
          name="login"
          value={userData.login}
          onChange={(e) => handleGetUserData(e)}
        />
      </div>
      <div className="inpValue">
        <input
          className="sendSettings"
          type="submit"
          placeholder="отправить"
          onClick={handleSubmitForm}
        />
      </div>
    </div>
  );
};

export default EditProfile;
