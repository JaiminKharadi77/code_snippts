"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, TextField, Button } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type CodeProps = {
  params: { codeId: string };
};

const Code: React.FC<CodeProps> = ({ params }) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSave = () => {
    console.log("Saved Code:", { title, code });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      <Button
        variant="text"
        color="secondary"
        onClick={() => router.push("/")}
        className="mb-4"
        startIcon={<KeyboardBackspaceIcon />}
      >
        Back to Home
      </Button>
      <Card className="shadow-xl rounded-3xl">
        <CardContent className="space-y-6">
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white"
          />
          <CodeMirror
            value={code}
            height="350px"
            extensions={[javascript()]}
            theme={oneDark}
            onChange={(value) => setCode(value)}
            className="border rounded-lg overflow-hidden"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSave}
            className="mt-4 py-3 text-lg"
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Code;
