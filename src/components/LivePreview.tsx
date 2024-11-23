import ChatBot from "./ChatBot";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LivePreview() {

    function handleFileInput() {
       console.log("Starting download of config file")
    }

    return (
        <div className="flex flex-col items-center justify-between m-5 bg-stone-400 p-8">

            <div className="flex flex-row items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-lg text-center font-bold">Live Preview</p>
            </div>
            <ChatBot />

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" className="hidden" />
                <Button variant="default" type="button" onClick={handleFileInput}>Download config</Button>
            </div>
        </div>
    )
}
