import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { editUser } from "../../redux/features/application";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");

  const handleSubmitForm = () => {
    dispatch(editUser(img, firstname, lastname, login));
    setImg(null);
    setFirstname("");
    setLastname("");
    setLogin("");
  };

  return (
    <div className="example-1">
      <div className="form-group">
        <label className="label">
          <AddAPhotoIcon className="addPhotoIcon" />
          <input
            disabled={img}
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </label>
      </div>
      <div className="inpValue">
        <input
         placeholder="Введите имя"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="inpValue">
        <input
         placeholder="Введите фамилию"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="inpValue">
        <input
         placeholder="Введите логин"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
