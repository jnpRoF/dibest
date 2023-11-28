
import MenuItem from "../MenuItem/MenuItem";

const Menu = ({items}) => {
  return (
    <ul className="flex space-x-4">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Menu
