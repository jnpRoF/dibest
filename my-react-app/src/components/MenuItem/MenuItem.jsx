import { useState } from "react";

const MenuItem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  return (
    <li className="menu-item">
      <button onClick={handleClick}>{item.name}</button>
      {isOpen && (
        <ul className="dropdown-content">
          {item.children.map((childItem) => (
            <li key={childItem.id}>
              <a href={childItem.url}>{childItem.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem
