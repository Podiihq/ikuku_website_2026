const Button = ({
  children,
  icon,
  iconPosition = 'left',
  href,
  bgColor = '#ffb51c',
  textColor = '#000000',
  borderColor = '#000000',
  className = '',
  style,
  type = 'button',
  ...props
}) => {
  const Component = href ? 'a' : 'button'
  const iconFirst = icon && iconPosition === 'left'
  const iconLast = icon && iconPosition === 'right'

  return (
    <Component
      className={`inline-flex font-bold py-3 w-fit items-center justify-center gap-3 rounded-full border px-6 uppercase transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35] ${className}`}
      href={href}
      style={{
        backgroundColor: bgColor,
        borderColor,
        color: textColor,
        ...style,
      }}
      type={href ? undefined : type}
      {...props}
    >
      {iconFirst && icon}
      {children}
      {iconLast && icon}
    </Component>
  )
}

export default Button
