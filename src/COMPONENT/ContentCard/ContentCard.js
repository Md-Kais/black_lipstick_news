import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
    },
    media: {
        height: 'auto',
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    console.log(props);
    let { publishedAt, author, title, content, url, description, urlToImage , source} = props.article;
    console.log(typeof (author), title, content, url)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = (new Date(publishedAt).toUTCString('es-US', options))

    //  author.toUpperCase()
    return (
        <>
            <Card className={classes.root} style={{backgroundColor:'#C09F80'}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Error : 404 ! Pic Not found"

                        image={urlToImage}



                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="h2" style={{ color: '#651fff', fontFamily: 'bold' }}>
                            {title}
                        </Typography>
                       
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <br></br>
                        <Box display="flex" justifyContent="space-between" textAlign='left'>
                            <Box > {date}
                            </Box>
                            <Box > {author}
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <CardActions display="flex" justifyContent="flex-start">

                    <Button size="small" variant="contained" color="primary">
                        <a target='_blank' rel="noopener noreferrer" href={url} style={{ color: '	#3D0C02', textDecoration: 'none', fontWeight: '600px', fontFamily: 'bold' }}>Main Page</a>
                    </Button>
                    
                   

                </CardActions>
                <small textAlign='left'>Reported By : {source.name}</small>
            </Card>
        </>
    );
}
