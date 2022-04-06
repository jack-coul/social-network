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
  const messagess = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  const [conversation, setConversation] = useState();
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState({});

  const socket = useRef();
  const userId = useSelector((state) => state.application.id);


  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    // socket.current.on("getUsers", (users) => {
    //   setOnlineUsers(
    //     user.followings.filter((f) => users.some((u) => u.userId === f))
    //   );
    // });
  }, [userId]);



  useEffect(() => {
      dispatch(getConversation());

  }, [dispatch, userId]);


  useEffect(() => {
        dispatch(getMessage(currentChat?._id));
        setMessages(messagess)

  }, [currentChat, dispatch, messagess]);

  const handleSubmit =  (conversationId, text) => {
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member._id !== userId
    );

    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: newMessage,
    });

    
   dispatch(postMessages(conversationId, text));
  setMessages([...messages, message]);
      setNewMessage("");
   
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
              {messages?.map((m) => {
                return <Message message={m} userId={userId} />;
              })}

              <div className={styles.inpWrapper}>
                <div className={styles.inpBtn}>
                  <input
                    placeholder="Введите сообщение.."
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button
                    onClick={() => handleSubmit(currentChat._id, newMessage)}
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
  }

export default Messages;
