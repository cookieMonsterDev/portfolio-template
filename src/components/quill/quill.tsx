import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.css";

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
      const formData = new FormData();

      if (!file) return;

      formData.append("image", file);
      const fileName = file.name;

      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const imageUrl: string | null = e.target.result as string;
          if (imageUrl) {
            insertToEditor(imageUrl);
          }
        }
      };

      reader.readAsDataURL(file);
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
