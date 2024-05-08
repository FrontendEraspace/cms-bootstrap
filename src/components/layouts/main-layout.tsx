import useDisclosure from "@hooks/use-disclosure";
import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Flex, Box } from "@elements";
import { Header } from "@views/dashboard/header";
import { SideMenu } from "@views/dashboard/sidemenu";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { onClose, isOpen, onOpen } = useDisclosure(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => onClose());

  return (
    <Flex dir="row" className="min-h-screen w-full">
      <SideMenu isOpen={isOpen} onClose={onClose} ref={ref} />
      <Box className="w-full">
        <Header onOpen={onOpen} />
        <section className="container">{children}</section>
      </Box>
    </Flex>
  );
}
