import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Box = styled.div`
  width: auto;
  height: 50px;
  border: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #27ae60;
  border-top:none;
  border-bottom: 5px solid #27ae60;
  background-color:${
    props =>   props.path === props.text  ? 'white' :  "#2ecc71"
  }
`;
const HomeBox = styled.div`
  width: auto;
  height: 50px;
  border: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #27ae60;
  border-top:none;
  border-bottom: 5px solid #27ae60;
  background-color:${
    props =>   props.path.length == 0  ? 'white' :  "#2ecc71"
  }
`;
// #2ecc71
export default function NavBar() {
  const router = useRouter();
  const pathname = router.pathname.slice(1)
  console.log(pathname)
  return (
    <Container>
      <HomeBox path={pathname} >
        <Link href="/" >
          <a>Home</a>
        </Link>
      </HomeBox>
      <Box path={pathname} text={'about'}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Box>
      <Box path={pathname} text={'career'}>
        <Link href="/career">
          <a>Career</a>
        </Link>
      </Box>
      <Box path={pathname} text={'contact'}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Box>
    </Container>
  );
}
