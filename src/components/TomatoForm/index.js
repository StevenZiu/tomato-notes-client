import React from "react"
import { Form, Input, Button, Checkbox, Select } from "antd"
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons"
import "./style.scss"
import { is } from "ramda"
import moment from "moment"
const TomatoForm = props => {
  // decide the form type
  const isUpdate = props.isUpdate || false
  const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 14
    }
  }
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 14
    }
  }
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log("Success:", values)
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }
  const onReset = () => {
    form.resetFields()
  }
  console.log(props)
  form.setFieldsValue({
    startAt: props.startAt !== undefined ? props.startAt : "0",
    endAt: props.endAt !== undefined ? props.endAt : "0",
    tomatoTitle: isUpdate ? props.tomatoTitle : "",
    tomatoDescription: isUpdate ? props.tomatoDescription : "",
    projectId: isUpdate ? props.projectId : "null"
  })
  return (
    <Form
      {...layout}
      name="tomato-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="Started At"
        name="startAt"
        rules={[{ required: true, message: "required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="End At"
        name="endAt"
        rules={[{ required: true, message: "required" }]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        label="Title"
        name="tomatoTitle"
        rules={[
          { required: true, message: "A tomato record needs title." },
          { min: 5, message: "length should be 5 to 50 characters." },
          { max: 50, message: "length should be 5 to 50 characters." }
        ]}
      >
        <Input placeholder="Tomato Title" allowClear />
      </Form.Item>
      <Form.Item
        label="Description"
        name="tomatoDescription"
        rules={[
          { required: true, message: "A tomato record needs description." },
          { min: 50, message: "length should be 50 to 1000 characters." },
          { max: 1000, message: "length should be 50 to 1000 characters." }
        ]}
        help="Describe what you did during this tomato time slot, note down everything."
      >
        <Input.TextArea
          placeholder="tomato record description"
          allowClear
          autoSize={{ minRows: 6 }}
        ></Input.TextArea>
      </Form.Item>

      <Form.Item
        label="Project"
        name="projectId"
        help="Assign this tomato to one of your projects. Or select null to create standalone tomato for whatever you want to note down."
      >
        {/*
        TODO: get project from state, and use selector to select the project, if no project should be null
      */}
        <Select>
          <Select.Option value="null">Null</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout} className="button-group">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TomatoForm
