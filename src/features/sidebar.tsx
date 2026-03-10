import "../index.css";
import "../css/sidebar.css";
import type { View } from "../App";

type SidebarProps = {
  activeView: View;
  onSelect: (view: View) => void;
};

function Sidebar({ activeView, onSelect }: SidebarProps) {
  const items: { id: View; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "tasks", label: "Tasks" },
    { id: "journal", label: "Journal" },
  ];

  return (
    <div className="sidebar-container">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`sidebar-item ${activeView === item.id ? "is-active" : ""}`}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
