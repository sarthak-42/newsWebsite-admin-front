import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData, randomInt } from '@mui/x-data-grid-generator';

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page , 5, (page + 1),  5));
    }, randomInt(100, 600)); // simulate network latency
  });
}

const NewsList = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    let active = true;

    const fetchData = async () => {
      setLoading(true);
      const newRows = await loadServerRows(paginationModel.page, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    };

    fetchData();

    return () => {
      active = false;
    };
  }, [paginationModel.page, data]);

  const handleSearch = async () => {
    setLoading(true);

    // Simulate server-side search logic
    const searchResults = data.rows.filter((row) =>
      Object.values(row).some(
        (value) => typeof value === 'string' && value.includes(searchTerm)
      )
    );

    setRows(searchResults);
    setLoading(false);
  };

  return (
    <div>
      <div style={{ height: 400, width: '60%', margin: '0 auto', borderRadius:'0'}}>
      <div style={{border: '1px solid #ddd,', textAlign: 'right', background: '#ddd', padding: '14px'}}>
        <input style={{padding: '5px',}}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={{padding: '5px', cursor: 'pointer'}} onClick={handleSearch}>Search</button>
      </div>
        <DataGrid style={{borderRadius: '0',}}
          {...data}
          rows={rows}
          pagination
          checkboxSelection
          paginationModel={paginationModel}
          pageSizeOptions={[5]}
          rowCount={100}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          loading={loading}
          keepNonExistentRowsSelected
        />
      </div>
    </div>
  );
};

export default NewsList;