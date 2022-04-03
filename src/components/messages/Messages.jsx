import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getConversation } from "../../redux/features/conversation";
import { getMessage, postMessages } from "../../redux/features/message";
import Conversation from "./conversation/Conversation";
import Message from "./message/Message";
import styles from "./Messages.module.css";
import { io } from "socket.io-client";
import { useRef } from "react";

const Messages = () => {
  const state = useSelector((state) => state.conversation.conversation);
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  const [conversation, setConversation] = useState();
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const [arrivelMessages, setArrivelMessages] = useState(null);
  const [tryMessages, setTryMessages] = useState(null)

  const socket = useRef();
  const userId = useSelector((state) => state.application.id);

  useEffect(() => {
    socket.current = io("http://localhost:8900");

  });
  useEffect(()=>{
  
    socket.current.on("getMessage", (data) => {
      console.log(data);
      setArrivelMessages({
        sender: data.senderId,
        text: data.text,
      });
      console.log(arrivelMessages)
    });
    
  },arrivelMessages)

  useEffect(() => {
    arrivelMessages &&
      currentChat?.members.includes(arrivelMessages.sender) &&
      setTryMessages((prev)=>[...prev,arrivelMessages]);

      // setMessages((prev) => [...prev, arrivelMessages]);
      // console.log(tryMessages)
  });


  useEffect(() => {
    socket.current.emit("addUser", userId);
    // socket.current.on("getUsers", (users) => {
    // });
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMessage(currentChat?._id));
    setMessages(message);
  }, [currentChat]);

  useEffect(() => {
    dispatch(getConversation());
  }, [dispatch]);
  const handleSubmit = (conversationId, text) => {
    dispatch(postMessages(conversationId, text));
    const messagePost = {
      sender: userId,
      text: text,
      conversationId: currentChat._id
    }
    const receiverId = currentChat?.members.find(
      (member) => member._id !== userId
      
    );
    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId: receiverId._id,
      text: newMessages,
    });
    setMessages([...messages, messagePost])
  };

  return (
    <>
      <div className={styles.messages}>
        <div className={styles.yourNicknameWrapper}>
          <span className={styles.yourNickname}>Tommy</span>
        </div>

        <div className={styles.chatUserNickname}>
          <span className={styles.yourNickname}>
            <span>{conversation?.firstname}</span>
          </span>
        </div>
      </div>

      <div className={styles.messagesBlock}>
        <div className={styles.chats}>
          {state.map((c) => {
            return (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation
                  conversations={c}
                  setConversation={setConversation}
                  userId={userId}
                />
              </div>
            );
          })}
        </div>
        {currentChat ? (
          <>
            <div className={styles.dialogues}>
              {tryMessages?.map((m) => {
                return <Message message={m} />;
              })}

              <div className={styles.inpWrapper}>
                <div className={styles.inpBtn}>
                  <input
                    placeholder="Введите сообщение.."
                    type="text"
                    value={newMessages}
                    onChange={(e) => setNewMessages(e.target.value)}
                  />
                  <button
                    onClick={() => handleSubmit(currentChat._id, newMessages)}
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <span>Открыть беседу и начать чат</span>
        )}
      </div>
    </>
  );
};

export default Messages;
