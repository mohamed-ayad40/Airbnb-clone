import Link from "next/link";
import links from "../utils/links";

const Footer = () => {

    return <footer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            {links.map((link, index) => (
                <div key={index} className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">{link.title}</h5>
                    {link.links.map((item) => (
                        <Link className="block" key={item} href={item}>{item}</Link>
                    ))}
                </div>
            ))}
        </div>
    </footer>;
};

export default Footer;
