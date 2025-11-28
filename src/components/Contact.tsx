import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatIcon from '@mui/icons-material/Chat';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Contact() {
    const orderTemplate = `Halo Admin AzifyStore, saya ingin memesan:
- Produk: [Nama Produk]
- Jumlah: [Jumlah]
- Catatan: [Deskripsi/Catatan Tambahan]`;

    const handleCopy = () => {
        navigator.clipboard.writeText(orderTemplate);
        alert('Template berhasil disalin!');
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h2" gutterBottom align="center">
                Hubungi Kami
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
                Silakan gunakan template di bawah ini untuk melakukan pemesanan, lalu kirimkan melalui salah satu kontak kami.
            </Typography>

            <Card variant="outlined" sx={{ mb: 4 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6">Template Pesanan</Typography>
                        <Button
                            startIcon={<ContentCopyIcon />}
                            size="small"
                            onClick={handleCopy}
                            variant="outlined"
                        >
                            Salin Template
                        </Button>
                    </Box>
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        value={orderTemplate}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </CardContent>
            </Card>

            <Typography variant="h6" align="center" gutterBottom>
                Kirim Pesanan Ke:
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    variant="contained"
                    startIcon={<FacebookIcon />}
                    href="https://facebook.com/naranggak"
                    target="_blank"
                    sx={{ backgroundColor: '#1877F2', '&:hover': { backgroundColor: '#166fe5' } }}
                >
                    Facebook
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ChatIcon />}
                    href="https://m.me/naranggak"
                    target="_blank"
                    sx={{ backgroundColor: '#0084FF', '&:hover': { backgroundColor: '#0078e7' } }}
                >
                    Messenger
                </Button>
                <Button
                    variant="contained"
                    startIcon={<TelegramIcon />}
                    href="https://t.me/bocahsakti"
                    target="_blank"
                    sx={{ backgroundColor: '#24A1DE', '&:hover': { backgroundColor: '#2090c8' } }}
                >
                    Telegram
                </Button>
            </Stack>
        </Container>
    );
}
