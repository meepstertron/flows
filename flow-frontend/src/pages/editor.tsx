import ConsolePane from "@/panes/console";
import NodesPane from "@/panes/nodes";
import { Allotment } from "allotment";
import "allotment/dist/style.css";


function EditorPage() {
    return ( 
        <div className="h-full w-full font-mono">

            <Allotment vertical>
                <Allotment.Pane minSize={100} >
                    <NodesPane />
                </Allotment.Pane>
                <Allotment.Pane minSize={100} preferredSize={200} >
                    <ConsolePane />
                </Allotment.Pane>
            </Allotment>
        </div>
     );
}

export default EditorPage;