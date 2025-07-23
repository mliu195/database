import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';




const Seasonalprofit = ({ translatedData }) => {
  


  return (
    <div>
      <h2>Seasonal profit of crops per tile</h2>

          <ResponsiveContainer width="100%" height={300}> 
              <BarChart data={translatedData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}> 
                  <CartesianGrid strokeDasharray="3 3" /> 
                  <XAxis dataKey="name" height={60} /> 
                  <YAxis /> 
                  <Tooltip formatter={(value) => `${value}`} />
                  <Bar dataKey="Raw" fill="#9DB17C"/>
                  <Bar dataKey="Jar" fill="#A34836" />
                  <Bar dataKey="Keg" fill="#D47726"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Seasonalprofit;