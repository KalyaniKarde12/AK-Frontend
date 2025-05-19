import React from 'react'

const CategoryForm = ({handleSubmit,value,setValue}) => {
    return (
        
            <div className="register">
                <h1>Catgory Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter new Category"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            required
                        />
                    </div>
                  
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
      
    )
}

export default CategoryForm