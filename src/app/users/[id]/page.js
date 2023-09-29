"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {useState} from "react";
import Users from "@/app/users/page";

export default function page({params}) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [editable, setEditable] = useState(false);


    return (
        <>
            <Users
            setEditable={setEditable}
            onOpen={onOpen}/>
            <Button onPress={() => {
                onOpen()
                setEditable(false)
            }}>
                Add
            </Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{editable ? 'Edit user ' + params.id : 'Add new user'}</ModalHeader>
                            <ModalBody>
                                Here is a form
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
  )
}

