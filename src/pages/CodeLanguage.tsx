import { javascript } from '@codemirror/lang-javascript';
import { EditorView, basicSetup } from 'codemirror';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function CodeLanguage() {
  const { language } = useParams();
  const editorRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const codeEditor = new EditorView({
        doc: '//Welcome to Sushi Code!',
        extensions: [basicSetup, javascript()],
        parent: editorRef.current,
      });

      return () => codeEditor.destroy();
    }
  }, []);

  return (
    <>
      <section id="code-editor" ref={editorRef} />
      <section id="terminal">
        <h1>Terminal</h1>
      </section>
    </>
  );
}

export default CodeLanguage;
