import React, { useRef } from 'react'
import { Button, Col, Form, Input, Row, Table, Select } from 'antd'
import { useAntdTable } from 'ahooks'
import FormWrap from '@/components/FormWrap/index'
const { Option } = Select

interface Item {
  name: {
    last: string
  }
  email: string
  phone: string
  gender: 'male' | 'female'
}

interface Result {
  total: number
  list: Item[]
}

const getTableData = ({ current, pageSize }, formData: Object): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`
    }
  })

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }))
}

export default () => {
  const [form] = Form.useForm()

  const { tableProps, search, params } = useAntdTable(getTableData, {
    defaultPageSize: 5,
    form,
  })

  const { type, changeType, submit, reset } = search

  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ]

  const searchForm = (
    <div style={{ marginBottom: 16 }}>
      <Form form={form} style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Form.Item name="gender" style={{ marginBottom: 12 }} initialValue="male">
          <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
            <Option value="">all</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="gender" initialValue="male" style={{ marginBottom: 12 }}>
          <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
            <Option value="">all</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="gender" initialValue="male" style={{ marginBottom: 12 }}>
          <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
            <Option value="">all</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="gender" initialValue="male" style={{ marginBottom: 12 }}>
          <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
            <Option value="">all</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="name" style={{ marginBottom: 12 }}>
          <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />
        </Form.Item>
        <Form.Item name="name" style={{ marginBottom: 12 }}>
          <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />
        </Form.Item>
        <Form.Item name="name" style={{ marginBottom: 12 }}>
          <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />
        </Form.Item>
        <Form.Item name="name" style={{ marginBottom: 12 }}>
          <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />
        </Form.Item>
        <Form.Item name="name" style={{ marginBottom: 12 }}>
          <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />
        </Form.Item>
      </Form>
    </div>
  )
  return (
    <div>
      {/* {searchForm} */}
      <FormWrap slot={searchForm} />
      <Table columns={columns} rowKey="email" style={{ overflow: 'auto' }} {...tableProps} />
    </div>
  )
}
