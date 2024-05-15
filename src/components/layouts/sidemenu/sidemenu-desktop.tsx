import { ClientOnly, For, Show, Text } from "@/components/elements";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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

const SideMenuDesktop = () => {
  return (
    <ClientOnly>
      <div className="flex h-full min-h-screen min-w-[20rem] flex-col overflow-hidden border-r bg-amber-500">
        <div className="flex h-[60px] items-center border-b border-b-amber-950 px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#dashboard">
            <span>CMS Dealer Portal</span>
          </Link>
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
    </ClientOnly>
  );
};

export default SideMenuDesktop;
