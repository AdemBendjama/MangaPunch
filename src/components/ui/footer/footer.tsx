import CopyrightIcon from "@/components/icons/copyright-icon";
import GithubIcon from "@/components/icons/github-icon";
import LineIcon from "@/components/icons/line-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import MailIcon from "@/components/icons/mail-icon";
import Image from "next/image";

function Footer() {
  return (
    <div className="sm:h-[12.5rem] h-[11rem] bg-secondary text-secondary-foreground flex lg:px-[10rem] sm:px-[8rem] pl-[20vw] justify-between">
      <div className="flex lg:gap-[3rem] lg:w-auto justify-between w-full  overflow-hidden">
        <div className="flex flex-col gap-[0.5rem] py-[3rem] items-center justify-end">
          <div className="flex gap-[1.125rem]">
            <a href="https://github.com/AdemBendjama/" target="_blank">
              <GithubIcon className="stroke-secondary-foreground sm:h-[2.75rem] sm:w-[2.75rem] h-[1.75rem] w-[1.75rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/adem-bendjama-64b88b239/"
              target="_blank"
            >
              <LinkedinIcon className="stroke-secondary-foreground sm:h-[2.75rem] sm:w-[2.75rem] h-[1.75rem] w-[1.75rem]" />
            </a>
            <a href="mailto:adembendjama22@gmail.com" target="_blank">
              <MailIcon className="stroke-secondary-foreground sm:h-[2.75rem] sm:w-[2.75rem] h-[1.75rem] w-[1.75rem]" />
            </a>
          </div>
          <div>
            <LineIcon className="stroke-secondary-foreground sm:w-[9.5625rem] sm:h-[0.1875rem] w-[7.5rem] h-[0.1875rem]" />
          </div>
          <div className="flex items-start gap-[0.125rem]">
            <CopyrightIcon className="stroke-secondary-foreground sm:h-[1.1875rem] sm:w-[0.9375rem] h-[0.9375rem] w-[0.8125rem]" />
            <span className="sm:text-sm text-xs">MangaPunch 2024</span>
          </div>
          <div className="lg:hidden text-muted-foreground sm:text-xs text-[0.5rem] flex gap-[0.125rem]">
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
        <Image
          className="sm:block hidden"
          src="/assets/images/footer.png"
          width={188}
          height={200}
          alt="footer image"
          unoptimized={true}
        />
        <div className="sm:hidden flex self-end items-end w-[7.5rem] h-[9rem] relative">
          <Image
            className="object-left-bottom"
            src="/assets/images/footer-mobile.png"
            fill={true}
            alt="footer image"
            unoptimized={true}
          />
        </div>
      </div>

      <div className="lg:flex lg:py-[3rem] lg:items-end hidden">
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
