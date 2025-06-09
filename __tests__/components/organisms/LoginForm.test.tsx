import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '@/app/components/organisms/LoginForm'

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

describe('LoginForm Component', () => {
  const user = userEvent.setup()

  it('renders the login form with all elements', () => {
    render(<LoginForm />)
    
    // Check breadcrumb navigation
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Inicio de sesión')).toBeInTheDocument()
    expect(screen.getByTestId('greater-icon')).toBeInTheDocument()
    
    // Check main title using getAllByText to handle duplicates
    const titles = screen.getAllByText('Iniciar sesión')
    expect(titles).toHaveLength(2) // Title and button
    expect(titles[0]).toHaveClass('text-[30px]', 'font-bold') // Main title
    
    // Check form inputs
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument()
    
    // Check buttons by their parent links
    expect(screen.getByRole('button', { name: 'Registrarse' })).toBeInTheDocument()
  })

  it('has correct breadcrumb styling and layout', () => {
    const { container } = render(<LoginForm />)
    
    const breadcrumbContainer = container.querySelector('.flex.gap-4.ml-20.px-2.mt-6')
    expect(breadcrumbContainer).toBeInTheDocument()
  })

  it('centers the form correctly', () => {
    const { container } = render(<LoginForm />)
    
    const formContainer = container.querySelector('.flex.flex-col.items-center.justify-center.mt-10')
    expect(formContainer).toBeInTheDocument()
  })

  it('renders form with correct structure', () => {
    const { container } = render(<LoginForm />)
    
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
    expect(form).toHaveClass('flex', 'flex-col', 'gap-4', 'mt-10')
  })

  it('has username input with correct icon', () => {
    render(<LoginForm />)
    
    const usernameInput = screen.getByPlaceholderText('Nombre')
    expect(usernameInput).toHaveAttribute('type', 'text')
    expect(screen.getByTestId('person-icon')).toBeInTheDocument()
  })

  it('has password input with eye icon', () => {
    render(<LoginForm />)
    
    const passwordInput = screen.getByPlaceholderText('Contraseña')
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument()
  })

  it('login button links to admin promotions page', () => {
    render(<LoginForm />)
    
    const loginLinks = screen.getAllByTestId('next-link')
    const loginLink = loginLinks.find(link => 
      link.getAttribute('href') === '/adminpromotions'
    )
    expect(loginLink).toBeInTheDocument()
  })

  it('register button links to register page', () => {
    render(<LoginForm />)
    
    const registerLinks = screen.getAllByTestId('next-link')
    const registerLink = registerLinks.find(link => 
      link.getAttribute('href') === '/register'
    )
    expect(registerLink).toBeInTheDocument()
  })

  it('login button has correct styling', () => {
    render(<LoginForm />)
    
    const buttons = screen.getAllByText('Iniciar sesión')
    const loginButton = buttons.find(button => button.tagName === 'BUTTON')
    expect(loginButton).toHaveClass(
      'bg-[#7C3785]',
      'w-[300px]',
      'text-white',
      'mt-6'
    )
  })

  it('register button has correct styling', () => {
    render(<LoginForm />)
    
    const registerButton = screen.getByRole('button', { name: 'Registrarse' })
    expect(registerButton).toHaveClass(
      'bg-white',
      'w-[300px]',
      'text-[#7C3785]',
      'border-[#7C3785]'
    )
  })

  it('allows user input in form fields', async () => {
    render(<LoginForm />)
    
    const usernameInput = screen.getByPlaceholderText('Nombre')
    const passwordInput = screen.getByPlaceholderText('Contraseña')
    
    await user.type(usernameInput, 'testuser')
    await user.type(passwordInput, 'testpassword')
    
    expect(usernameInput).toHaveValue('testuser')
    expect(passwordInput).toHaveValue('testpassword')
  })
})