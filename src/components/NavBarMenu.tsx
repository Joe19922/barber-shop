import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./styles/NavBarMenu.module.css";

interface NavItem {
  label: string;
  route: string;
}

interface Props {
  items: NavItem[];
}

function NavBarMenu({ items }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        colorScheme="yellow"
        aria-label=""
        variant="outline"
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <HStack
            justifyContent="space-between"
            padding="10px"
            borderBottomWidth="1px"
          >
            <DrawerHeader></DrawerHeader>
            <CloseButton onClick={onClose} />
          </HStack>
          <DrawerBody padding="4rem">
            <ul>
              {items.map((item) => (
                <li className={styles.NavBarMenuList}>
                  <a href={item.route}>{item.label}</a>
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBarMenu;
