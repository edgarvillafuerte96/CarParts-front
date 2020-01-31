import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Part = (props) => {
    return (
        <div>
            { props.part ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '55%'}}
                    image={props.part.fields.partImage.fields.file.url}
                    title={props.part.fields.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='headline' component='h2'>
                            {props.part.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.part.fields.description}
                        </Typography>
                        <Typography component="p">
                            {props.part.fields.price}
                        </Typography>
                        <Typography component="p">
                            {props.part.fields.quantity}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.part.fields.url} target="_blank">
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Part;