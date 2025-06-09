import { render, screen } from '@testing-library/react'
import { 
  TextTitleName,
  TextTitle,
  TextTitle2,
  TextRegular,
  TextRegular2,
  TextRegular3,
  TextRegular4,
  TextRegular5,
  TextRegular6,
  TextRegular7,
  TextRegular8,
  TextRegular9
} from '@/app/components/atoms/Titles'

describe('Title Components', () => {
  describe('TextTitleName', () => {
    it('renders as h1 with large white text', () => {
      render(<TextTitleName text="Main Title" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Main Title')
      expect(heading).toHaveClass('text-[48px]', 'font-bold', 'text-white')
    })
  })

  describe('TextTitle', () => {
    it('renders with medium bold styling', () => {
      render(<TextTitle text="Section Title" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Section Title')
      expect(heading).toHaveClass('text-[30px]', 'font-bold')
    })
  })

  describe('TextTitle2', () => {
    it('renders with semi-bold styling', () => {
      render(<TextTitle2 text="Subtitle" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Subtitle')
      expect(heading).toHaveClass('text-[24px]', 'font-semibold')
    })
  })

  describe('TextRegular', () => {
    it('renders with normal font weight', () => {
      render(<TextRegular text="Regular text" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Regular text')
      expect(heading).toHaveClass('text-[14px]', 'font-normal')
    })
  })

  describe('TextRegular2', () => {
    it('renders with gray color', () => {
      render(<TextRegular2 text="Gray text" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Gray text')
      expect(heading).toHaveClass('text-[14px]', 'font-normal', 'text-[#71717A]')
    })
  })

  describe('TextRegular3', () => {
    it('renders with purple color and center alignment', () => {
      render(<TextRegular3 text="Purple centered text" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Purple centered text')
      expect(heading).toHaveClass(
        'text-[19px]', 
        'font-semibold', 
        'text-[#7C3785]', 
        'text-center', 
        'mx-4'
      )
    })
  })

  describe('TextRegular4', () => {
    it('renders with semibold styling', () => {
      render(<TextRegular4 text="Semibold text" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Semibold text')
      expect(heading).toHaveClass('text-[19px]', 'font-semibold')
    })
  })

  describe('TextRegular5', () => {
    it('renders with semibold gray styling', () => {
      render(<TextRegular5 text="Gray semibold" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Gray semibold')
      expect(heading).toHaveClass('text-[19px]', 'font-semibold', 'text-[#71717A]')
    })
  })

  describe('TextRegular6', () => {
    it('renders with strikethrough effect', () => {
      render(<TextRegular6 text="Strikethrough text" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Strikethrough text')
      expect(heading).toHaveClass(
        'relative',
        'inline-block',
        'text-[15px]',
        'font-semibold',
        'text-[#71717A]'
      )
      
      // Check for the strikethrough span
      const span = heading.querySelector('span')
      expect(span).toHaveClass('absolute', 'border-t-2', 'border-[#71717A]')
    })
  })

  describe('TextRegular7', () => {
    it('renders with fixed width', () => {
      render(<TextRegular7 text="Fixed width" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Fixed width')
      expect(heading).toHaveClass('text-[15px]', 'font-normal', 'w-[100px]')
    })
  })

  describe('TextRegular8', () => {
    it('renders with medium semibold styling', () => {
      render(<TextRegular8 text="Medium semibold" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Medium semibold')
      expect(heading).toHaveClass('text-[18px]', 'font-semibold')
    })
  })

  describe('TextRegular9', () => {
    it('renders with small gray text', () => {
      render(<TextRegular9 text="Small gray text" />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Small gray text')
      expect(heading).toHaveClass('text-[15px]', 'font-normal', 'text-[#71717A]')
    })
  })
})