const style = {
    commentBox: {
        width: '100vw',
        margin: '0 auto',
        fontFamily: 'Helvetica, sans-serif'
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    pageTitle: {
        textTransform: 'capitalize',
        fontSize: '2em',
        marginBottom: '0'        
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px'
    },
    addBtn: {
        width: '100%',
        textTransform: 'capitalize'
    },
    commentList: {
        maxHeight: '70vh',
        overflow: 'scroll'
    },
    comment: {
        backgroundColor: '#fafafa',
        margin: '10px',
        fontSize: '.85rem',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0'
    },
    commentItem: {
        width: '14.5%',
        fontSize: '2em',        
        textAlign: 'center',
        margin: 0,
        textTransform: 'capitalize'
    },
    commentForm: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    commentFormAuthor: {
        width: '100%',
        marginBottom: '15px',
        padding: '0 10px',
        borderRadius: '3px',
        height: '40px',
        flex: '2'
    },
    commentFormText: {
        flex: '4',
        width: '100%',
        marginBottom: '15px',
        padding: '0 10px',
        height: '40px',
        borderRadius: '3px'
    },
    commentFormPost: {
        width: '100%',
        flex: '1',
        height: '40px',
        fontSize: '1.5rem',
        backgroundColor: '#A3CDFD',
        borderRadius: '3px',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '.055rem',
        border: 'none'
    },
    updateLink: {
        textDecoration: 'none',
        paddingRight: '6px 12px',
        fontSize: '2em',
        border: '1px solid',
        display: 'inlineflex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 12px',
        borderRadius: '25px',
        marginRight: '15px'
    },
    deleteLink: {
        textDecoration: 'none',
        paddingRight: '6px 12px',
        fontSize: '2em',
        border: '1px solid',
        display: 'inlineflex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 12px',
        borderRadius: '25px',
        color: 'red'
    }
}
module.exports = style;