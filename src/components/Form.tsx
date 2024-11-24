import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ChevronsUpDown } from "lucide-react"
import React, { useState } from "react"
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
import { Action, initialState } from "@/App"

interface Props {
    state: typeof initialState,
    dispatch: (action: Action) => void
}

const fontFamily = [
    { label: "Arial", value: "arial" },
    { label: "Helvetica", value: "helvetica" },
    { label: "Times New Roman", value: "times-new-roman" },
    { label: "Courier New", value: "courier-new" },
]

export default function Form(props: Props) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    function handleFileInput() {
        const fileElement = document.querySelector<HTMLInputElement>("#picture")

        if (fileElement) {
            fileElement.click()
            fileElement.addEventListener("change", (e) => {
                if (e.target === null) {
                    console.error("Event target not found")
                    return
                }

                const file = e.target.files?.[0]
                if (file) {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        try {
                            const data = JSON.parse(e.target?.result as string)
                            props.dispatch({
                                type: 'SET_CONFIG_NAME',
                                payload: data.configName
                            })
                            props.dispatch({
                                type: 'SET_BOT_NAME',
                                payload: data.botName
                            })
                            props.dispatch({
                                type: 'SET_FONT_FAMILY',
                                payload: data.fontFamily
                            })
                            props.dispatch({
                                type: 'SET_HEADER_COLOR',
                                payload: data.headerColor
                            })
                            props.dispatch({
                                type: 'SET_HEADER_FONT_COLOR',
                                payload: data.headerFontColor
                            })
                            props.dispatch({
                                type: 'SET_BACKGROUND_COLOR',
                                payload: data.backgroundColor
                            })
                            props.dispatch({
                                type: 'SET_CHAT_FONT_COLOR',
                                payload: data.chatFontColor
                            })
                            // props.dispatch({
                            //     type: 'SET_AVATAR_IMAGE',
                            //     payload: data.avatarImage
                            // })
                            // props.dispatch({
                            //     type: 'SET_LAUNCHER_IMAGE',
                            //     payload: data.launcherImage
                            // })
                        } catch (error) {
                            console.error(error)
                        }
                    }
                    reader.readAsText(file)
                }
            })
        } else {
            console.error("File input not found")
        }
    }

    return (
        <div className="flex flex-col gap-y-8 m-10 p-8 bg-neutral-100">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" className="hidden" />
                <Button variant="default" type="button" onClick={handleFileInput}>Load config</Button>
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="text">Config Name</Label>
                <Input type="text" id="text" placeholder="Config Name" value={props.state.configName} onChange={(e: React.ChangeEvent<HTMLInputElement>
                ) => props.dispatch({
                    type: 'SET_CONFIG_NAME',
                    payload: e.target.value
                })} />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="botName">Bot Name</Label>
                <Input type="text" id="botName" placeholder="Bot Name" value={props.state.botName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.dispatch({
                        type: 'SET_BOT_NAME',
                        payload: e.target.value
                    })
                }} />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="fontFamily">Font Family</Label>
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
                                : "Select font style..."}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                                <CommandEmpty>No font found.</CommandEmpty>
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
                <Input type="color" id="headerColor" placeholder="Header Color" value={props.state.headerColor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.dispatch({
                        type: 'SET_HEADER_COLOR',
                        payload: e.target.value
                    })
                }}
                />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="headerFontColor">Header font color</Label>
                <Input type="color" id="headerFontColor" placeholder="Header font color" value={props.state.headerFontColor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.dispatch({
                        type: 'SET_HEADER_FONT_COLOR',
                        payload: e.target.value
                    })
                }} />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="bgColor">Background Color</Label>
                <Input type="color" id="bgColor" placeholder="Background Color" value={props.state.backgroundColor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.dispatch({
                        type: 'SET_BACKGROUND_COLOR',
                        payload: e.target.value
                    })
                }} />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="chatFontColor">Chat font color</Label>
                <Input type="color" id="chatFontColor" placeholder="Chat font color" value={props.state.chatFontColor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.dispatch({
                        type: 'SET_CHAT_FONT_COLOR',
                        payload: e.target.value
                    })
                }} />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="avatarImage">Avatar image</Label>
                <Input type="file" id="avatarImage" placeholder="Avatar image" accept="image/png,image/jpg,image/jpeg" value={props.state.avatarImage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                    const imgElement = document.querySelector<HTMLImageElement>("#profile_picture")

                    props.dispatch({
                        type: 'SET_AVATAR_IMAGE',
                        payload: e.target.value
                    })

                    if (imgElement === null) {
                        console.error("Image element not found")
                        return
                    }

                    const file = e.target.files?.[0]
                    if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                            if (imgElement) {
                                imgElement.src = e.target?.result as string
                            }
                        }
                        reader.readAsDataURL(file)
                    }
                }} />
            </div>
            <div className="flex flex-col items-start gap-3 max-w-sm">
                <Label htmlFor="launcherImage">Launcher image</Label>
                <Input type="file" id="launcherImage" placeholder="Launcher image" accept="image/png,image/jpg,image/jpeg" value={props.state.launcherImage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                    const imgElement = document.querySelector<HTMLImageElement>("#launcher_image")

                    props.dispatch({
                        type: 'SET_LAUNCHER_IMAGE',
                        payload: e.target.value
                    })

                    if (imgElement === null) {
                        console.error("Image element not found")
                        return
                    }

                    const file = e.target.files?.[0]

                    if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                            if (imgElement) {
                                imgElement.src = e.target?.result as string
                            }
                        }
                        reader.readAsDataURL(file)
                    }
                }} />
            </div>
        </div>
    )
}
