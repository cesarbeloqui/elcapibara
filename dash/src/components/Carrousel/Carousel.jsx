import Carousel from 'react-material-ui-carousel';
import slider1 from '../../assets/imagenes/ASTROTURISMO.jpg';
import slider2 from '../../assets/imagenes/2-Paseo-en-Botador.jpg';
import slider3 from '../../assets/imagenes/3-Nado-a-caballo.jpg';
import slider4 from '../../assets/imagenes/4-Avistaje-de-Aves.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, CardMedia } from '@mui/material';
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Paper,
  Button,
  Zoom,
} from '@mui/material';
import { tokens } from '../../theme';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useWindowSize from '../utils/useWindowSize';
import resumenTexto from './resumenTexto';

export default function Example(props) {
  const { height, width } = useWindowSize();
  var items = [
    {
      name: 'La localidad de Mantilla se prepara para vivir su 31° edición del festival “Yatay“',
      description:
        'Se presentó en Casa Ibera de Corrientes Capital este evento que tendrá lugar en la localidad de Mantilla el próximo 10 y 11 de febrero. En la ocasión estuvo presente el Intendente de ésta localidad, Juan Insaurralde; el Padre Antonio Rossi; la Ministra de Turismo Alejandra Eliciri; el Subsecretario de promoción e inversiones turísticas Klaus Liebig.',
      image: slider1,
    },
    {
      name: 'Suscriben Convenio Marco de Cooperación Interministerial entre Turismo y Ciencia y Tecnología',
      description:
        'El uso de las nuevas tecnologías, en este caso aplicada a la actividad turística, fue resumido en un compromiso suscrito hoy entre los Ministerios de Turismo y de Ciencia y Tecnología. Participaron los titulares de ambas carteras Alejandra Eliciri y Jorge Antonio Gómez respectivamente; mientras que también acompañaron el Subsecretario de Turismo Carlos Gatti y la Subsecretaria de Coordinación Institucional Micaela Stefany Van Der Woerd.',
      image: slider2,
    },
    {
      name: 'Esquina se prepara para vivir su 37° Fiesta Nacional',
      description:
        'Esta mañana se presentó en Casa de Gobierno, lo que será este evento de pesca deportiva con devolución en la localidad de Esquina los días 17, 18 y 19 de febrero. Por lo tanto, estuvo presente el Subsecretario de Turismo Carlos Gatti, el Subsecretario de Promoción e inversiones turísticas, Klaus Liebig en representación de la Ministra de Turismo Alejandra Eliciri, quien no pudo asistir por compromisos de agenda. Ademas estuvo el Presidente del Club Náutico de Esquina Omar Bordón; el encargado de la Fiscalización del concurso Juan Agustín Maggione: y la encargada del festival Farides Rosado.',
      image: slider3,
    },
    {
      name: 'Isla Apipé Grande celebró su primera edición de la Fiesta de los Bienes Intangibles',
      description:
        'Con el propósito de instalarse en el calendario turístico provincial, el municipio de Isla Apipé Grande tuvo su primera edición de la Fiesta de los Bienes Intangibles. Con una serie de actividades durante tres jornadas, culminó hoy, el evento que convocó a residentes y visitantes a disfrutar parte de sus tradiciones.',
      image: slider4,
    },
  ];
  return (
    <Carousel
      sx={{
        display: 'flex',
      }}
      swipe={true}
      NextIcon={<ArrowForwardIosIcon fontSize="inherit" />}
      PrevIcon={<ArrowBackIosNewIcon fontSize="inherit" />}
      stopAutoPlayOnHover={true}
      animation="fade"
      navButtonsAlwaysVisible={true}
      fullHeightHover={true}
      navButtonsProps={{
        style: {
          size: 'large',
        },
      }}
      indicatorContainerProps={{
        style: {
          display: 'flex',
          position: 'absolute',
          zIndex: '99',
          left: 0,
          margin: width > 600 ? '50px auto auto 100px' : '15px auto auto 15px',
        },
      }}
      duration={2000}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export function Item(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const fontSizeCard = {
    titleFontSize: 2, // En em unidades
    descriptionFontSize: 1.07, // En em unidades
  };
  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.primary[400],
        width: '100%',
        height: '50vh',
      }}
    >
      <Card sx={{ borderRadius: '0' }}>
        <CardActionArea>
          <CardMedia
            sx={{
              width: '100%',
              height: '50vh',
              overflow: 'hidden',
              display: 'flex',
              objectFit: 'cover',
              borderRadius: '0',
              position: 'relative', // Agregamos esta propiedad para establecer el contexto de apilamiento
            }}
            component="img"
            image={props.item.image}
            alt="slide"
          />
          <CardContent
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              color: theme.palette.grey[400],
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.664)',
              maxWidth: '40vw',
              borderRadius: '0.5em',
              height: '22vh',
              margin: '0 0 1.5em 1.5em',
              '@media (max-width: 600px)': {
                maxWidth: '90vw',
                height: '17vh',
                margin: '0',
                borderRadius: '0',
                width: '100%',
              },
            }}
          >
            <Typography
              gutterBottom
              variant="h4Bold"
              sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                "@media (max-width:600px)":{
                  WebkitLineClamp: 1,
                }
              }}

              /*               sx={{
                fontSize: `${fontSizeCard.titleFontSize}rem`,
          '@media (max-width: 600px)': {
                  fontSize: `${fontSizeCard.titleFontSize - 0.9}rem`,
                },
              }} */
            >
              {/* esta funcion recibe el string que quiero resumir y en el segundo argumento la cantidad de caracteres que quiero mostrar y el tercer argumento es el string que quiero que se muestra al final */}
              {props.item.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                '@media (max-width:600px)': {
                  WebkitLineClamp: 1,
                },
              }}
              /*               sx={{
                '@media (max-width: 600px)': {
                  fontSize: `${fontSizeCard.descriptionFontSize - 0.3}rem`,
                },
              }} */
            >
              {props.item.description}
            </Typography>
            <Typography
              sx={{ display: 'flex', alignSelf: 'flex-end' }}
              variant="h6Bold"
            >
              Ver mas
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
