import {
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { useWindowSize } from "rooks";
import Confetti from "react-confetti";

interface ModalComponentProps extends PropsWithChildren<ModalProps> {
  isOpen: boolean;
  confetti?: boolean;
  onClose(): void;
  modalContentStyle?: ModalContentProps;
  modalBodyStyle?: ModalBodyProps;
}

const ModalComponent: FC<ModalComponentProps> = ({
  children,
  isOpen,
  confetti,
  onClose,
  modalContentStyle,
  modalBodyStyle,
  ...props
}): JSX.Element => {
  const { innerHeight, innerWidth } = useWindowSize();

  return (
    <>
      {isOpen && confetti && <Confetti width={innerWidth || 300} height={innerHeight || 400} />}

      <Modal
        isCentered
        blockScrollOnMount={true}
        scrollBehavior={"inside"}
        isOpen={isOpen}
        size={"lg"}
        onClose={onClose}
        motionPreset="scale"
        {...props}
      >
        <ModalOverlay bg="#00000020" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent
          w={{ base: "90vw", md: "60vw" }}
          borderRadius={10}
          py="1%"
          {...modalContentStyle}
        >
          <ModalBody {...modalBodyStyle}>
            <>{children}</>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
