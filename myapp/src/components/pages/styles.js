import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    toolbar: theme.mixins.toolbar, //pushes the whole content down with the exact size of the navbar
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
}))