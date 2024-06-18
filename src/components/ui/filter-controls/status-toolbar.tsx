import { Button } from "../button";

function StatusToolBar() {
  return (
    <div>
      <Button className="xs:w-auto w-1/3 text-sm h-[2.5rem] bg-primary text-primary-foreground leading-none rounded-e-[0]">
        Reading
      </Button>
      <Button className="xs:w-auto w-1/3 text-sm h-[2.5rem] bg-primary text-primary-foreground leading-none rounded-[0]">
        Planning
      </Button>
      <Button className="xs:w-auto w-1/3 text-sm h-[2.5rem] bg-primary text-primary-foreground leading-none rounded-s-[0]">
        Completed
      </Button>
    </div>
  );
}

export default StatusToolBar;
