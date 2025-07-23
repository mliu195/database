import React, { useState } from 'react';
import {
    ScatterChart, Scatter, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Tooltip
} from 'recharts';



const processingsellprice = ({ translatedData }) => {



    // Custom tooltip content
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                    <p><strong>{data.name}</strong></p>
                    <p>Crop value: {data.value}</p>
                    <p>Time to Grow: {data.growth_time}</p>
                </div>
            );
        }

        return null;
    };

    
    return (
        <div>
            <h2>Revenue from a singular crop</h2>

            <ResponsiveContainer width="80%" height={300}>
                <ScatterChart
                    width={500}
                    height={300}
                    data={translatedData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="growth_time" name="Time to Grow" />
                    <YAxis type="number" dataKey="value" name="Crop value" />
                    <Tooltip content={<CustomTooltip />} />
                    <Scatter name="crops" data={translatedData} fill="#9DB17C" />
                    <LabelList dataKey="name" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default processingsellprice;