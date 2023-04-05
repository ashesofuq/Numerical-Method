// import React, { useState } from "react";

// function Test() {
//     const [size, setSize] = useState(0);
//     const [matrix, setMatrix] = useState([]);

//     const handleSizeChange = (event) => {
//         const value = parseInt(event.target.value);
//         setSize(value);

//         const newMatrix = [];

//         for (let i = 0; i < value; i++) {
//             const newRow = [];
//             for (let j = 0; j < value; j++) {
//                 newRow.push(0);
//             }
//             newMatrix.push(newRow);
//         }
//         setMatrix(newMatrix);
//     };

//     const handleNumberChange = (event, rowIndex, colIndex) => {
//         const value = parseInt(event.target.value);
        
//         const newMatrix = matrix.map((row, i) => {
//             if (i === rowIndex) {
//                 return row.map((col, j) => (j === colIndex ? value : col));
//             } else {
//                 return row;
//             }
//         });
//         const A = newMatrix.map(row => row.slice(0, -1));
//         const B = newMatrix.map(row => row[newMatrix.length]);

//         console.log(A);
//         console.log(B);
//         setMatrix(newMatrix);
//     };

    
//     return (
//     <div>
//         <label htmlFor="sizeInput">Enter matrix size:</label>
//         <input id="sizeInput" type="number" value={size} onChange={handleSizeChange} />
//         <br />
//         {matrix.map((row, rowIndex) => (
//             <div key={rowIndex}>
//             {row.map((col, colIndex) => (
//                 <React.Fragment key={colIndex}>
//                     <input type="number" placeholder={"X" + (colIndex+1)} onChange={(event) => handleNumberChange(event, rowIndex, colIndex)} />                    
//                 </React.Fragment>
//             ))}
//             <br />
//             </div>
//         ))}
//     </div>
//     );
// }

// export default Test;

// import React, { useState } from "react";

// function Test() {
//   const [size, setSize] = useState(0);
//   const [matrix, setMatrix] = useState([]);

//   const handleSizeChange = (event) => {
//     const value = parseInt(event.target.value);
//     setSize(value);

//     const newMatrix = [];

//     for (let i = 0; i < value; i++) {
//       const newRow = [];
//       for (let j = 0; j <= value; j++) {
//         newRow.push(0);
//       }
//       newMatrix.push(newRow);
//     }
//     setMatrix(newMatrix);
//   };

//   const handleNumberChange = (event, rowIndex, colIndex) => {
//     const value = parseInt(event.target.value);

//     const newMatrix = matrix.map((row, i) => {
//       if (i === rowIndex) {
//         return row.map((col, j) => (j === colIndex ? value : col));
//       } else {
//         return row;
//       }
//     });
//     const B = newMatrix.map(row => row[2]);
//     console.log(newMatrix);
//     console.log(B);
//     setMatrix(newMatrix);
//   };

//     // Create an array of header labels based on the size of the matrix
//     const headerLabels = Array.from({ length: size }, (_, i) => `x${i+1}`);
//     // Add header label for last column
//     headerLabels.push("B");

//     return (
//         <div>
//             <label htmlFor="sizeInput">Enter matrix size:</label>
//             <input id="sizeInput" type="number" value={size} onChange={handleSizeChange} />
//             <br />
//             <table>
//                 <thead>
//                 <tr>
//                     <th></th>
//                     {headerLabels.map((label, index) => (
//                         <th key={index}>{label}</th>
//                     ))}
//                 </tr>
//                 </thead>
//                 <tbody>
//                     {matrix.map((row, rowIndex) => (
//                         <tr key={rowIndex}>
//                             <td>{headerLabels[rowIndex]}</td>
//                                 {row.map((col, colIndex) => (
//                                     <React.Fragment key={colIndex}>
//                                         <td><input type="number" value={col} onChange={(event) => handleNumberChange(event, rowIndex, colIndex)} /></td>
//                                     </React.Fragment>
//                                 ))}                            
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Test;

import React, { useState } from "react";

const Test = () => {
  let numgen = 0;
  const [table, setTable] = useState();
  const giventable = [];
  const createtable = (numgen) => {
    let tablex = [];
    let tabley = [];
    for (let i = 0; i < numgen; i++) {
      tablex.push(
        <div>
          <input placeholder={"value x" + (i + 1)} />
        </div>
      );
      tabley.push(
        <div>
          <input placeholder={"value y" + (i + 1)} />
        </div>
      );
    }
    giventable.push({ a: tablex, b: tabley });
  };

  const result = () => {
    console.log("numgen: ", numgen);
    console.log(giventable);
    return (
      <div>
        {giventable.map((data) => (
          <div style={{ display: "flex" }}>
            <div>{data.a}</div>
            <div>{data.b}</div>
          </div>
        ))}
      </div>
    );
  };

  const inputnum = (event) => {
    numgen = event.target.value;
    console.log(numgen);
    createtable(numgen);
    setTable(result());
  };
  return (
    <div>
      Number
      <input type="number" onChange={inputnum} />
      {table}
    </div>
  );
};
export default Test;