import Link from './Link'

export default function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons',  path: '/buttons' },
        { label: 'Modal',  path: '/modal' },
        { label: 'Table',  path: '/table' }
    ]

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
            {
                links.map((link) => (
                    <Link className="mt-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2" key={link.label} to={link.path}>
                        {link.label}
                    </Link>
                ))
            }
        </div>
    )
}