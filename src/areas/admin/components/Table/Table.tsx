import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Skeleton,
  Box,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import { Column } from "./type";

interface TableProps<T> {
  columns: Column<T>[];
  rows: T[];
  isLoading?: boolean;
  rowsPerPageOptions?: number[];
  skeletonRowsCount?: number;
  rowsPerPage: number;
  page: number;
  totalCount: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Table = <T extends { id?: string | number }>({
  columns,
  rows,
  isLoading = false,
  rowsPerPageOptions = [5, 10, 25],
  skeletonRowsCount = 5,
  rowsPerPage,
  page,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
}: TableProps<T>) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: theme.customShadows.light,
        borderRadius: 1,
      }}
    >
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
            ) : rows.length > 0 ? (
              rows.map((row, idx) => (
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
        count={totalCount}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Box>
  );
};

export default Table;
