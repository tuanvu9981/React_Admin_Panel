import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./chart.scss";

const Chart = ({aspect, title}) => {

    const data = [
        { name: "January", total: 1200 },
        { name: "February", total: 2100 },
        { name: "March", total: 800 },
        { name: "April", total: 1600 },
        { name: "May", total: 900 },
        { name: "June", total: 1250 }
    ];
    return (
        <div className="chart">
            <div className="title">{title}</div>
            {/* <ResponsiveContainer width="100%" height="100%"> height =100% --> Kéo dài vô tận xuống dưới  */}
            <ResponsiveContainer width="100%" aspect={aspect}> 
            {/* aspect={2/1} --> height = 1/2 width */}
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient> */}
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                    {/* <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#total)"
                    /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;