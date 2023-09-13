import { NavLink } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "@/lib/constants/navigation";

// million-ignore
export default function Sidebar() {
  return (
    <div className="bg-appdark text-white flex flex-col w-80 p-4">
      <div className="flex items-center gap-2 px-1 py-3">
        <img
          src="/default-user-icon.png"
          className="h-10 w-10"
          alt="User icon"
        />
        <span className="text-lg">KunalSin9h</span>
      </div>
      <div className="flex-1 px-1 py-8">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div>
        <div className="bg-apphigh rounded">
          <div className="border-b border-appbg mx-4">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-2 p-4 align-center justify-center">
            <img src="/logo.png" alt="Secops Logo" className="h-10 w-10" />
            <span className="font-bold text-xl">
              Secops <span className="text-sm pl-2 text-appdim">v1.2.0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({
  item,
}: {
  item: { key: string; path: string; label: string; icon: JSX.Element };
}) {
  return (
    <div className="py-2 px-3">
      <NavLink to={item.path} className="flex items-center gap-2 p-2 rounded">
        {item.icon}
        {item.label}
      </NavLink>
    </div>
  );
}
