import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}
export const NavLink: React.FC<NavLinkProps> = ({
  icon: IconComponent,
  label,
  href,
}) => (
  <NavigationMenuItem>
    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
      <a
        className="text-lg"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent className="mt-1 mr-2" />
        {label}
      </a>
    </NavigationMenuLink>
  </NavigationMenuItem>
);
