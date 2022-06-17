import {Button} from '@mui/material'
import {Container, Box} from '@mui/material'
import {Grid} from '@mui/material'
import Link from 'next/link'

const AdminPanel = () => {

  return(
    <Container maxWidth={"xl"}>
      <Box>
      <Link href='/Admin-Panel/create-user'>
          <Button>
            Create User
          </Button>
        </Link>
        <Link href='/Admin-Panel/create-user'>
          <Button>
            View Users
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default AdminPanel;