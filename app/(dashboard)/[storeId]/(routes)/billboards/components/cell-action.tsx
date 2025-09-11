"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BillboardColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

interface CellActionProps {
    data: BillboardColumn;
}


export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">
                        Open menu
                    </span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
                <DropdownMenu>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Id
                </DropdownMenu>
                <DropdownMenu>
                    <Edit className="mr-2 h-4 w-4" />
                    Update
                </DropdownMenu>
                <DropdownMenu>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                </DropdownMenu>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};