import classNames from 'classnames'
import useNavigationContext from '../hooks/use-navigation'

export default function Link({ to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigationContext()

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName)
    function handleClick(event) {
        if(event.metaKey || event.ctrlKey) return

        event.preventDefault()
        navigate(to)
    }

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    )
}