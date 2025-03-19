import React, { useState, useEffect } from 'react';

const FilterTable = ({ data, prop1, prop2 }) => {
  const [toggleType, setToggleType] = useState(true);
  const [selectSpecialty, setSelectSpecialty] = useState('Specialty (All)');
  const [selectCCG, setSelectCCG] = useState('CCG (All)');
  const [selectType, setSelectType] = useState('Type (All)');
  const [selectStatus, setSelectStatus] = useState('Status (All)');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [data, selectSpecialty, selectCCG, selectType, selectStatus, toggleType]);

  const getOptions = (key) => {
    let options = [...new Set(data.map((item) => item[key]).filter((x) => x))];
    options = ['All', ...options];
    return options;
  };

  const filterData = () => {
    let result = [...data];

    if (selectSpecialty !== 'Specialty (All)') {
      result = result.filter((item) => item.Primary_specialty === selectSpecialty);
    }

    if (selectCCG !== 'CCG (All)') {
      result = result.filter((item) => item.CCG_Flag === selectCCG);
    }

    if (toggleType && selectType !== 'Type (All)') {
      result = result.filter((item) => item.Customer_Type === selectType);
    } else if (!toggleType && selectStatus !== 'Status (All)') {
      result = result.filter((item) => item.Customer_Status === selectStatus);
    }

    setFilteredData(result);
  };

  const handleToggle = () => {
    setToggleType((prev) => !prev);
  };

  // Add a function to determine the customer category (Neither, CE, SE)
  const getCustomerCategory = (item) => {
    if (item.Customer_Type === 'Clinical Expert(CE)') return 'CE';
    if (item.Customer_Type === 'Scientific Expert(SE)') return 'SE';
    return 'Neither';
  };

  return (
    <div className="container">
      <div className="filters">
        <div className="toggle-section">
          <span className="toggle-text">Customer Type</span>
          <label className="switch">
            <input type="checkbox" checked={toggleType} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <span className="toggle-text">Customer Status</span>
        </div>

        <div className="dropdowns">
          <select value={selectSpecialty} onChange={(e) => setSelectSpecialty(e.target.value)}>
            {getOptions('Primary_specialty').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={selectCCG} onChange={(e) => setSelectCCG(e.target.value)}>
            {getOptions('CCG_Flag').map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {toggleType ? (
            <select value={selectType} onChange={(e) => setSelectType(e.target.value)}>
              {['Type (All)', ...prop1].map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          ) : (
            <select value={selectStatus} onChange={(e) => setSelectStatus(e.target.value)}>
              {['Status (All)', ...prop2].map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="tb_container">
        <table className="table">
          <thead>
            <tr>
              <th>Customer Category</th>
              <th>HCP in Territory</th>
              <th>HCPs with Planned Engagements</th>
              <th>HCPs with Actual Engagements</th>
              <th>Planned Interactions per Semester</th>
              <th>Actual Interactions per Semester</th>
              <th>Percent of HCPs with at least one Engagement (%)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{getCustomerCategory(item)}</td>
                <td>{item.HCP_Territory}</td>
                <td>{item.Planned_Engagements}</td>
                <td>{item.Actual_Engagements}</td>
                <td>{item.Planned_Per_Semester}</td>
                <td>{item.Actual_Per_Semester}</td>
                <td>{item.Engagement_Percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilterTable;
