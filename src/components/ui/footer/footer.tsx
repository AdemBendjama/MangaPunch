import CopyrightIcon from "@/components/icons/copyright-icon";
import GithubIcon from "@/components/icons/github-icon";
import LineIcon from "@/components/icons/line-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import MailIcon from "@/components/icons/mail-icon";
import Image from "next/image";

function Footer() {
  return (
    <div className="h-[12.5rem] bg-secondary text-secondary-foreground flex px-[10rem] justify-between">
      <div className="flex gap-[3rem]">
        <div className="flex flex-col gap-[0.5rem] py-[3rem] items-center justify-end">
          <div className="flex gap-[1.125rem]">
            <a href="https://github.com/AdemBendjama/" target="_blank">
              <GithubIcon className="stroke-secondary-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/adem-bendjama-64b88b239/"
              target="_blank"
            >
              <LinkedinIcon className="stroke-secondary-foreground" />
            </a>
            <a href="mailto:adembendjama22@gmail.com" target="_blank">
              <MailIcon className="stroke-secondary-foreground" />
            </a>
          </div>
          <LineIcon className="stroke-secondary-foreground" />
          <div className="flex items-center gap-[0.125rem]">
            <CopyrightIcon className="stroke-secondary-foreground" />
            <span className="text-sm">MangaPunch 2024</span>
          </div>
        </div>
        <Image
          src="/assets/images/footer.png"
          width={188}
          height={200}
          alt="footer image"
        ></Image>
      </div>

      <div className="flex py-[3rem] items-end">
        <div className="text-muted-foreground text-xs flex gap-[0.125rem]">
          <span>Logo Designed By</span>
          <a
            className="underline"
            href="https://www.flaticon.com/free-icon/manga_4943305?term=manga&page=1&position=12&origin=search&related_id=4943305"
            target="_blank"
          >
            Freepik
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
