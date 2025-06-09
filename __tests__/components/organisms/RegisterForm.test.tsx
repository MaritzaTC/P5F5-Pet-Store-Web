import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterForm from '@/app/components/organisms/RegisterForm'

// Mock Next.js components and dependencies
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: any) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ),
}))

jest.mock('@/app/components/atoms/Icons/index', () => ({
  GreaterIcon: () => <div data-testid="greater-icon" />,
  EyeIcon: ({ icon }: { icon: string }) => (
    <div data-testid="eye-icon" data-icon={icon} />
  ),
  PersonIcon: ({ icon }: { icon: string }) => (
    <div data-testid="person-icon" data-icon={icon} />
  ),
}))

jest.mock('@/app/components/molecules/Dropdowm', () => ({
  Dropdown: ({ placeholder, options, value, onChange }: any) => (
    <select data-testid="dropdown" value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ),
}))

describe('RegisterForm Component', () => {
  const user = userEvent.setup()

  it('renders the register form with all elements', () => {
    render(<RegisterForm />)
    
    // Check breadcrumb navigation
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    const registrarseElements = screen.getAllByText('Registrarse')
    expect(registrarseElements).toHaveLength(2) // Breadcrumb and main title
    expect(screen.getByTestId('greater-icon')).toBeInTheDocument()
    
    // Check main title
    const titles = screen.getAllByText('Registrarse')
    expect(titles).toHaveLength(2) // Title and breadcrumb
    expect(titles[1]).toHaveClass('text-[30px]', 'font-bold') // Main title
    
    // Check form inputs
    expect(screen.getByPlaceholderText('Nombre completo')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument()
    expect(screen.getByTestId('dropdown')).toBeInTheDocument()
    
    // Check buttons
    expect(screen.getByRole('button', { name: 'Crear cuenta' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })

  it('has correct breadcrumb styling and layout', () => {
    const { container } = render(<RegisterForm />)
    
    const breadcrumbContainer = container.querySelector('.flex.gap-4.ml-20.px-2.mt-6')
    expect(breadcrumbContainer).toBeInTheDocument()
  })

  it('centers the form correctly', () => {
    const { container } = render(<RegisterForm />)
    
    const formContainer = container.querySelector('.flex.flex-col.items-center.justify-center.mt-10')
    expect(formContainer).toBeInTheDocument()
  })

  it('renders form with correct structure', () => {
    const { container } = render(<RegisterForm />)
    
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
    expect(form).toHaveClass('flex', 'flex-col', 'gap-4', 'mt-10')
  })

  it('has fullname input field', () => {
    render(<RegisterForm />)
    
    const fullnameInput = screen.getByPlaceholderText('Nombre completo')
    expect(fullnameInput).toHaveAttribute('type', 'text')
  })

  it('has password input with validation', () => {
    render(<RegisterForm />)
    
    const passwordInput = screen.getByPlaceholderText('Contraseña')
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument()
  })

  it('renders role dropdown with correct options', () => {
    render(<RegisterForm />)
    
    const dropdown = screen.getByTestId('dropdown')
    expect(dropdown).toBeInTheDocument()
    
    // Check if all role options are present
    expect(screen.getByText('Seleccionar rol')).toBeInTheDocument()
    expect(screen.getByText('Administrador')).toBeInTheDocument()
    expect(screen.getByText('Gestor de promociones')).toBeInTheDocument()
    expect(screen.getByText('Lector')).toBeInTheDocument()
  })

  it('create account button has correct styling', () => {
    render(<RegisterForm />)
    
    const createButton = screen.getByRole('button', { name: 'Crear cuenta' })
    expect(createButton).toHaveClass(
      'bg-[#7C3785]',
      'text-white'
    )
  })

  it('login button links to login page', () => {
    render(<RegisterForm />)
    
    const loginLink = screen.getByTestId('next-link')
    expect(loginLink).toHaveAttribute('href', '/login')
  })

  it('login button has correct styling', () => {
    render(<RegisterForm />)
    
    const loginButton = screen.getByRole('button', { name: 'Iniciar sesión' })
    expect(loginButton).toHaveClass(
      'bg-white',
      'w-[300px]',
      'text-[#7C3785]',
      'border-[#7C3785]'
    )
  })

  it('allows user input in form fields', async () => {
    render(<RegisterForm />)
    
    const fullnameInput = screen.getByPlaceholderText('Nombre completo')
    const passwordInput = screen.getByPlaceholderText('Contraseña')
    const dropdown = screen.getByTestId('dropdown')
    
    await user.type(fullnameInput, 'John Doe')
    await user.type(passwordInput, 'SecurePass123!')
    await user.selectOptions(dropdown, 'Administrador')
    
    expect(fullnameInput).toHaveValue('John Doe')
    expect(passwordInput).toHaveValue('SecurePass123!')
    expect(dropdown).toHaveValue('Administrador')
  })

  it('handles dropdown state changes', async () => {
    render(<RegisterForm />)
    
    const dropdown = screen.getByTestId('dropdown')
    
    // Initially empty
    expect(dropdown).toHaveValue('')
    
    // Select a role
    await user.selectOptions(dropdown, 'Gestor de promociones')
    expect(dropdown).toHaveValue('Gestor de promociones')
    
    // Change to another role
    await user.selectOptions(dropdown, 'Lector')
    expect(dropdown).toHaveValue('Lector')
  })

  it('renders all required form validation attributes', () => {
    render(<RegisterForm />)
    
    const fullnameInput = screen.getByPlaceholderText('Nombre completo')
    const passwordInput = screen.getByPlaceholderText('Contraseña')
    
    expect(fullnameInput).toBeRequired()
    expect(passwordInput).toBeRequired()
  })
})