"use client";
import React, { ReactNode, useRef, useState } from "react";
import Draggable from "react-draggable";

type DraggableWrapperProps = {
  children: ReactNode;
  defaultPosition?: { x: number; y: number };
  bounds?: string | { left: number; top: number; right: number; bottom: number };
}

const DraggableWrapper: React.FC<DraggableWrapperProps> = ({
  children,
  defaultPosition = { x: 0, y: 0 },
  bounds = "parent",
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={defaultPosition}
      bounds={bounds}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        ref={nodeRef}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          display: "inline-block",
        }}
      >
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableWrapper;
