export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {thisYear}</p>
    </footer>
  );
}
