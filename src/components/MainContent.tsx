import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function MainContent() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Products
        </Typography>
        <Typography>Check out our latest offerings</Typography>
      </div>

      <Grid container spacing={2} columns={12}>
        {products.map((product, index) => (
          <Grid key={product.id} size={{ xs: 12, md: 4 }}>
            <motion.div
              whileHover="hover"
              initial="initial"
              style={{ height: '100%' }}
            >
              <StyledCard
                variant="outlined"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
                onClick={() => handleProductClick(product)}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    image={product.image}
                    sx={{
                      aspectRatio: '16 / 9',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                </Box>
                <StyledCardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                    {product.description}
                  </StyledTypography>
                  <Box
                    sx={{
                      mt: 'auto',
                      alignSelf: 'flex-start',
                      position: 'relative',
                      bgcolor: 'black',
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontWeight: 'bold',
                      fontSize: '0.875rem',
                      overflow: 'hidden',
                      display: 'inline-block',
                      boxShadow: 1,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    {product.price}
                    <motion.div
                      variants={{
                        initial: { x: '-150%' },
                        hover: {
                          x: '250%',
                          transition: {
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "linear",
                            repeatDelay: 0.5
                          }
                        }
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
                        transform: 'skewX(-45deg)',
                      }}
                    />
                  </Box>
                </StyledCardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          variant: 'outlined',
          sx: {
            border: '1px solid',
            borderColor: 'divider',
          }
        }}
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ m: 0, p: 2, pr: 6 }}>
              {selectedProduct.title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <CardMedia
                component="img"
                alt={selectedProduct.title}
                image={selectedProduct.image}
                sx={{
                  maxHeight: 400,
                  objectFit: 'contain',
                  mb: 2,
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  display: 'inline-block',
                  boxShadow: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  mb: 2,
                }}
              >
                {selectedProduct.price}
              </Box>
              <Typography variant="body1" gutterBottom>
                {selectedProduct.description}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box >
  );
}
