import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function BasicFilteringGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
    maxColumns: 10,
  });

  return (
    <div style={{height: '75vh', width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={{
          items: [
            { columnField: 'commodity', operatorValue: 'contains', value: 'rice' }
          ]
        }}
      />
    </div>
  );
}
