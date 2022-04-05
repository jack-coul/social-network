import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getUserPosts } from "../../../redux/features/posts";
import styles from "./AddPosts.module.css";

const AddPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState("");

  const handleAddPost = () => {
    dispatch(addPost(description, img));
    setImg(null);

    setDescription("");
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const hundleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.addpostWrapper}>
      <img
        onClick={hundleClickOpen}
        style={{ cursor: "pointer" }}
        width={24}
        height={24}
        src="https://cdn-icons.flaticon.com/png/512/3161/premium/3161837.png?token=exp=1649063899~hmac=9f58a67ff702ee35ec2a895f838509eb"
        alt=""
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "center" }} id="form-dialog-title">
          добавить пост
        </DialogTitle>
        <DialogContent>
          <label className={styles.images}>
            <svg
              width={34}
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium addPhotoIcon css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AddAPhotoIcon"
            >
              <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"></path>
            </svg>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              className={styles.inp}
              type="file"
            />
          </label>

          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Описание.."
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddPost} color="primary">
            ok
          </Button>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPosts;
