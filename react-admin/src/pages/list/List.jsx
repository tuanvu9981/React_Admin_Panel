import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";
import Datatable from "../../components/datatable/Datatable";

function List() {
    return (
        <div className="list">
            <Sidebar />
            {/* sidebar (flex: 1)   listContainer(flex: 6)  
            chia màn hình ra  */}

            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    )

}

export default List;