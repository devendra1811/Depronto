fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
    return data.json();
}).then((objectdata)=>{
    
    let tableData = `<tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>`;
    objectdata.map((values) => {
      tableData += `<tr>
            <td>${values.userId} </td>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.completed}</td>
          </tr>`;
    });
    document.getElementById("dbody").innerHTML = tableData;
  });

