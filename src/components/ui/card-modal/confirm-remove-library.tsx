import { Button } from "../button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../dialog";

interface ConfirmRemovalModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  isPending?: boolean;
}

export function ConfirmRemovalModal({
  isOpen,
  onOpenChange,
  onConfirm,
  title,
  isPending,
}: ConfirmRemovalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          className="xs:text-sm text-xs xs:p-[1rem] p-[0.5rem]"
          variant="destructive"
          disabled={isPending}
        >
          Remove from Library
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Removal</DialogTitle>
          <DialogDescription>
            Are you sure you want to remove <strong>{title}</strong> from your
            library?
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            variant="destructive"
            disabled={isPending}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
