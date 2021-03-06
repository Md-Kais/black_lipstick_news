import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ContentCard from '../ContentCard/ContentCard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Content = () => {
    const classes = useStyles();
    const [article, setArticle] = useState([]);
    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ff94eee84b84fff8515840389db7f66";
        axios.get(url)
        .then(data => setArticle(data.data.articles));
    }, []);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    article.map((ele) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}>

                                <Paper className={classes.paper}>
                                    <ContentCard article={ele}></ContentCard>
                                </Paper>
                            </Grid>
                        )
                    }
                    )
                }




            </Grid>
        </div>
    );
}

export default Content;