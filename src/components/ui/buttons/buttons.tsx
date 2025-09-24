import { Button, ButtonProps } from "@mui/material";

export function OutlinedButton(props: ButtonProps) {
    return (
        <Button variant="outlined" {...props}>
            {props.children}
        </Button>
    );
}
export function ContainedButton(props: ButtonProps) {
    return (
        <Button variant="contained" {...props}>
            {props.children}
        </Button>
    );
}

export function TextButton(props: ButtonProps) {
    return (
        <Button variant="text" {...props}>
            {props.children}
        </Button>
    );
}