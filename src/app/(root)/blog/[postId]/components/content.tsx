"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.css";

interface ContentProps {
  data: any;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <ReactQuill
      value={data}
      readOnly
      modules={{
        toolbar: false,
      }}
    />
  );
};

export default Content;
