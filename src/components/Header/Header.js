import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";
import { getEventsData } from "../../store/selectors/events";
import { Modal } from "antd";
import Login from "../Login";
import AddEvent from "../AddEvent";
import { Button } from "antd";
import "./styles.scss";

function debugBase64(base64URL){
  const win = window.open();
  win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}

const Header = ({ isToken }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(getEventsData);
  const [buttonClick, setButtonClick] = useState("login");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => setIsModalVisible(false);

  const loginHandler = () => {
    setButtonClick("login");
    setIsModalVisible(true);
  };

  const registrationHandler = () => {
    setButtonClick("registration");
    setIsModalVisible(true);
  };

  const addEventHandler = () => {
    setButtonClick("addEvent");
    setIsModalVisible(true);
  };

  const logoutHandler = () => dispatch(logout());

  const exportHandler = () => {
    const dataHref = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;

    debugBase64(dataHref)
  };

  const renderLogin = () => {
    return (
      <>
        <Button type="primary" onClick={loginHandler}>
          Login
        </Button>
        <Button type="primary" onClick={registrationHandler}>
          Registration
        </Button>
      </>
    );
  };

  const renderLogout = () => {
    return (
      <>
        <Button type="primary" onClick={logoutHandler}>
          Logout
        </Button>
        <Button type="primary" onClick={addEventHandler}>
          Add Event
        </Button>
        <Button type="primary" onClick={() => exportHandler()}>
          Export JSON
        </Button>
      </>
    );
  };

  return (
    <div className="header">
      {isToken ? renderLogout() : renderLogin()}

      <Modal
        visible={isModalVisible}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
      >
        {buttonClick !== "addEvent" ? (
          <Login hideModal={handleCancel} logEvent={buttonClick} />
        ) : (
          <AddEvent hideModal={handleCancel} />
        )}
      </Modal>
    </div>
  );
};

export default Header;
