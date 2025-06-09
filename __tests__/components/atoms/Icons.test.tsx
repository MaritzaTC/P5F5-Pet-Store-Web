import { render, screen } from '@testing-library/react'
import { 
  NavIcon, 
  EyeIcon, 
  GreaterIcon, 
  PersonIcon, 
  CardIcon, 
  CardIconImg, 
  DateIcon, 
  AdminIcon 
} from '@/app/components/atoms/Icons'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}))

// Mock Iconify React component
jest.mock('@iconify/react', () => ({
  Icon: ({ icon, width, height, className }: any) => (
    <div 
      data-testid="iconify-icon" 
      data-icon={icon}
      style={{ width, height }}
      className={className}
    />
  ),
}))

describe('Icon Components', () => {
  describe('NavIcon', () => {
    it('renders with correct icon and styling', () => {
      render(<NavIcon icon="mdi:home" />)
      const icon = screen.getByTestId('iconify-icon')
      expect(icon).toHaveAttribute('data-icon', 'mdi:home')
      expect(icon).toHaveStyle({ width: '37', height: '37' })
      expect(icon).toHaveClass('text-white')
    })

    it('renders within a centered container', () => {
      const { container } = render(<NavIcon icon="mdi:home" />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('flex', 'justify-center', 'items-center')
    })
  })

  describe('EyeIcon', () => {
    it('renders with correct dimensions and styling', () => {
      render(<EyeIcon icon="mdi:eye" />)
      const icon = screen.getByTestId('iconify-icon')
      expect(icon).toHaveAttribute('data-icon', 'mdi:eye')
      expect(icon).toHaveStyle({ width: '20', height: '20' })
      expect(icon).toHaveClass('text-black')
    })
  })

  describe('GreaterIcon', () => {
    it('renders Image component with correct props', () => {
      render(<GreaterIcon />)
      const image = screen.getByAltText('Check mark')
      expect(image).toHaveAttribute('src', '/Container.png')
      expect(image).toHaveAttribute('width', '15')
      expect(image).toHaveAttribute('height', '15')
    })
  })

  describe('PersonIcon', () => {
    it('renders with correct icon and styling', () => {
      render(<PersonIcon icon="mdi:person" />)
      const icon = screen.getByTestId('iconify-icon')
      expect(icon).toHaveAttribute('data-icon', 'mdi:person')
      expect(icon).toHaveStyle({ width: '24', height: '24' })
      expect(icon).toHaveClass('text-black')
    })

    it('renders within amber container', () => {
      const { container } = render(<PersonIcon icon="mdi:person" />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('text-amber-400')
    })
  })

  describe('CardIcon', () => {
    it('renders with large dimensions and purple color', () => {
      render(<CardIcon icon="mdi:card" />)
      const icon = screen.getByTestId('iconify-icon')
      expect(icon).toHaveAttribute('data-icon', 'mdi:card')
      expect(icon).toHaveStyle({ width: '106', height: '106' })
      expect(icon).toHaveClass('text-[#7C3785]')
    })
  })

  describe('CardIconImg', () => {
    it('renders Image component with provided URL', () => {
      const testUrl = '/test-icon.png'
      render(<CardIconImg url={testUrl} />)
      const image = screen.getByAltText('cards icons')
      expect(image).toHaveAttribute('src', testUrl)
      expect(image).toHaveAttribute('width', '106')
      expect(image).toHaveAttribute('height', '106')
    })
  })

  describe('DateIcon', () => {
    it('renders with correct icon and styling', () => {
      render(<DateIcon icon="mdi:calendar" />)
      const icon = screen.getByTestId('iconify-icon')
      expect(icon).toHaveAttribute('data-icon', 'mdi:calendar')
      expect(icon).toHaveStyle({ width: '24', height: '24' })
      expect(icon).toHaveClass('text-black')
    })
  })

  describe('AdminIcon', () => {
    it('renders with large dimensions and white text', () => {
      render(<AdminIcon icon="mdi:admin" />)
      const icon = screen.getByTestId('iconify-icon')
      expect(icon).toHaveAttribute('data-icon', 'mdi:admin')
      expect(icon).toHaveStyle({ width: '53', height: '53' })
      expect(icon).toHaveClass('text-white')
    })
  })
})