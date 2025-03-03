"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, TextField, Button } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type TitleInputProps = {
  title: string;
  setTitle: (title: string) => void;
};

type CodeEditorProps = {
  code: string;
  setCode: (code: string) => void;
};

type SaveButtonProps = {
  handleSave: () => void;
};

type CodeEditorCardProps = {
  title: string;
  setTitle: (title: string) => void;
  code: string;
  setCode: (code: string) => void;
  handleSave: () => void;
  onClick?: () => void;
};

type BackButtonProps = {
  onClick?: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const router = useRouter();
  return (
    <Button
      variant="text"
      color="secondary"
      onClick={onClick || (() => router.push("/"))}
      className="mb-4"
      startIcon={<KeyboardBackspaceIcon />}
    >
      Back to Home
    </Button>
  );
};

const TitleInput: React.FC<TitleInputProps> = ({ title, setTitle }) => (
  <TextField
    label="Title"
    variant="outlined"
    fullWidth
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="bg-white"
  />
);

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  function encodeBase64(str: string) {
    return btoa(str);
  }

  function decodeBase64(encodedStr: string) {
    return atob(encodedStr);
  }
  return <CodeMirror
    value={decodeBase64(code)}
    height="350px"
    extensions={[javascript()]}
    theme={oneDark}
    onChange={(value) => setCode(value)}
    className="border rounded-lg overflow-hidden"
  />
}

const SaveButton: React.FC<SaveButtonProps> = ({ handleSave }) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    onClick={handleSave}
    className="mt-4 py-3 text-lg"
  >
    Save
  </Button>
);

export const CodeEditorCard: React.FC<CodeEditorCardProps> = ({
  title,
  setTitle,
  code,
  setCode,
  handleSave,
  onClick,
}) => (
  <Card className="shadow-xl rounded-3xl">
    <BackButton onClick={onClick} />
    <CardContent className="space-y-6">
      <TitleInput title={title} setTitle={setTitle} />
      <CodeEditor code={code} setCode={setCode} />
      <SaveButton handleSave={handleSave} />
    </CardContent>
  </Card>
);

const CodePage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleSave = () => {
    console.log("Saved Code:", { title, code });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      <CodeEditorCard
        title={title}
        setTitle={setTitle}
        code={code}
        setCode={setCode}
        handleSave={handleSave}
      />
    </div>
  );
};

export default CodePage;
