import { render, screen } from '@testing-library/react'
import Card from '@/app/components/molecules/Card'

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: any) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ),
}))

describe('Card Component', () => {
  it('renders all card items', () => {
    render(<Card />)
    
    // Check for all expected card titles
    expect(screen.getByText('Crear Promoción Simple')).toBeInTheDocument()
    expect(screen.getByText('Crear Promoción Por Categoria')).toBeInTheDocument()
    expect(screen.getByText('Eliminar Promoción')).toBeInTheDocument()
    expect(screen.getByText('Estado de Promociones')).toBeInTheDocument()
    expect(screen.getByText('Lista de Promociones')).toBeInTheDocument()
    expect(screen.getByText('Lista de Borradores')).toBeInTheDocument()
  })

  it('renders cards with correct styling', () => {
    const { container } = render(<Card />)
    
    // Check grid container
    const gridContainer = container.firstChild as HTMLElement
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'sm:grid-cols-2',
      'lg:grid-cols-3',
      'gap-4',
      'mt-6'
    )

    // Check individual card styling
    const cards = container.querySelectorAll('[class*="bg-[#FCFCFC]"]')
    expect(cards).toHaveLength(6)
    
    cards.forEach(card => {
      expect(card).toHaveClass(
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'bg-[#FCFCFC]',
        'w-[198px]',
        'h-[213px]',
        'rounded-[8px]',
        'border-[#7C3785]',
        'border-2',
        'shadow-md'
      )
    })
  })

  it('renders cards with correct images', () => {
    render(<Card />)
    
    // Check for specific icons
    expect(screen.getAllByAltText('cards icons')).toHaveLength(6)
    
    // Check for specific image sources
    const images = screen.getAllByAltText('cards icons')
    const expectedIcons = [
      '/tabler-icon-calendar-plus.png',
      '/tabler-icon-calendar-plus.png',
      '/tabler-icon-calendar-minus.png',
      '/tabler-icon-calendar-off.png',
      '/tabler-icon-list-details.png',
      '/tabler-icon-eraser.png'
    ]
    
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', expectedIcons[index])
      expect(img).toHaveAttribute('width', '106')
      expect(img).toHaveAttribute('height', '106')
    })
  })

  it('renders cards with correct links', () => {
    render(<Card />)
    
    const links = screen.getAllByTestId('next-link')
    expect(links).toHaveLength(6)
    
    const expectedHrefs = [
      '/simplepromotion',
      '/promotionbycategory',
      '/promotionbycategory',
      '/selectionpromotion',
      '/listpromotions',
      '/eraserlist'
    ]
    
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedHrefs[index])
    })
  })

  it('renders horizontal dividers in each card', () => {
    const { container } = render(<Card />)
    
    const dividers = container.querySelectorAll('hr')
    expect(dividers).toHaveLength(6)
    
    dividers.forEach(divider => {
      expect(divider).toHaveClass(
        'w-[100px]',
        'h-[0.5px]',
        'my-3',
        'border-t',
        'border-[#7C3785]'
      )
    })
  })

  it('has hover effects on cards', () => {
    const { container } = render(<Card />)
    
    const cards = container.querySelectorAll('[class*="cursor-pointer"]')
    expect(cards).toHaveLength(6)
    
    cards.forEach(card => {
      expect(card).toHaveClass('cursor-pointer', 'hover:shadow-lg', 'transition')
    })
  })
})