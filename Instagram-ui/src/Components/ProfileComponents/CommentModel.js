import React from 'react';

import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

const CommentModel = ({onClose,isOpen}) => {
    return (
        <div>
            <Modal onClose={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                
                    </ModalBody>
                
                </ModalContent>
            </Modal>
        </div>
    );
}

export default CommentModel;
