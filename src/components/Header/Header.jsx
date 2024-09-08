import "./Header.scss";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("viewMindMap");

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (item) => {
    setSelectedNavItem(item);
    setMenuOpen(false);
  };

  const navContent = {
    exploreChats: {
      heading: "User Chats",
      text: "Conversations of your website visitors are shown here",
    },
    businessLeads: {
      heading: "Leads for you",
      text: "Data of users who have shown interest in your products/services and have shared their contact details",
    },
    viewMindMap: {
      heading: "Chatbot Mind Map",
      text: "This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here.",
    },
    manageTeam: {
      heading: "Manage your Team",
      text: "View team, Add new members, remove members, etc.",
    },
    configureChatbot: {
      heading: "Personalize the chatbot",
      text: "Customize the look & feel of the chatbot: colors, personality, chatbot name, logo, business actions, and much more!",
    },
  };

  return (
    <div className="header">
      <div className="left">
        <h3>{navContent[selectedNavItem]?.heading}</h3>
        <span>{navContent[selectedNavItem]?.text}</span>
      </div>
      <div className="right">
        <button className="tour-button">Guided Tour</button>
        <div className="dropdown">
          <label>Select Org</label>
          <select defaultValue="">
            <option value="" disabled hidden></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <Tooltip title="Open Menu" placement="bottom-start" arrow>
          <div className="profile">
            <div className="avatar" onClick={handleMenuToggle}>
              M
            </div>
            {menuOpen && (
              <div className="menu">
                <ul>
                  <li onClick={() => handleMenuItemClick("exploreChats")}>
                    <span>Explore Chats</span>
                  </li>
                  <li onClick={() => handleMenuItemClick("businessLeads")}>
                    <span>Business Leads</span>
                  </li>
                  <li onClick={() => handleMenuItemClick("viewMindMap")}>
                    <span>View Mind Map</span>
                  </li>
                  <li onClick={() => handleMenuItemClick("manageTeam")}>
                    <span>Manage Team</span>
                  </li>
                  <li onClick={() => handleMenuItemClick("configureChatbot")}>
                    <span>Configure Chatbot</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
