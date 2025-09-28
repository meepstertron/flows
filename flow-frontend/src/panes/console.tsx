import { X } from "lucide-react";
function ConsolePane() {
    const output = ["This is a log message.", "Another log entry."];

    return (
        <div className=" mx-auto">
            <div className="flex justify-between items-center py-1 border-b border-gray-300 flex-shrink-0">
                <span className="font-bold truncate ml-2">Console Output</span>
                <button className="flex-shrink-0 mr-2">
                    <X width={16} height={16} />
                </button>
            </div>
            <div className=" flex-1 overflow-auto p-2 min-h-0">
                {output.map((msg, index) => (
                    <div key={index} className="break-words">{msg}</div>
                ))}
            </div>
        </div>
    );
}

export default ConsolePane;
