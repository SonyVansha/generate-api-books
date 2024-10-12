import NavbarMenu from '../components/NavBar';
import Headerpage from '../components/HeaderPage';
import BlogsPage from '../components/BlogsPage';

function Books() {


  return (
    <>
      {/* Navbar Menu */}
      <NavbarMenu />

      {/* Header Page */}
      <Headerpage titlepage="Books" />
      <hr />
      {/* Blog Page */}
      <BlogsPage />

    </>
  );
}

export default Books;
