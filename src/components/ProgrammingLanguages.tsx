import React from "react";

const ProgrammingLanguages = ({ languages }: { languages: string[] }) => {
  if (languages.length === 0) {
    return <div>No Porgramming Found</div>;
  }
  return (
    <div>
      {languages.map((language, index) => {
        return <li key={index}>{language} </li>;
      })}
    </div>
  );
};

export default ProgrammingLanguages;
