import { Box, Button, Typography } from "@mui/material";
import AppDialog from "../Dialog";
import { Warning } from "@mui/icons-material";

interface IConfirmDialogProps {
  open: boolean;
  handleClose: () => void;
  onConfirmDelete: () => void;
  description?: string;
}

const ConfirmDeleteDialog = ({
  open,
  handleClose,
  onConfirmDelete,
  description,
}: IConfirmDialogProps) => {
  return (
    <AppDialog open={open} handleClose={handleClose}>
      <AppDialog.Title>
        <Box textAlign="center">
          <Warning color="warning" sx={{ fontSize: 60 }} />
        </Box>
      </AppDialog.Title>
      <AppDialog.Content>
        <Box textAlign="center">
          <Typography textAlign="center" variant="h3" mb={1}>
            Confirm Delete
          </Typography>
          <Typography variant="caption" fontSize={15}>
            {description ||
              " Are you sure you want to delete this item? This action cannot be undone."}
          </Typography>
        </Box>
      </AppDialog.Content>
      <AppDialog.Actions>
        <Button
          color="info"
          variant="outlined"
          type="button"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button color="error" variant="contained" onClick={onConfirmDelete}>
          Delete
        </Button>
      </AppDialog.Actions>
    </AppDialog>
  );
};

export default ConfirmDeleteDialog;
