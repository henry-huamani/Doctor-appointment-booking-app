import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";

function Userslist() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const getUsersData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get("/api/admin/get-all-users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (resposne.data.success) {
        setUsers(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const columns = [
    {
      title: "Nombres",
      dataIndex: "firstName",
    },
    {
      title: "Apellidos",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Creado",
      dataIndex: "createdAt",
      render: (record , text) => moment(record.createdAt).format("DD-MM-YYYY"),
    }
  ];

  return (
    <Layout>
      <h1 className="page-header">Lista de Usuarios</h1>
      <hr />
      <Table columns={columns} dataSource={users}/>
    </Layout>
  );
}

export default Userslist;
