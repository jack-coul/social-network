const initialState = {
  loadingPosts: false,
  posts: [],
  error: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "get/posts/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "get/posts/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...action.payload],
      };
    case "get/posts/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "get/userPosts/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "get/userPosts/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...action.payload],
      };
    case "get/userPosts/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "add/posts/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "add/posts/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...state.posts, action.payload],
      };
    case "add/posts/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "delete/post/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "delete/post/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...state.posts.filter((post) => post._id !== action.payload)],
        message: "Успешное удаление",
      };
    case "delete/post/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "edit/post/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "edit/post/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        message: "Успешное изменение",
      };
    case "edit/post/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    // case "add/like/pending":
    //   return {
    //     ...state,
    //     loadingLikes: true,
    //     error: null,
    //   };
    // case "add/like/fulfilled":
    //   return {
    //     ...state,
    //     loadingLikes: false,
    //     posts: [
    //       ...state.posts.filter((post)=> {
    //         if(post._id === action.payload.post._id){
    //           return post.likes.push(action.payload.user)
    //         }
    //       })
    //     ],
    //     message: "Успешное добавление",
    //   };
    // case "add/like/rejected":
    //   return {
    //     ...state,
    //     loadingLikes: false,
    //     error: action.error,
    //   };
    // case "remove/like/pending":
    //   return {
    //     ...state,
    //     loadingLikes: true,
    //     error: null,
    //   };
    // case "remove/like/fulfilled":
    //   return {
    //     ...state,
    //     loadingLikes: false,
    //     posts: [
    //       ...state.posts.forEach((post)=> {
    //         console.log(post._id)
    //         if(post._id === action.payload.post._id){
    //           if(post.likes.includes(action.payload.user)){
    //             return  post.likes.filter((like)=> like === post.user )
    //           }
    //         }
    //       })
    //     ],
    //     message: "Успешное удаление",
    //   };
    case "remove/like/rejected":
      return {
        ...state,
        loadingLikes: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "get/posts/pending" });
    try {
      const res = await fetch("http://localhost:4000/posts");
      const posts = await res.json();
      if (posts.error) {
        dispatch({ type: "get/posts/rejected", error: posts.error });
      } else {
        dispatch({ type: "get/posts/fulfilled", payload: posts });
      }
    } catch (error) {
      dispatch({ type: "get/posts/rejected", error });
    }
  };
};

export const getMyPosts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "get/userPosts/pending" });
    const state = getState();
    const token = state.application.token;
    try {
      const res = await fetch(`http://localhost:4000/my/posts/`, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const posts = await res.json();
      if (posts.error) {
        dispatch({ type: "get/userPosts/rejected", error: posts.error });
      } else {
        dispatch({ type: "get/userPosts/fulfilled", payload: posts });
      }
    } catch (error) {
      dispatch({ type: "get/userPosts/rejected", error });
    }
  };
};

export const getUserPosts = (id, admin) => {
  return async (dispatch) => {
    dispatch({ type: "get/userPosts/pending" });
    try {
      const request = admin
        ? `http://localhost:4000/admin/posts/${id}`
        : `http://localhost:4000/user/posts/${id}`;
      const res = await fetch(request, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const posts = await res.json();
      if (posts.error) {
        dispatch({ type: "get/userPosts/rejected", error: posts.error });
      } else {
        dispatch({ type: "get/userPosts/fulfilled", payload: posts });
      }
    } catch (error) {
      dispatch({ type: "get/userPosts/rejected", error });
    }
  };
};

export const addPost = (text, img) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    let formData = new FormData();
    img && formData.append("image", img);
    text && formData.append("text", text);
    dispatch({ type: "add/post/pending" });

    try {
      const res = await fetch("http://localhost:4000/post", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const addedPost = await res.json();

      if (addedPost.error) {
        dispatch({ type: "add/posts/rejected", error: addedPost.error });
      } else {
        dispatch({ type: "add/posts/fulfilled", payload: addedPost });
      }
    } catch (error) {
      dispatch({ type: "add/posts/rejected", error });
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "delete/post/pending" });
    try {
      const res = await fetch(`http://localhost:4000/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const error = await res.json();
      if (error.error) {
        dispatch({ type: "delete/post/rejected", error: error.error });
      } else {
        dispatch({ type: "delete/post/fulfilled", payload: id });
      }
    } catch (error) {
      dispatch({ type: "delete/post/rejected", error });
    }
  };
};

export const editPost = (id, text) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "edit/post/pending" });
    try {
      const res = await fetch(`http://localhost:4000/post/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const error = await res.json();

      if (error.error) {
        dispatch({ type: "add/posts/rejected", error: error.error });
      } else {
        dispatch({ type: "add/posts/fulfilled" });
      }
    } catch (error) {
      dispatch({ type: "add/posts/rejected", error });
    }
  };
};
export const addLike = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "add/like/pending" });
    try {
      const res = await fetch(`http://localhost:4000/add/like/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const post = await res.json();
      if (post.error) {
        dispatch({ type: "add/like/rejected", error: post.error });
      } else {
        dispatch({
          type: "add/like/fulfilled",
          payload: { post: post, user: state.application.id },
        });
      }
    } catch (error) {
      dispatch({ type: "add/like/rejected", error });
    }
  };
};

export const removeLike = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "remove/like/pending" });
    try {
      const res = await fetch(`http://localhost:4000/remove/like/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });

      const post = await res.json();
      if (post.error) {
        dispatch({ type: "remove/like/rejected", error: post.error });
      } else {
        dispatch({
          type: "remove/like/fulfilled",
          payload: { post: post, user: state.application.id },
        });
      }
    } catch (error) {
      dispatch({ type: "remove/like/rejected", error });
    }
  };
};

export default posts;
