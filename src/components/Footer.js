const Footer = () => {
  return (
    <p class="copyright bg-black py-2 text-white m-auto text-center text-lg">
      Copyright &copy; <span class="year">{new Date().getFullYear()}</span> by
      Anupam Foods, Inc. All rights reserved.
    </p>
  );
};
export default Footer;
