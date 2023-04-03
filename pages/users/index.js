import { Box, Button, Divider, Grid, Pagination, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainLayout from "@/components/Layout/MainLayout";


function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UserListPage() {
    return (
        <MainLayout>
            <Grid container spacing={2}
                sx={{
                    background: '#fff',
                    pr: 2,
                    pb: 2,
                    borderRadius: 2
                }}>

                <Grid item xs={8}>
                    <Typography variant="h5">
                        Users
                    </Typography>
                </Grid>

                <Grid item xs={4}
                    sx={{ display: 'flex', justifyContent: 'end' }}
                >
                    <Button variant='contained' color='secondary' >
                        <AddIcon />
                        Add
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ pt: 0 }}>
                    <Button sx={{ mr: 1 }}>
                        <CloudUploadIcon />
                        Import
                    </Button>
                    <Button>
                        <CloudDownloadIcon />
                        Export
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Divider light />
                </Grid>


                <Grid item xs={12}>
                    <Box sx={{ overflow: "auto" }}>
                        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                            <TableContainer component={Paper} >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead sx={{ background: '#F9FAFC' }}>
                                        <TableRow>
                                            <TableCell component="th">Dessert (100g serving)</TableCell>
                                            <TableCell component="th" align="right">Calories</TableCell>
                                            <TableCell component="th" align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell component="th" align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell component="th" align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Pagination count={5} showFirstButton showLastButton />
                </Grid>
            </Grid >
        </MainLayout>
    )
}