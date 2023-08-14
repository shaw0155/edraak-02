import { Button, Form, Input } from "antd";

export default function ContactForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    //console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        form={form}
        name="basic"
        className="form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Votre Nom" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Votre Email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your phone Number!",
            },
          ]}
        >
          <Input placeholder="Téléphone" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Must be at least 25 characters!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Votre Message"
            style={{ height: "160px" }}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ height: "auto" }}>
          send
        </Button>
      </Form>
    </>
  );
}
