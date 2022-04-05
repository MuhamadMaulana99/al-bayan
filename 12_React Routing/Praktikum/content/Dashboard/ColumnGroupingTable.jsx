import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Nama', minWidth: 170 },
  { id: 'code', label: 'Alamat\u00a0', minWidth: 100 },
  {
    id: 'population',
    label: 'Tabungan',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Angsuran',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Defisit',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Maulana', 'Cisauk', 10000, 200000),
  createData('Farah', 'Ciputat', 20000, 300000),
  createData('Fani', 'Cisauk', 40000, 3000000),
  createData('Fina', 'Parung Panjang', 50000, 7000000),
  createData('Fitrotunissa', 'Rangkas', 60000, 20000000),
  createData('Fira', 'Cisauk', 70000, 300000),
  createData('Meli', 'Cilengang', 80000, 500000),
  createData('Melan', 'Viktor', 90000, 600000),
  createData('Manda', 'Suradita', 100000, 6050000),
  createData('Prida', 'Jakarta', 900000, 4600000),
  createData('Amel', 'Legok', 6000000, 20000),
  createData('Diva', 'Semaval', 500000, 200000),
  createData('Sonia', 'Bsd', 800000, 2500000),
  createData('Brijid', 'Pamulang', 100000, 400000),
  createData('Nadia', 'Cisauk', 2000000, 30000000),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Data Nasabah
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Keuangan
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25,50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
