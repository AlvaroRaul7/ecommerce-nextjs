
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffff',
            marginleft: '10px',
      
        },
    },

    brand:{
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },

    grow:{
        flexGrow: 1,
    },

    

    main: {
        minHeight: '80vh',

    },

    footer: {
        textAlign: 'center',
        marginTop:10
    },

    section:{
        marginTop:'10px',
        marginBotton:'10px'
    },

});

export default useStyles