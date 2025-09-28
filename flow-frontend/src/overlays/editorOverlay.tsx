import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AppWindowIcon } from "lucide-react";
import { Toaster } from "sonner";

function EditorOverlay({ children }: { children: React.ReactNode }) {
    return ( 
        <div className="h-screen w-full flex flex-col">
            <div className="outline outline-gray-400 p-2 flex-shrink-0 flex justify-between">
                <div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Workflow" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="1">Workflow 1</SelectItem>
                            <SelectItem value="2">Workflow 2</SelectItem>
                            <SelectItem value="3">Workflow 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <span className="text-sm text-muted-foreground">0 Nodes</span>
                    <Button variant="outline"><AppWindowIcon /></Button>
                </div>

            </div>
            <div className="flex-1">
                {children}
            </div>
            <Toaster position="bottom-right" richColors/>
        </div>
     );
}

export default EditorOverlay;