"use client"; 
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css"; 

const ExcalidrawWrapper = () => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Excalidraw />
    </div>
  );
};

export default ExcalidrawWrapper;
