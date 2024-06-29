import Link from "next/link";
import { ButtonWithIcon } from "../button-variants/button-with-icon";

function ReadMangaDex({ href }: { href: string }) {
  return (
    <Link href={href}>
      <ButtonWithIcon className="w-full" type="plus">
        Read Manga
      </ButtonWithIcon>
    </Link>
  );
}

export default ReadMangaDex;
