import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 h-12 w-full rounded bg-gray-800  focus-within:ring-2 focus-within:ring-cyan-300 ">
      {props.children}
    </div>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  );
}

interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputInput.displayName = "TextInput.Input";
TextInputRoot.displayName = "TextInput.Root";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
