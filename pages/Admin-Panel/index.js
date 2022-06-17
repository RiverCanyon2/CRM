import {Button} from '@mui/material'
import {Container} from '@mui/material'
import {Grid} from '@mui/material'
import Link from 'next/link'

const AdminPanel = () => {

  return(
    <Container maxWidth={"xl"}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Link href='/Admin-Panel/create-user'>
            <Button>
              Create User
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminPanel;