import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)} // list concat new list --> add to END
                pageSize={8} //cái này cx cần chỉnh --> Hiện 10 dòng 1 trang
                rowsPerPageOptions={[8]} //bao nhiêu dòng trên 1 trang --> Chuyển thành 10
                checkboxSelection
            />
        </div>
    )
}

export default Datatable;