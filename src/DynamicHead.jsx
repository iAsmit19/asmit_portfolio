import { useEffect } from "react";

const DynamicHead = () => {
  // const favicon = document.querySelector("link[rel='icon']");

  useEffect(() => {
    document.title = "Asmit Singh | Frontend Designer & Dev";
  });
  return null;
};

export default DynamicHead;
