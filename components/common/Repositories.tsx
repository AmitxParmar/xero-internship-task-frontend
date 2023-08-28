"use client"

import { Github } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { IRepositories } from "@/app/dashboard/page"

const Repositories: React.FC<{ repositories: IRepositories }> = ({
  repositories,
}) => {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Github Repositories">
          {repositories.map(() => (
            <CommandItem className="">
              <Github className="mr-2 h-4 w-4" />
              <span>RepositoryName</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default Repositories
