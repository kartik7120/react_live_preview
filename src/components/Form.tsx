import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

const fontFamily = [
    { label: "Arial", value: "arial" },
    { label: "Helvetica", value: "helvetica" },
    { label: "Times New Roman", value: "times-new-roman" },
    { label: "Courier New", value: "courier-new" },
]

export default function Form() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    function handleFileInput() {
        const fileElement = document.querySelector<HTMLInputElement>("#picture")

        if (fileElement) {
            fileElement.click()
        } else {
            console.error("File input not found")
        }
    }

    return (
        <div className="flex flex-col gap-y-8 m-10 p-8 bg-neutral-100">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" className="hidden"/>
                <Button variant="default" type="button" onClick={handleFileInput}>Load config</Button>
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="text">Config Name</Label>
                <Input type="text" id="text" placeholder="Config Name" />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="botName">Bot Name</Label>
                <Input type="text" id="botName" placeholder="Bot Name" />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="fontFamily">Font Family</Label>
                <Input type="text" id="fontFamily" placeholder="Font Family" />
            </div>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {value
                                ? fontFamily.find((framework) => framework.value === value)?.label
                                : "Select framework..."}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {fontFamily.map((framework) => (
                                        <CommandItem
                                            key={framework.value}
                                            value={framework.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            {framework.label}
                                            <Check
                                                className={cn(
                                                    "ml-auto",
                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="headerColor">Header Color</Label>
                <Input type="color" id="headerColor" placeholder="Header Color" />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="headerFontColor">Header font color</Label>
                <Input type="color" id="headerFontColor" placeholder="Header font color" />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="bgColor">Background Color</Label>
                <Input type="color" id="bgColor" placeholder="Background Color" />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="chatFontColor">Chat font color</Label>
                <Input type="color" id="chatFontColor" placeholder="Chat font color" />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="avatarImage">Avatar image</Label>
                <Input type="file" id="avatarImage" placeholder="Avatar image" accept="image/png,image/jpg,image/jpeg"/>
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="launcherImage">Launcher image</Label>
                <Input type="file" id="launcherImage" placeholder="Launcher image" accept="image/png,image/jpg,image/jpeg"/>
            </div>
        </div>
    )
}
