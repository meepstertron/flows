import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import EditorPage from './pages/editor';
import EditorOverlay from './overlays/editorOverlay';

function Routes() {
    return ( 
        <Router>
            <Switch>
                <Route path="/editor" element={
                    <EditorOverlay>
                        <EditorPage />
                    </EditorOverlay>
                } />
            </Switch>
        </Router>
     );
}

export default Routes;