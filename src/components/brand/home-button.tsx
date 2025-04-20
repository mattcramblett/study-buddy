import Link from "next/link";
import { Button } from "../ui/button";

export function HomeButton() {
  return (
    <Button variant="link" className="text-xl">
      <Link href="/">
        🤓
      </Link>
    </Button>
  );
}
