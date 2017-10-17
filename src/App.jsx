import React from 'react';
import { render } from 'react-dom';
import { Editor, EditorState } from 'draft-js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = editorState => this.setState({ editorState });
  }

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

render(<App />, document.querySelector('#app'));
