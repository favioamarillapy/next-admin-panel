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
import { useRouter } from "next/router";


function createData(
    id,
    fullName,
    username
) {
    return { id, fullName, username };
}

const rows = [
    createData(1, 'User test 1', 'usertest1'),
    createData(2, 'User test 2', 'usertest2'),
    createData(3, 'User test 3', 'usertest3'),
    createData(4, 'User test 4', 'usertest4'),
    createData(5, 'User test 5', 'usertest5'),
    createData(6, 'User test 6', 'usertest6'),
];



export default function UserListPage() {

    const router = useRouter()

    const handleUserAdd = () => {
        router.push('users/add')
    }
    return (
        <MainLayout>
            <Grid container spacing={2}
                sx={{
                    background: '#fff',
                    pr: 2,
                    pb: 2,
                    borderRadius: 2
                }}>

                <Grid item md={8}>
                    <Typography variant="h5">
                        Users
                    </Typography>
                </Grid>

                <Grid item md={4}
                    sx={{ display: 'flex', justifyContent: 'end' }}
                >
                    <Button variant='contained' color='secondary' onClick={handleUserAdd}>
                        <AddIcon />
                        Add
                    </Button>
                </Grid>
                <Grid item md={12} sx={{ pt: 0 }}>
                    <Button sx={{ mr: 1 }}>
                        <CloudUploadIcon />
                        Import
                    </Button>
                    <Button>
                        <CloudDownloadIcon />
                        Export
                    </Button>
                </Grid>

                <Grid item md={12}>
                    <Divider light />
                </Grid>


                <Grid item md={12}>
                    <Box sx={{ overflow: "auto" }}>
                        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                            <TableContainer component={Paper} >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead sx={{ background: '#F9FAFC' }}>
                                        <TableRow>
                                            <TableCell component="th">ID</TableCell>
                                            <TableCell component="th">Full Name</TableCell>
                                            <TableCell component="th">Username</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>{row.fullName}</TableCell>
                                                <TableCell>{row.username}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={12}>
                    <Pagination count={5} showFirstButton showLastButton />
                </Grid>
            </Grid >
        </MainLayout>
    )
}