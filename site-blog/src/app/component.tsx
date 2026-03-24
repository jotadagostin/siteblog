"use client";
import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("Component lauching an error!");
  }, []);
  return <h2>ErrorComponent</h2>;
};
