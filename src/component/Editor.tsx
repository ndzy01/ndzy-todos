import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig, Boot } from '@wangeditor/editor';
import markdownModule from '@wangeditor/plugin-md';

Boot.registerModule(markdownModule);
function MyEditor({ value, onChange, showToolbar = true }: any) {
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  const [html, setHtml] = useState<string | undefined>('');
  const toolbarConfig: Partial<IToolbarConfig> = {};
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };

  useEffect(() => {
    setHtml(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (editor == null) return;

      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100, width: '100%' }}>
        {showToolbar && (
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: '1px solid #ccc' }}
          />
        )}
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => {
            setHtml(editor.getHtml());
            onChange(editor.getHtml());
          }}
          mode="default"
          style={{ overflowY: 'hidden', minHeight: 330 }}
        />
      </div>
    </>
  );
}

export default MyEditor;
