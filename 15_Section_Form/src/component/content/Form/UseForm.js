import React, { useState } from 'react';
import TForm from './TForm';
import jsonData from './data.json'
function UseForm() {
  const [datas, setDatas] = useState(jsonData);
  
  const tableRows = datas.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.noHandphone}</td>
        <td>{info.pendidikan}</td>
        <td>{info.files}</td>
        <td>{info.kelas}</td>
        <td>{info.harapan}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalStudents = datas.length;
    data.id = totalStudents + 1;
    const updateDatas = [...datas];
    updateDatas.push(data);
    setDatas(updateDatas);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
            <th>City</th>
            <th>City</th>
            <th>City</th>
            <th>City</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <TForm func={addRows} />
    </div>
  );
}
  
export default UseForm;