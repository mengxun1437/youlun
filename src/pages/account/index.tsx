import React from 'react'
import { Button, Space, Table, Input } from 'antd'
const { Search } = Input
const AccountList: React.FC = props => {
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
      key: '30',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '10',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '29',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '11',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '28',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '12',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '27',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '13',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '26',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '14',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '25',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '15',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '24',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '16',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '23',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '17',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '22',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '18',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '21',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '19',
      name: '胡彦斌',
      gender: '男',
      age: 32,
      phone: '13242141',
      address: '西湖区湖底公园1号'
    },
    {
      key: '20',
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
          <Button type="link" onClick={() => { handleEdit(record) }}>操作</Button>
          <Button type="link" onClick={() => { handleDelete(record) }} >删除</Button>
        </>
      )
    }
  ]
  return (
    <div>
      {/* <Button type="primary" style={{ marginBottom: 20 }}>添加船舱类别</Button> */}
      <Space direction="vertical" style={{ marginLeft: '1200px', marginBottom: 10 }}><Search placeholder="input search text" allowClear enterButton="查询" /></Space>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ['bottomCenter'], pageSize: 5 }}
      />
    </div>
  )
}
export default AccountList
