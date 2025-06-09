import { render, screen } from '@testing-library/react'
import { 
  ButtonRounded, 
  ButtonRounded2, 
  ButtonRounded3, 
  ButtonCard, 
  ButtonCard2 
} from '@/app/components/atoms/Buttons'

describe('Button Components', () => {
  describe('ButtonRounded', () => {
    it('renders with correct text', () => {
      render(<ButtonRounded text="Test Button" />)
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument()
    })

    it('applies default classes', () => {
      render(<ButtonRounded text="Test" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('rounded-[6px]', 'px-4', 'py-2')
    })

    it('applies custom className when provided', () => {
      render(<ButtonRounded text="Test" className="custom-class" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })
  })

  describe('ButtonRounded2', () => {
    it('renders with correct text and styling', () => {
      render(<ButtonRounded2 text="Test" />)
      const button = screen.getByRole('button', { name: 'Test' })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass(
        'rounded-full',
        'font-bold',
        'text-[12px]',
        'bg-white',
        'w-[59px]',
        'h-[22px]',
        'text-[#7C3785]',
        'border-[#7C3785]'
      )
    })
  })

  describe('ButtonRounded3', () => {
    it('renders with correct dimensions and styling', () => {
      render(<ButtonRounded3 text="Test" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'rounded-[6px]',
        'font-normal',
        'text-[14px]',
        'w-[119px]',
        'h-[40px]'
      )
    })
  })

  describe('ButtonCard', () => {
    it('renders with card-specific styling', () => {
      render(<ButtonCard text="Card Button" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'rounded-full',
        'font-bold',
        'w-[59px]',
        'h-[22px]',
        'text-[#7C3785]'
      )
    })
  })

  describe('ButtonCard2', () => {
    it('renders with card2-specific styling', () => {
      render(<ButtonCard2 text="Card2" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'rounded-[8px]',
        'font-bold',
        'text-[14px]',
        'w-[84px]',
        'h-[36px]',
        'text-[#858484]',
        'border-[#E4E4E7]'
      )
    })
  })
})