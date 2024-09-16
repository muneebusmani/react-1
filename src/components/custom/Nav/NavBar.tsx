import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import * as Icon from "@radix-ui/react-icons";
import { NavLink } from "./NavLink";

interface NavbarProps {
  className?: string;
}

export const NavBar: React.FC<NavbarProps> = (props) => {
  return (
    <NavigationMenu className={`my-5 ${props.className}`}>
      <NavigationMenuList>
        <NavLink
          icon={Icon.HomeIcon}
          label="Home"
          href="https://www.google.com"
        />
        <NavLink
          icon={Icon.ListBulletIcon}
          label="My List"
          href="https://www.google.com"
        />
        <NavLink
          icon={Icon.ChatBubbleIcon}
          label="Discussion"
          href="https://www.google.com"
        />
        <NavLink
          icon={Icon.LightningBoltIcon}
          label="Trending"
          href="https://www.google.com"
        />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
