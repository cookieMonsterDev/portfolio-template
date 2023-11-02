import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.css";
import { uploadImage } from "@/lib/firebase";

interface QuillProps {
  value: string;
  onChange: (item: string) => void;
}

const Quill: React.FC<QuillProps> = ({ value, onChange }) => {
  const editorRef = useRef<any>(null);

  const imageUploader = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file: File | null = input.files ? input.files[0] : null;

      if (!file) return;

      const url = await uploadImage(file.name, file);

      if (!url) return;

      insertToEditor(url);
    };
  };

  const insertToEditor = (url: string) => {
    editorRef.current.getEditor().insertEmbed(null, "image", url);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageUploader,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      ref={editorRef}
    />
  );
};

export default Quill;
