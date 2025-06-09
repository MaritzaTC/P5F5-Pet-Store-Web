import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from '@/app/components/molecules/Dropdowm'

describe('Dropdown Component', () => {
  const user = userEvent.setup()
  const mockOnChange = jest.fn()
  
  const defaultProps = {
    label: 'Test Label',
    placeholder: 'Select an option',
    name: 'test-dropdown',
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: '',
    onChange: mockOnChange,
  }

  beforeEach(() => {
    mockOnChange.mockClear()
  })

  it('renders with label and placeholder', () => {
    render(<Dropdown {...defaultProps} />)
    
    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Select an option')).toBeInTheDocument()
  })

  it('renders all options', () => {
    render(<Dropdown {...defaultProps} />)
    
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('calls onChange when option is selected', async () => {
    render(<Dropdown {...defaultProps} />)
    
    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'Option 2')
    
    expect(mockOnChange).toHaveBeenCalled()
  })

  it('displays selected value', () => {
    render(<Dropdown {...defaultProps} value="Option 2" />)
    
    const select = screen.getByRole('combobox')
    expect(select).toHaveValue('Option 2')
  })

  it('has correct styling classes', () => {
    const { container } = render(<Dropdown {...defaultProps} />)
    
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('flex', 'flex-col')
    
    const select = screen.getByRole('combobox')
    expect(select).toHaveClass(
      'border-1',
      'border-[#E4E4E7]',
      'focus:border-[#7C3785]',
      'outline-none',
      'rounded-md',
      'p-2'
    )
  })

  it('renders without label when not provided', () => {
    render(<Dropdown {...defaultProps} label="" />)
    
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('is accessible with proper attributes', () => {
    render(<Dropdown {...defaultProps} />)
    
    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('name', 'test-dropdown')
    expect(select).toBeRequired()
  })
})