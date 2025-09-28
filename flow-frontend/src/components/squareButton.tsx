import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SquareIconButton({ icon, label, onClick, className }: { 
    icon: React.ReactNode; 
    label: string; 
    onClick?: () => void; 
    className?: string; 
}) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button type="button" variant="outline" className={cn("w-fit h-auto aspect-square dark:text-white", className)} onClick={onClick}>
                    {icon}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <span>{label}</span>
            </TooltipContent>
        </Tooltip>
    );
}