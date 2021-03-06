import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

});

const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }

}));

//url:
// http://newsapi.org/v2/everything?q=tesla&from=2021-02-05&sortBy=publishedAt&apiKey=1ff94eee84b84fff8515840389db7f66
const Header = () => {
    const classes = useStyles2();
    const classes2 = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [article, setArticle] = useState([]);
    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ff94eee84b84fff8515840389db7f66";
        axios.get(url)

            .then(data => setArticle(data.data.articles));

    }, [])

//    article.map((ele)=>{
//       // return (console.log(ele))
       
//    })




    const list = (anchor) => (

        <div
            className={clsx(classes2.list, {
                [classes2.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <h3>Hot Spicy Black Lipstick Devil looking Head Fucking Lines</h3>
                  
                {
                    //<Link target="_blank" to=""></Link>
                    //die and fucking love me.
                    // 
                    article.map((ele) => {
                        //look at it : https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
                        let link = <a target='_blank' rel="noopener noreferrer" href={ele.url} style={{ color:'	#3D0C02', textDecoration:'none',fontWeight:'600px',fontFamily:'bold'}}> {ele.title}  </a>;
                        return (
                            <>
                                
                                <ListItem key={ele.name}><abbr title="CLICK TO SEE MORE" style={{textDecoration:'none'}}>{link}</abbr></ListItem>
                                
                                <hr/>
                            </>
                        )

                    })
                }

            </List>
        </div>
    );
    return (
        <div className={classes2.root}>

            <AppBar position="static" style={{ color: 'blanchedalmond', backgroundColor: '#520000' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon /></Button>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <span style={{ color: 'gold' }}>Worlds' First News</span>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;