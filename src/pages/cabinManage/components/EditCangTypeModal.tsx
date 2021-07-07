import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Select, Cascader } from 'antd'
import styles from '../styles/index.less'
interface IProps {
    visible: boolean
    initData: any
    onOk: (...args: any[]) => void
    onCancel: (...args: any[]) => void
}

const { Item } = Form

const EditCangInfoModal: React.FC<IProps> = props => {
    const { visible, onCancel, onOk, initData } = props
    const [form] = Form.useForm()
    const handleOk = () => { form.validateFields().then(onOk) }
    const handleCancel = () => { onCancel() }
    console.log(initData)
    return (
        <Modal title="编辑船舱信息" visible={visible} onOk={handleOk} onCancel={handleCancel} >
            <Form
                form={form}
                labelAlign="left"
                // labelCol={{ flex: computeFormLabelWidth(4) }}
                colon={false}
                initialValues={initData}
                labelCol={{ span: 5, offset: 3 }}
                wrapperCol={{ span: 12 }}
                className={styles.cc_type_modal}
            >
                <Item name="key" label="船舱类型ID" rules={[{ required: true }]}>
                    <Input disabled />
                </Item>
                <Item name="gender" label="船舱类型" rules={[{ required: true, message: "请输入船舱类型ID" }]}>
                    <Input placeholder="请输入船舱类型" />
                </Item>
                <Item name="phone" label="船舱价格" rules={[{ required: true, message: "请输入船舱类型" }]}>
                    <Input placeholder="请输入船舱价格" />
                </Item>
                <Item name="age" label="船舱最大容量" rules={[{ required: true, message: "请输入船舱容纳数量" }]}>
                    <Input placeholder="请输入船舱容纳数量" />
                </Item>
            </Form>
        </Modal >
    )
}
export default EditCangInfoModal