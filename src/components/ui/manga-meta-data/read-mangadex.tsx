import Link from "next/link";
import { ButtonWithIcon } from "../button-variants/button-with-icon";

function ReadMangaDex({ href }: { href: string }) {
  return (
    <Link href={href}>
      <ButtonWithIcon className="w-full" variant="mangadex" type="plus">
        Read Manga
      </ButtonWithIcon>
    </Link>
  );
}

export default ReadMangaDex;
