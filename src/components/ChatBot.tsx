import { Action, initialState } from "@/App"
import { Input } from "./ui/input"

interface Props {
    state: typeof initialState,
    dispatch: (action: Action) => void
}

export default function ChatBot(props: Props) {

    const fontFamily = props.state.fontFamily || "Arial, sans-serif"
    const headerColor = props.state.headerColor || "#f9f9f9"
    const headerFontColor = props.state.headerFontColor || "#000"
    const chatFontColor = props.state.chatFontColor || "#000"

    return (
        <div className="rounded-lg flex flex-col border" style={{
            fontFamily: fontFamily,
            backgroundColor: props.state.backgroundColor,
        }}>
            <div className="flex flex-col justify-center gap-y-5">
                <div className={`flex flex-row justify-between items-center p-2`} style={{
                    backgroundColor: headerColor,
                    color: headerFontColor
                }}>
                    <p className="font-bold text-lg">{props.state.botName || "Geebo"}</p>
                    <p className="text-white">&#10006;</p>
                </div>
                {/* Chat Section */}
                <div className="flex flex-row gap-x-3 max-w-sm p-3">
                    <div className="rounded-full border self-start object-cover">
                        <img src="" alt="profile_picture" id="profile_picture" />
                    </div>
                    <p className="text-justify text-sm text-wrap" style={{
                        color: chatFontColor
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit debitis earum atque repudiandae officia odio ad quis nihil quae qui veniam sint ipsa quisquam at totam, necessitatibus cumque doloremque.
                        Harum, fuga numquam? Aliquid, nihil perferendis beatae quae tempore sapiente! Distinctio nobis repudiandae accusantium nisi cumque soluta odio error quidem delectus rerum porro nostrum, minus rem cupiditate eaque aut vel!
                    </p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-white flex flex-row items-center justify-between p-6 gap-x-3">
                    <Input disabled type="text" placeholder="Need help? Just type or say it" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                        </svg>
                    </div>
                </div>
                <div className="self-end border rounded-full w-10 h-10 max-w-14 max-h-14">
                    <img src="" alt="launcher_image" id="launcher_image" />
                </div>
            </div>
        </div>
    )
}
