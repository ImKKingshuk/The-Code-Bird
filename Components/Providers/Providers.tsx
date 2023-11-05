import { ReactNode } from "react";

interface ProvidersProps {
  Children: ReactNode;
}

export default function Providers({ Children }: ProvidersProps) {
  return <>{Children}</>;
}
