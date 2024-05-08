import { Show } from "@/components/elements";
import { forwardRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import SideMenuDesktop from "./sidemenu-desktop";
import SideMenuMobile from "./sidemenu-mobile";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const SideMenu = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const isMobile = useMediaQuery("( max-width: 1024px )");
  const { onClose, isOpen } = props;

  return (
    <>
      <Show when={!isMobile}>
        <SideMenuDesktop />
      </Show>
      <Show when={isMobile}>
        <SideMenuMobile isOpen={isOpen} setIsOpen={onClose} isMobile={isMobile} ref={ref} />
      </Show>
    </>
  );
});

SideMenu.displayName = "SideMenu";

export default SideMenu;
