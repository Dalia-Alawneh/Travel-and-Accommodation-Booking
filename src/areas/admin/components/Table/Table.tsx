import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Skeleton,
} from "@mui/material";
import { ReactNode, useState } from "react";

interface Column<T> {
  id: keyof T;
  label: string;
  align?: "right" | "left" | "center";
  render?: (value: unknown, row: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  rows: T[];
  isLoading?: boolean;
  rowsPerPageOptions?: number[];
  skeletonRowsCount?: number;
}

const Table = <T extends { id?: string | number }>({
  columns,
  rows,
  isLoading = false,
  rowsPerPageOptions = [5, 10, 25],
  skeletonRowsCount = 5,
}: TableProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <MuiTable sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id as string} align={col.align || "left"}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              Array.from({ length: skeletonRowsCount }).map((_, idx) => (
                <TableRow key={`skeleton-${idx}`}>
                  {columns.map((col, colIdx) => (
                    <TableCell key={(col.id as string) || colIdx}>
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : visibleRows.length > 0 ? (
              visibleRows.map((row, idx) => (
                <TableRow key={(row.id ?? idx) as string | number}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.id as string}
                      align={col.align || "left"}
                    >
                      {col.render
                        ? col.render(row[col.id], row)
                        : (row[col.id] as ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Table;
