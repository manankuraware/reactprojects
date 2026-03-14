import React from "react";
import FormWrapper from "../components/form/FormWrapper";

function Contact() {
  const formConfig = {
    fields: [
      {
        type: "input",
        inputType: "text",
        name: "name",
        label: "Name",
        placeholder: "Enter name",
      },
      {
        type: "input",
        inputType: "email",
        name: "email",
        label: "Email",
        placeholder: "Enter email",
      },
      {
        type: "textarea",
        inputType: "textarea",
        name: "message",
        label: "Message",
        placeholder: "Write message",
      },
    ],

    onSubmit: (data) => {
      const show = JSON.stringify(data);
      window.alert(show);
    },
  };

  return <FormWrapper config={formConfig} />;
}

export default Contact;
