import { Button } from "@chakra-ui/button";
import { useState } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState(["elem", "xd", 2]);

  return (
    <>
      {lista.map((x, index) => (
        <p key={index}>{x}</p>
      ))}
      <Button onClick={() => setLista(["elem", "xd", "3x", 2, "aaa"])}>
        Ponle mi nombre 
      </Button>
    </>
  );
}

export function MiComponente() {
  return <h1>xd</h1>;
}
