import {
    FaRegBell,
    FaMoon,
    FaSun,
} from 'react-icons/fa';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input, Link,
    Navbar,
    NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
    User
} from "@nextui-org/react";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useTheme} from "next-themes";
import {HiSearch} from "react-icons/hi";

const TopNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Dashboard",
        "Settings",
        "Log Out",
    ];
    return (
        <Navbar
            maxWidth={"full"}
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:flex hidden" justify={"start"}>
                <Search />
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeIcon />
                </NavbarItem>
                <NavbarItem>
                    <BellIcon />
                </NavbarItem>
                <NavbarItem>
                    <UserCircle />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

const ThemeIcon = () => {
    const { theme, setTheme } = useTheme()
    const handleMode = () => theme === 'light' ? setTheme('dark') : setTheme('light');
    return (
        <span onClick={handleMode}>
      {theme === 'dark' ? (
          <FaSun size='18' className='top-navigation-icon' />
      ) : (
          <FaMoon size='18' className='top-navigation-icon' />
      )}
    </span>
    );
};

const Search = () => (
    <Input
        classNames={{
            base: "w-3/5 lg:w-3/5 sm:w-full px-2 h-10 mx-4",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        endContent={<HiSearch size={20} />}
        type="search"
    />
);
const BellIcon = () => <FaRegBell size='18' className='top-navigation-icon' />;
const UserCircle = () => {
    const { logout, user } = useAuth0();
    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }});
    return(
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: false,
                        src: user?.picture,
                    }}
                    className="transition-transform top-navigation-icon"
                    name={user?.name}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem className={"dark:text-gray-600"} key="settings">
                    My Settings
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={() => logoutWithRedirect()}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default TopNavigation;
