import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import XIcon from "@/components/icons/x-icon";
import { LibraryData } from "@/app/user/library/page";

export function CardWithForm({
  onClose,
  trackedData,
}: {
  onClose: () => void;
  trackedData?: Omit<LibraryData, "id">;
}) {
  return (
    <Card className="sm:w-[400px] w-[91vw] relative">
      <XIcon
        className="w-[1.5rem] h-[1.5rem] m-[0.375rem] absolute right-0 stroke-foreground cursor-pointer hover:opacity-70"
        onClick={onClose}
      />
      <CardHeader>
        {/* <CardTitle></CardTitle> */}
        <CardDescription>
          Make sure you save your changes after editing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Select value={trackedData?.status}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="reading">Reading</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="progress">Progess</Label>
              <Input
                id="progress"
                placeholder=""
                type="number"
                min={1}
                max={10}
                defaultValue={trackedData?.chapter}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rating">Rating</Label>
              <Input
                id="rating"
                placeholder=""
                type="number"
                min={1}
                max={10}
                value={trackedData?.rating}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="xs:text-sm text-xs xs:p-[1rem] p-[0.5rem]">
          Save Changes
        </Button>
        <Button
          className="xs:text-sm text-xs xs:p-[1rem] p-[0.5rem]"
          variant="destructive"
        >
          Remove from Library
        </Button>
      </CardFooter>
    </Card>
  );
}
