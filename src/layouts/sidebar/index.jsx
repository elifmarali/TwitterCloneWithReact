import { Logo } from "./logo";
import Menu from "./menu";
import Button from "~/components/Button";
import Account from "./menu/account";

function Sidebar() {
  return (
    <div className="flex flex-col w-[275px] min-h-screen max-h-screen px-2 overflow-auto">
      <Logo />
      <Menu />
      <Button text="Gönder" size="large" />
      <div className="mt-auto">
        <Account />
      </div>
    </div>
  );
}

export default Sidebar;
