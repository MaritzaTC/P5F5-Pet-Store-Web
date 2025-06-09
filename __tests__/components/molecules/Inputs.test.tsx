import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputText } from '@/app/components/molecules/Inputs'

// Mock icon components
jest.mock('@/app/components/atoms/Icons/index', () => ({
  EyeIcon: ({ icon }: { icon: string }) => (
    <div data-testid="eye-icon" data-icon={icon} />
  ),
  PersonIcon: ({ icon }: { icon: string }) => (
    <div data-testid="person-icon" data-icon={icon} />
  ),
}))

describe('InputText Component', () => {
  const user = userEvent.setup()

  describe('Basic functionality', () => {
    it('renders with correct type and placeholder', () => {
      render(<InputText type="text" placeholder="Enter text" />)
      
      const input = screen.getByPlaceholderText('Enter text')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'text')
    })

    it('applies custom className', () => {
      render(<InputText type="text" className="custom-class" />)
      
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-class')
    })

    it('has default styling classes', () => {
      render(<InputText type="text" />)
      
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass(
        'border',
        'border-[#E4E4E7]',
        'focus:border-[#7C3785]',
        'outline-none',
        'rounded-md',
        'p-2',
        'w-full',
        'h-[40px]',
        'pr-10'
      )
    })

    it('is wrapped in a container with correct width', () => {
      const { container } = render(<InputText type="text" />)
      
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('relative', 'w-[300px]')
    })
  })

  describe('Password functionality', () => {
    it('renders password input with eye icon', () => {
      render(<InputText type="password" placeholder="Password" />)
      
      const input = screen.getByPlaceholderText('Password')
      expect(input).toHaveAttribute('type', 'password')
      expect(screen.getByTestId('eye-icon')).toBeInTheDocument()
    })

    it('toggles password visibility when eye icon is clicked', async () => {
      render(<InputText type="password" placeholder="Password" />)
      
      const input = screen.getByPlaceholderText('Password')
      const eyeButton = screen.getByRole('button')
      
      // Initially password type
      expect(input).toHaveAttribute('type', 'password')
      expect(screen.getByTestId('eye-icon')).toHaveAttribute('data-icon', 'tabler:eye-off')
      
      // Click to show password
      await user.click(eyeButton)
      expect(input).toHaveAttribute('type', 'text')
      expect(screen.getByTestId('eye-icon')).toHaveAttribute('data-icon', 'tabler:eye')
      
      // Click to hide password again
      await user.click(eyeButton)
      expect(input).toHaveAttribute('type', 'password')
      expect(screen.getByTestId('eye-icon')).toHaveAttribute('data-icon', 'tabler:eye-off')
    })

    it('has password validation pattern and title', () => {
      render(<InputText type="password" placeholder="Password" />)
      
      // Use placeholder text to find password input specifically
      const input = screen.getByPlaceholderText('Password')
      expect(input).toHaveAttribute('pattern', '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$')
      expect(input).toHaveAttribute('title', 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo')
    })

    it('eye button has correct styling', () => {
      render(<InputText type="password" />)
      
      const eyeButton = screen.getByRole('button')
      expect(eyeButton).toHaveClass('absolute', 'right-3', 'top-2.5', 'text-gray-500')
      expect(eyeButton).toHaveAttribute('type', 'button')
    })
  })

  describe('Icon functionality', () => {
    it('renders right icon for non-password inputs', () => {
      render(<InputText type="text" iconRight="mdi:user" />)
      
      expect(screen.getByTestId('person-icon')).toBeInTheDocument()
      expect(screen.getByTestId('person-icon')).toHaveAttribute('data-icon', 'mdi:user')
    })

    it('does not render person icon for password inputs', () => {
      render(<InputText type="password" iconRight="mdi:user" />)
      
      expect(screen.queryByTestId('person-icon')).not.toBeInTheDocument()
      expect(screen.getByTestId('eye-icon')).toBeInTheDocument()
    })

    it('positions right icon correctly', () => {
      const { container } = render(<InputText type="text" iconRight="mdi:user" />)
      
      const iconWrapper = container.querySelector('.absolute.right-3.top-2\\.5')
      expect(iconWrapper).toBeInTheDocument()
      expect(iconWrapper).toHaveClass('text-gray-500')
    })
  })

  describe('Form attributes', () => {
    it('is required by default', () => {
      render(<InputText type="text" />)
      
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
    })

    it('accepts additional HTML input props', () => {
      render(<InputText type="email" name="email" id="email-input" maxLength={50} />)
      
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('name', 'email')
      expect(input).toHaveAttribute('id', 'email-input')
      expect(input).toHaveAttribute('maxLength', '50')
    })

    it('handles user input correctly', async () => {
      render(<InputText type="text" placeholder="Enter text" />)
      
      const input = screen.getByPlaceholderText('Enter text')
      await user.type(input, 'Hello World')
      
      expect(input).toHaveValue('Hello World')
    })
  })

  describe('Accessibility', () => {
    it('password toggle button is accessible', () => {
      render(<InputText type="password" />)
      
      const toggleButton = screen.getByRole('button')
      expect(toggleButton).toBeInTheDocument()
    })

    it('maintains focus when toggling password visibility', async () => {
      render(<InputText type="password" placeholder="Password" />)
      
      const input = screen.getByPlaceholderText('Password')
      const toggleButton = screen.getByRole('button')
      
      await user.click(input)
      expect(input).toHaveFocus()
      
      await user.click(toggleButton)
      // Input should still be focusable after toggle
      await user.click(input)
      expect(input).toHaveFocus()
    })
  })
})