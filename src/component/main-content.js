import MyForm from "./my-form";

export default function MainContent({blur}) {
  return (
    <>
      <div className={`main-content ${blur?"myBlur":null}`}>
        <MyForm/>
      </div>
    </>
  );
}
