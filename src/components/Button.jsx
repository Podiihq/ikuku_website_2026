const Button = ({
  children,
  icon,
  iconPosition = 'left',
  href,
  bgColor = '#ffb51c',
  textColor = '#000000',
  borderColor = '#000000',
  shadowColor = '#0a0a0a',
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
      className={`leading-[0.9] inline-flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full border-2 px-6 py-3 font-bold uppercase shadow-[6px_6px_0_var(--button-shadow-color)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--button-shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_var(--button-shadow-color)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35] ${className}`}
      href={href}
      style={{
        backgroundColor: bgColor,
        borderColor,
        color: textColor,
        '--button-shadow-color': shadowColor,
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
