import { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";
function User() {

    // Danh sách User
    const [users, setUsers] = useState([]);

    // Form
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDob] = useState("");
    const [editingId, setEditingId] = useState(null);

    // Hàm lấy danh sách User
    const loadUsers = () => {

        axios
            .get("http://localhost:8080/Crud/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    // Chạy khi component được tạo
    useEffect(() => {
        loadUsers();
    }, []);

    // Thêm User
    const handleAddUser = () => {

        const newUser = {
            username,
            password,
            firstname,
            lastname,
            dob
        };

        axios
            .post("http://localhost:8080/Crud/users", newUser)
            .then((response) => {

                console.log(response.data);

                alert("Thêm User thành công!");

                // Load lại danh sách
                loadUsers();

                // Reset Form
                setUsername("");
                setPassword("");
                setFirstname("");
                setLastname("");
                setDob("");

            })
            .catch((error) => {
                console.log(error);
            });

    };
    const handleEditUser = (user) => {

        setEditingId(user.id);
    
        setUsername(user.username);
        setPassword("");
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setDob(user.dob);
    
    };
    //sửa 
    const handleUpdateUser = () => {

        const updateUser = {
            username,
            password,
            firstname,
            lastname,
            dob
        };
    
        axios
            .put(
                `http://localhost:8080/Crud/users/${editingId}`,
                updateUser
            )
            .then(() => {
    
                alert("Cập nhật thành công!");
    
                loadUsers();
    
                // Reset Form
                setEditingId(null);
                setUsername("");
                setPassword("");
                setFirstname("");
                setLastname("");
                setDob("");
    
            })
            .catch((error) => {
                console.log(error);
            });
    
    };
    //delete user

    const handleDeleteUser = (id) => {

        const confirmDelete = window.confirm("Bạn có chắc muốn xóa User này không?");
    
        if (!confirmDelete) {
            return;
        }
    
        axios
            .delete(`http://localhost:8080/Crud/users/${id}`)
            .then(() => {
    
                alert("Xóa thành công!");
    
                loadUsers();
    
            })
            .catch((error) => {
                console.log(error);
            });
    
    };

    return (
        <div className="container">
    
            <div className="card">
    
                <h2>
                    {editingId ? "Cập nhật User" : "Thêm User"}
                </h2>
    
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
    
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
    
                <input
                    type="text"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
    
                <input
                    type="text"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
    
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
    
                <button
                    onClick={
                        editingId
                            ? handleUpdateUser
                            : handleAddUser
                    }
                >
                    {editingId ? "Cập nhật User" : "Thêm User"}
                </button>
    
            </div>
    
            <div className="card">
    
                <h2>Danh sách User</h2>
    
                <table>
    
                    <thead>
    
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Ngày sinh</th>
                            <th>Action</th>
                        </tr>
    
                    </thead>
    
                    <tbody>
    
                        {users.map((user) => (
    
                            <tr key={user.id}>
    
                                <td>{user.id}</td>
    
                                <td>{user.username}</td>
    
                                <td>{user.firstname}</td>
    
                                <td>{user.lastname}</td>
    
                                <td>{user.dob}</td>
    
                                <td>
    
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEditUser(user)}
                                    >
                                        Sửa
                                    </button>
    
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Xóa
                                    </button>
    
                                </td>
    
                            </tr>
    
                        ))}
    
                    </tbody>
    
                </table>
    
            </div>
    
        </div>
    );
}

export default User;