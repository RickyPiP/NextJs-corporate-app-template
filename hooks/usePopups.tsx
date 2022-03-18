import { useState } from "react";

// const useDropdown = (elem: HTMLDivElement) => {
const usePopups = (): any => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const setClose = () => {
    setIsOpen(false);
  };

  return [isOpen, toggle, setClose];
};

export default usePopups;

//----------------

// useEffect(() => {
//   const handleOnClick = (event: MouseEvent) => {
//     // if (ref && ref.current.contains(event.target as HTMLElement)) {
//     //   return;
//     // }
//     // console.log("RICKY");
//     setIsOpen(false);
//   };
//   document.addEventListener("mousedown", handleOnClick);
//   return () => {
//     document.removeEventListener("mousedown", handleOnClick);
//   };
// }, [isOpen]);

// const toggle = useCallback(() => setIsOpen(isOpen => !isOpen), []);
