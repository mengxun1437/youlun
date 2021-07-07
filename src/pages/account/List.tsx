import { Button, Table } from 'antd'
import React from 'react'

const UserList: React.FC = props => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      align: 'center'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      align: 'center'
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <>
          <Button type="link">操作</Button>
          <Button type="link">删除</Button>
        </>
      )
    }
  ]

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ['bottomCenter'] }}
      />
    </div>
  )
}

export default UserList
