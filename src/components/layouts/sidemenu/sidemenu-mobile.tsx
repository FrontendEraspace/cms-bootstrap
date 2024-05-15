import { For, Show, Text } from "@/components/elements";
import Box from "@/components/elements/box/box";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import { forwardRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const dummyMenu = [
  {
    title: "menu1",
    submenu: [
      {
        name: "submenu1",
      },
      {
        name: "submenu2",
      },
    ],
  },
  {
    title: "menu2",
  },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};

const SideMenuMobile = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isOpen, onClose, isMobile } = props;

  useEffect(() => {
    if (isMobile) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={"sidemenu"}
          variants={{
            open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            closed: {
              opacity: 0,
              x: -100,
              transition: {
                duration: 0.2,
              },
            },
          }}
          initial={"closed"}
          animate={isOpen ? "open" : "closed"}
          exit={"closed"}
        >
          <Box className="fixed bottom-0 left-0 top-0 z-[100] mr-[20rem] w-64" ref={ref}>
            <div className="flex h-full max-h-screen flex-col border-r bg-amber-500">
              <div className="flex h-[60px] items-center space-x-4 border-b border-b-amber-950 px-6">
                <Link className="flex items-center gap-2 font-semibold" href="#dashboard">
                  <span>CMS Dealer Portal</span>
                </Link>
                <IconX className="cursor-pointer" onClick={() => onClose()} />
              </div>
              <nav className="flex-1 space-y-3 overflow-auto py-4">
                <For each={dummyMenu}>
                  {menu => (
                    <ul key={menu.title} className="grid gap-1 px-4 text-sm font-medium">
                      {/* if has submenu render collapsible */}
                      <Show
                        when={Boolean(menu.submenu)}
                        fallback={
                          <>
                            <li>
                              <Link className="inline-flex items-center gap-2" href="#menu">
                                <span className="text-lg font-bold">{menu.title}</span>
                              </Link>
                            </li>
                            <Separator className="w-full bg-gray-700" />
                          </>
                        }
                      >
                        <Collapsible>
                          <CollapsibleTrigger className="flex w-full items-center justify-between">
                            <Text className="text-lg font-bold">{menu.title}</Text>
                            <ChevronDownIcon />
                          </CollapsibleTrigger>
                          <div className="space-y-1">
                            <For each={menu?.submenu ?? []}>
                              {submenu => (
                                <CollapsibleContent
                                  key={submenu.name}
                                  className="grid gap-y-8 space-y-12 rounded-md pl-6 transition-all duration-200 hover:bg-amber-50"
                                >
                                  <Text className="cursor-pointer py-2">{submenu.name}</Text>
                                </CollapsibleContent>
                              )}
                            </For>
                          </div>
                        </Collapsible>
                        <Separator className="w-full bg-gray-700" />
                      </Show>
                    </ul>
                  )}
                </For>
              </nav>
            </div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

SideMenuMobile.displayName = "SideMenuMobile";

export default SideMenuMobile;
