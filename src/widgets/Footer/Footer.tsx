export const Footer = ({ backgroundColor = "#23236e" }) => (
    <footer
        className="text-center text-xs text-[#bdbdf7] py-4 opacity-70 w-full flex justify-center"
        style={{ backgroundColor }}
    >
        © {new Date().getFullYear()} Вязка. Все права защищены.
    </footer>
);