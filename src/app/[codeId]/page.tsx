type CodeProps = {
    params: { codeId: string };
  };
  
  const Code: React.FC<CodeProps> = ({ params }) => {
    return <div>Dynamic ID: {params.codeId}</div>;
  };
  
  export default Code;
  