import { ContainerWrapperProps } from "@/lib/components/types";
import { Container as ContainerBox } from "@chakra-ui/react";

export default function ContainerWrapper({
  children,
  ...props
}: ContainerWrapperProps) {
  return (
    <ContainerBox pos="relative" maxW={["container.xl"]} {...props}>
      {children}
    </ContainerBox>
  );
}
