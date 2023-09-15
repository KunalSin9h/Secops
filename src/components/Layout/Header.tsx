import { BellIcon } from "@/lib/icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Header() {
  return (
    <div className="h-16 px-4 flex justify-between items-center">
      <div className="invisible">Core</div>
      <div className="flex gap-4 items-center justify-around">
        <Input type="text" placeholder="Search" />
        <Popover>
          <PopoverTrigger>
            <Button variant={"secondary"} size="icon" className="bg-white">
              <div className="m-4">
                <BellIcon />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 mx-4 h-[32rem]">
            <ScrollArea className="w-[22rem] h-[30rem]">
              <ul id="alerts"></ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
