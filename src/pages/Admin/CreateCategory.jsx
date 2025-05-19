import React from 'react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import AdminMenu from '../../components/Layout/AdminMenu'
import CategoryForm from '../../components/form/CategoryForm';
import { Modal } from 'antd'
const CreateCategory = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("");
    const [visible, setVisible] = useState("");
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    //handle form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API}/api/v1/category/create-category`, { name })
            if (data?.success) {
                toast.success(`${name} is created`)
                getAllCategory();
            }
            else {
                toast.error(data.message)
            }
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            }
            else {
                toast.error(res.data.message)
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Something went wrong");

        }
    };
    //get all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/api/v1/category/allcategory`)
            if (data.success) {
                setCategories(data.category);
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Soemthing went wrong in category");
        }
    }
    useEffect(() => {
        getAllCategory();
    }, []);

//update category
const handleUpdate=async(e)=>{
    e.preventDefault()
    try{
     const {data}= await axios.put(`${import.meta.env.VITE_API}/api/v1/category/update-category/${selected._id}`,{name:updatedName})
    if(data.success){
     toast.success(`${updatedName} is updated`)
     setSelected(null)
     setUpdatedName("")
     setVisible(false)
     getAllCategory();
    }
    else{
        toast.error(data.message)
       
    }
    }
    catch(error){
        toast.error("Something went wrong")
    }
}
//update category
const handleDelete=async(id)=>{
    try{
     const {data}= await axios.delete(`${import.meta.env.VITE_API}/api/v1/category/delete-category/${id}`)
    if(data.success){
     toast.success(`${name} is deleted`);
    
     getAllCategory();
    }
    else{
        toast.error(data.message)

    }
    }
    catch(error){
        toast.error("Something went wrong")
    }
}
    return (
        <>
            <Layout>
                <div className="container-fluid m-3 p-3">
                    <div className="row">
                        <div className="col-md-3">
                            <AdminMenu />
                        </div>
                    </div>
                </div>
                <h1>Manage Catgeory</h1>
                <div className="p-3 w-50">
                    <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(c => (
                                <tr key={c._id}>
                                    <td>{c.name}</td>
                                    <td><button className='btn btn-primary ms-2'
                                        onClick={() => { setVisible(true);
                                         setUpdatedName(c.name) ;
                                         setSelected(c);
                                         }}>
                                        Edit
                                    </button></td>
                                    <td><button className='btn btn-danger ms-2' onClick={()=>{handleDelete(c._id)}} >Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
<CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
                    </Modal>
                </div>
            </Layout>
        </>

    )
}

export default CreateCategory