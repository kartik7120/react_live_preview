import { Action, initialState } from "@/App";
import ChatBot from "./ChatBot";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
    state: typeof initialState,
    dispatch: (action: Action) => void
}

export default function LivePreview(props: Props) {

    async function handleFileInput() {
        try {
            const data = JSON.stringify(props.state)
            const blob = new Blob([data], { type: 'application/json' })
            const fileName = props.state.configName.length > 0 ? props.state.configName : "config"
            const file = new File([blob], props.state.configName + ".json")
            const a = document.createElement('a')

            a.href = URL.createObjectURL(file)
            a.download = fileName + ".json"
            a.click()
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-between m-5 bg-neutral-100 p-8">
            <div className="flex flex-row items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-lg text-center font-bold">Live Preview</p>
            </div>
            <ChatBot state={props.state} dispatch={props.dispatch} />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" className="hidden" />
                <Button variant="default" type="button" onClick={handleFileInput}>Download config</Button>
                <p className="text-lg text-gray-500">{props.state.configName.length > 0 ? props.state.configName + ".json" : "config.json"}</p>
            </div>
        </div>
    )
}
