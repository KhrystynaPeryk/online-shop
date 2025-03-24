import { Snackbar, Alert, AlertColor } from "@mui/material";

interface SnackbarComponentProps {
    severity: AlertColor,
    message: string,
    isSnackbarOpen: boolean,
    setIsSnackbarOpen: (open: boolean) => void;
}

const SnackbarComponent = ({severity, message, isSnackbarOpen, setIsSnackbarOpen}: SnackbarComponentProps) => {

    return (
        <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={() => setIsSnackbarOpen(false)}
    >
        <Alert
            onClose={() => setIsSnackbarOpen(false)}
            severity={severity}
            variant="filled"
            sx={{ width: '100%' }}
        >
            {message}
        </Alert>
    </Snackbar>
    )
}

export default SnackbarComponent