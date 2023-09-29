"use client"

import {Button} from "@nextui-org/react";

export default function Users({setEditable, onOpen}) {
  return (
      <div>
          This is user
          <Button onPress={() => {
              onOpen()
              setEditable(true)
          }}>
              Edit
          </Button>
      </div>
  )
}

