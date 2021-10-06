import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        }
    }
}))